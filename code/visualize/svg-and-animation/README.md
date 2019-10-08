# SVG 及动画

## SVG 基础知识

- [SVG 图像入门教程](https://www.ruanyifeng.com/blog/2018/08/svg.html)
- [菜鸟教程之 SVG 教程](http://www.runoob.com/svg/svg-tutorial.html)
- [SVG 教程的翻译版](https://github.com/brucewar/svg-tutorial)

主要就是学习各种形状标签的用法。

- 常用形状标签
  - rect
  - circle
  - ellipse
  - line
  - polyline - 折线
  - polygon - 多边形
  - path (以下命令大写表示绝对定位，小写表示相对定位)
    - M/m = moveto
    - L/l = lineto
    - H/h = horizontal lineto
    - V/v = vertical lineto
    - C/c = curveto
    - S/s = smooth curveto
    - Q/q = quadratic Bézier curve
    - T/t = smooth quadratic Bézier curveto
    - A/a = elliptical Arc
    - Z/z = closepath
- 其它标签
  - g - group
  - text - 文本
  - image - 显示图片
  - animate - 动画
  - animateTransform - 变形
  - use - 复制一个形状
  - defs - 自定义形状，不显示，供 use 引用使用
  - pattern - 用来平铺一个区域 (??)
- 属性
  - viewBox
  - stroke
  - ...
- 滤镜 - filter
  - feBlend
  - feColorMatrix
  - feGaussianBlur - 高斯模糊
  - ...
- 渐变
  - linearGradient
  - radialGradient

滤镜和渐变都必须定义在 defs 标签中，然后供实际的形状标签使用。

示例：

```svg
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="f1" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3"
  fill="yellow" filter="url(#f1)" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
</svg>
```

svg 的使用方式：

- 直接插入网页，成为 DOM 一部分，然后和 js/css 交互
- 写在一个独立文件中，然后用 img/object/embed/iframe 标签引入
- css 也可以使用 svg 作为背景属性：`background: url(bg.svg);`

## SVG 动画

- [掘金小册 - SVG 动画开发实战手册](https://juejin.im/book/5c01f06af265da61171c7656)

### SVG 概述

略。

### SVG 文件导出与优化

一般用 Adobe Illustrator 绘制 SVG，然后导出，导出时最好先优化一下，删除一下不必要的节点。有一些用于优化的第三方工具。

### SVG 描边动画

使用 path 的三个属性：

- stroke - 定义边框颜色
- stroke-dasharray - 定义 dash 和 gap 长度，比如 "5, 5" 表示实线长度 5，间隔 5
- stroke-dashoffset - 设置 dasharray 中 dash 线条开始的位置，可以为具体数值或百分比

描边动画的原理，先将 dasharray 中 dash/gap 的长度设置为整个 path 的长度，dashoffset 也是整个线条的长度，此时，path 显示的 gap 部分，不可见，然后将 dashoffset 的值为成 0，让 dash 部分显示出来。

示例代码：

```
.svg1 line {
    stroke-dasharray:300,300;
    stroke-dashoffset:300;
    transition:all 2s linear;
}
```

在 chrome 的 inspect 中手动将 `stroke-dashoffset` 值变成 0，就可以看到描边动画了。

### SVG 蒙版动画

蒙版动画有两种：

- clipPath - 裁剪
- mask - 庶罩，相比裁剪允许设置渐变和透明度

动画：通过改变蒙版的大小，透明度等实现。详略。看示例代码。

### SMIL 动画简介

SMIL: Synchronized Multimedia Intergration Language。内置在 SVG 中的动画，不借助 css 和 js，可以实现一些简单的动画，复杂动画还是需要 css 和 js 的。

使用 `<animate>` 和 <animateTransform>` 两个标签。

示例：

```svg
<svg width="500px" height="500px" viewBox="0 0 500 500">
    <rect x="0" y="0" width="100" height="100" fill="#feac5e">
        <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
    </rect>
</svg>

<svg width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
  <g>
    <animateTransform attributeName="transform" type="rotate" values="0 33 33;270 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"/>
    <circle fill="none" stroke-width="6" stroke-linecap="round" stroke="#000" cx="33" cy="33" r="30" ></circle>
   </g>
</svg>
```

### Anime.js 简介

基本上可以把 Anime.js 可以看作是简化版的 GSAP (GreenSock Animation Platform)，原理和用法都差不多。Anime 可以在 HTML DOM 元素上使用动画，对 SVG 的支持也很友好。

基本使用示例：

```js
anime({
  targets: '.box',
  translateX: 300,
  duration: 800,
  delay: 600,
  easing: 'easeInOutSine',
  loop: true
})
```

参数：

```
{
  /* 需要运动的元素，它可以是 div 或者是 CSS 类名 ID 名 .box #box，也可以是 SVG 元素 */
  /* 操作指定元素的相关属性，比如宽、高、透明度、颜色，位置等属性 */
  /* 定义动画的时间，延迟时间以及运动曲线等 */
  /* 指定元素的动画是否循环播放或者自动播放等属性 */
}
```

时间轴动画功能 (多个动画依次发生)：

```
var basicTimeline = anime.timeline(...);
basicTimeline.add(...).add(...)
```

详细使用见文档及示例代码。

动画，其实所有平台的动画 API 都大致相同，设置动画的起点和终点状态，包括位置 (translateX/Y)，大小 (scale)、透明度 (opacity)、颜色 (color)、旋转 (rotate) 等等，再设置动画执行的时间长度、延迟时间、动动曲线，及动画执行的次数及是否反转等。中间的变换过程有默认的插值算法 (android 平台可以自己重写插值算法替代默认的插值算法)。

### Anime SVG 描边动画

通过修改目标的 strokeDashoffset 值实现。

核心代码：

```js
var letterTime = 2000

var lineDrawing = anime({
  targets: 'path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  duration: letterTime,
  delay: function(el, i) {
    return letterTime * i
  },
  begin: function(anim) {
    var letters = document.querySelectorAll('path'),
      i

    for (i = 0; i < letters.length; ++i) {
      letters[i].setAttribute('stroke', 'white')
      letters[i].setAttribute('fill', 'none')
    }
  },
  autoplay: false
})
```

### Anime SVG 路径跟随动画

获取路径的坐标，将目标的坐标设置成 path 的坐标。

核心代码：

```js
var path = anime.path('path') // 获取路径

anime({
  targets: '.square',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  duration: 3000,
  loop: true,
  easing: 'linear'
})
```

起作用的关键三行代码：

```js
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
```

### Anime.js 蒙版动画

Morphing 动画，在多个形状之间变换。中间的变换是由默认的插值算法实现的。

核心代码：

```js
var morph = anime({
  targets: 'path',
  d: [
    {
      value:
        'M64,168c0,0-30-123,80-108s91,54,182,64s95,10,121,36s161,110,5,121s-239,115.9-333,48.9S64,168,64,168z'
    }
  ],
  easing: 'easeInOutQuad',
  duration: 3000,
  direction: 'alternate',
  loop: true
})
```

但是要注意，变换的多个形状，它们的顶点数最好要相同，这样变换比较自然。
