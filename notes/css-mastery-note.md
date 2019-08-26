# 《精通 CSS (2006 - 第一版)》笔记

家里翻出来的一本老书，略加复习，对《CSS 世界》做一个补充。

因为该书较老，有些知识已经过时。把 padding 翻译成填充，margin 翻译成空白，让人反而不好理解，这种专业词汇不如不翻。

看完此书后发现这版书基本没有什么价值了，要看新版的才行。看了一下第二版的目录和第一版差不了多少，只是最后的案例不一样，第三版改动较大。

## 第 1 章 - 基础知识

使用有意义的标记，类名。

类名应该与它的行为相关，与表现形式无关。好的名字：error, mainNav，不好的名字：red, topNav。

div/span，div 用来对块级元素分组，而 span 对行内元素分组或标识。应该只在没有现有元素能够实现区域分割的情况下使用 div 元素，比如 ul 外层就没有必要再嵌一个 div。

选择器，略。

在 css 中使用 @import 导入其它 css 是原生支持的？

```css
/* main.css */
@import url(/css/layout.css);
@import url(/css/typography.css);
@import url(/css/color.css);
```

## 第 2 章 - 可视化格式模型

三个最重要的概念：浮动 (float)，定位 (position)，框模型 (box model)

框模型，略。

margin 叠加，即 margin 的垂直叠加，列举了各种叠加的情况，详略。注意，只有普通文档流中 block 框的垂直 margin 才会发生叠加，行内框、浮动框或绝对定位框之间的 margin 不会叠加。

行内框在一行中水平布置。可以用水平 padding、边框和 margin 调整它们的水平间距，但是，垂直 padding、边框和 margin 不影响行内框的高度。由一行形成的水平框称为行框 ... 设置行高可以增加这个框的高度。

清除浮动会使塌陷的高度重新恢复，即会使容器重新包含浮动元素。

其余略。

## 第 3 章 - 背景图像和图像替换

背景圆角，阴影的实现，已过时，可用 CSS 3 新增的 border-radius，box-shadow。但仍可学习到其思想，圆角的拉伸实现，和 Android 中用 ".9" 格式的图片实现背景是类似的思想。

## 第 4 章 - 对链接应用样式

略。

记住这个例子即可，给页面上所有的外部链接在右侧加一个图标：

```css
a[href^='http'] {
  background: url(images/externalLink.gif) no-repeat right top;
  padding-right: 10px;
}
a[href^="http://wwww.yoursite.com"] {
  background-image: none;
  padding-right: 0;
}
```

tooltip 的一种简单实现，替代 title 属性，使用 hover 加上 absolute 定位。

```
<p>
  <a href="xxx" class="tooltip">Andy Budd <span>(This website rocks)</span></a>
  is a web developer ...
</p>

a.tooltip {
  position: relative;
}
a.tooltip span {
  display: none;
}
a.tooltip:hover span {
  display: block;
  position: absolute;
  top: 1em;
  left: 2em;
  ...
}
```

## 第 5 章 - 对列表应用样式和创建导航条

详略，有些方法已过时。

"5.3 在导航条中突出显示当前页面链接" 这个小技巧不错，不用去通过 url 进行正则匹配来判断链接是否与当前页面匹配。方法是给每一个页面的 body 加一个不同的 id。

```html
<body id="home">
  <ul id="mainNav">
    <li class="home"><a href="/home">Home</a></li>
    <li class="about"><a href="/about">About</a></li>
    ...
  </ul>
</body>
```

相应的 css:

```css
#home #mainNav .home a,
#about #mainNav .about a {
  background-color: blue;
  color: #fff;
  ...;
}
```

"5.6 CSS 图像映射"，使用绝对定位实现。

自定义列表：dl / dt / dd

## 第 6 章 - 对表单和数据表格应用样式

对表格的修饰。table / summary / caption / thead / tbody / tfoot，详略。

CSS 规范有两个表格边框模型：单独和叠加。在单独模型中，在各个单元格周围有边框，而叠加模型中单元格共享边框。大多数浏览器默认采用单独模型，如果要想用叠加模型，把 table 的 border-collpase 属性设置成 collpase。

对表单的修改。

用 fieldset / lengend 来对表单元素进行分组。(实际很少人用吧)

表单标签 - label，用来在每个表单元素中添加有意义的描述性标签，在很多浏览器中，单击标签元素将导致相关联的表单元素获得焦点。标签还用于屏幕辅助阅读。

将标签与表单关联有两种方式，一种是隐式，一种是显式。

```html
<label>email <input name="email" type="text"/></label>
```

```html
<div>
  <label for="email">email</label>
  <input name="email" id="email" type="text" />
</div>
```

显示方式中，label 的 for 通过和 input 的 id 同名进行关联。作者推崇第一种方式。

在视觉上隐藏上一些不必要 label，使用很大负值的 text-indent 等方式，但不要用 "display: none"，这样，屏幕辅助器无法工作。

将 label 和 input 同一行排列，但让所有 label 左对齐，所有 input 左对齐，方法之一是将 label 进行 float，并设置相同的宽度。

```css
label {
  float: left;
  width: 100px;
}
```

## 第 7 章 - 布局

### 7.1 让设计居中

一种是 "margin: 0 auto;"。

另一种：

```css
body {
  text-align: center;
}
#wrapper {
  width: 720px;
  text-align: left;
}
```

在 IE 上，"text-align: center;" 会让所有东西居中，而不只是文本。(现代浏览器呢？)

其它略。

### 7.2 基于浮动的布局

两列的浮动布局：让导航区 "float: left;"，让内容区 "float: right;"。

三列的浮动布局：在两列的基础上，对内容区的两列进行使用 float，对内容区的左侧进行 "float: left;"，对内容区的右侧进行 "float: right;"。

(实际也可以用 "float: left;" 加上 margin-left，不需要 "float: right;"，此书后面的案例就只用了 "float: left;")

```html
<div id="wrapper">
  <div id="mainNav">...</div>
  <div id="content">
    <div id="mainContent">...</div>
    <div id="secondaryContent">...</div>
  </div>
</div>
```

```css
#mainNav {
  width: 180px;
  float: left;
}

#content {
  width: 520px;
  float: right;
}

#mainContent {
  width: 320px;
  float: left;
}

#secondaryContent {
  width: 180px;
  float: right;
}
```

以上两种方式中，列的宽度使用了固定宽度，因此没有流动性，既拉伸浏览览器，改变浏览器的大小，相应的布局大小不会随之改变，

流体布局：将 width 的值改为百分比，并用 min-width / max-width 做一些约束。

其余详略。(因为有了 flexbox 和 grid 后我们现在应该不用浮动来布局了。)

## 第 8 章 - 招数和过滤器

招数？？愣了半天，原来是 hack 的翻译...

略，现在都用不上了吧。

## 第 9 章 - bug 和 bug 修复

略，基本都是在讲如何修复 IE6 上的 bug...

## 第 10 章 - 案例 1 More Than Doodles

三列布局，对三列全部使用 "float: left;" 及不同的 margin-left。其余略。

## 第 11 章 - 案例 2 Tuscany Luxury Resorts

详略。

本书大量使用了 "background: url(xxx.gif) repeat-x/repeat-y top/bottom left/center;" 的方式来生成背景。
