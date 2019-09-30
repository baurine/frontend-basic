# SVG 及动画

## SVG 基础知识

- [SVG 图像入门教程](https://www.ruanyifeng.com/blog/2018/08/svg.html)
- [菜鸟教程之 SVG 教程](http://www.runoob.com/svg/svg-tutorial.html)

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
