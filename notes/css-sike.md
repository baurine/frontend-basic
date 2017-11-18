# Sike CSS Note

(这篇笔记是将 <https://github.com/baurine/sike-css> 项目合并而来。)

Learn CSS in [sike.io](http://sike.io).

## Sample

[Profile Page](http://baurine.github.io/sike-css/)

![](../art/css-profile-page.png)

## Note

### Setcion 1 - 迈出第一步

1. html 模板
1. 固定背景
1. 头像容器
1. margin, padding

normal.css

居中外包围框

block，父宽度

- 块级元素：p, div, h1, h2, table, ul, ol...
- 行级元素：span, img, a, button, input...

你常常会看到网页选择 960px 这个宽度，这是因为一般浏览器是 1024 宽，加上滚动条就是 1000-1004。960 给滚动条和其他浏览器 UI 预留了足够的空间。 并且 960 这个数字可以 2，3，4，5，6，8，10，12 等数字除尽，方便做网格。

居中元素的两个技巧：

- `display: block;` 把行元素变成块元素
- `margin: 0 auto;` 用来居中自身，必须指定 width，必须是块元素(??)
- `text-align: center;` 用来居然容器中的元素，并不用于自身的居中

字体风格： Open Sans 字体

Margin 折叠问题。

### Section 2 - 实现导航和页面内容

font-weight 虽然在全局里面设了，单独每个文字的地方还是需要单独设置，晕。。。

1. 全局字体风格，设置在 body, h1..h6 上。
1. 遵照 html 的语义，使用语义标签，而不是样式标签。
   - 导航模块应该使用 nav
   - 文章模块就应该使用 article
   - 头部模块应该使用 header
   - 无编号列表模块应该使用 ul

去除 ul 的默认风格：

- `list-style: none;` 把列表装饰去掉
- `padding: 0; margin: 0;` 把浏览器默认的间隔清除

使用 inline-block：这是因为 inline 元素只能设置其左右内边距和外边距，而不能设置其高度和上下内外边距。和垂直高度有关的 padding, margin, height 都无效。这时可以使用 `display: inline-block`。inline-block 元素可以简单理解为对外表现为行元素，而对内表现为块元素。

和内容无关的装饰性设计元素应该通过 CSS 来实现。下面的练习我们会把图片和下划线加上去。

有些元素不在文档流里。通常一个萝卜一个坑，每个元素在文档流会占据一定的空间，一个接着一个。但有时候有些元素不在文档流里面，比如：

1. 定位的元素 (fixed 或者 absolute 定位)
1. CSS 背景图

float 布局。

overflow：

- 默认的 `overflow: visible` 等于是说 "我允许容器里面的内容凸出这个容器"，所以在这个使用场景飘动的图片凸出了容器，并不包含在容器的高度里面。
- 而 `overflow: hidden` 是说 "我不允许容器里面的内容凸出这个容器"。

`overflow` 属性是作用在容器组件上的，如果定义容器组件为 `overflow: hidden` 且固定宽高，如果子元素的宽高超过了父容器的宽高，那么超过部分会被隐藏掉。

替代 `overflow:hidden` 的另一个解决办法： `clear:both`

    .clearfix:after {
      content: "";
      display: table;
      clear: both;
    }

为何不用 inline-block? 原因是因为行元素 (inline 和 inline-block) 是为了显示文字用的。 如果在书写 HTML 文件时行元素之间有空白符，这些空白会显现出来。

### Setcion 3 - 继续页面内容

`overflow: hidden` 对容器还有一个重要的改变，那就是把该容器变成了一个新的 [block formatting context](http://www.w3.org/TR/CSS21/visuren.html#block-formatting)，简称 bfc。如果一个容器有自己的 bfc，它就不会被外面的浮动元素覆盖。

使用 border-box 模型，替代 content-box 模型。

对布局来说 content-box 只有弊没有利。border-box 的特性是 padding 和 border 算在你指定的宽度里面，所以宽度你说多少就是多少。

### Section 4 - 表单

使用绝对定位，absolute。输入栏标签的布局是使用绝对定位 ( position: absolute ) 的一个经典场景。绝对定位的的适用情况大概是：

1. 有一个主要组件，在文件流里面正常布局；
1. 这个组件有一个附属组件 (它的小伙伴)；
1. 这个附属组件的位置相对于主要组件的位置。

### Section 5 - 响应页面的实现

    <meta name="viewport" content="width=device-width, initia
    l-scale=1">

    @media only screen and (max-width: 480px) {
    }
