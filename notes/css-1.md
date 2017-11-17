# CSS - Part 1

学习资源：

1. [CSS 教程](http://www.runoob.com/css/css-tutorial.html)

CSS：Cascading Style Sheets 层叠样式表

## CSS 语法

CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。

    h1 {
      color: blue;
      font-size: 12px;
    }

花括号前的为选择器，是需要改变样式的对象。花括号中的为声明，每条声明由一个属性和一个值组成，每条声明以 ";" 结束。

CSS 中可以使用注释：

    /* 这是个注释 */
    p {
      text-align: center;
      /* 这是另一个注释 */
      color: black;
      font-family: arial;
    }

## CSS 选择器

- 选择某种特定的标签，直接用这个标签的名字作为选择器，比如 `p`。
- 选择某个特定 id 的元素，用 `#id` 作为选择器，比如选中 `id="para1"` 的元素，选择器为 `#para1`。
- 选择某类特定 class 的元素，用 `.class` 作为选择器，比如选中 `class="search-box"`，选择器为 `.search-box`。

(后面还会学习到可以通过属性来选择元素。)

它们可以串联使用，比如选择 class 为 "center" 的 p 元素，则使用 `p.center`。

    p.center {
      text-align: center;
    }

这些选择器的优先级：内联 > id > class > 标签

内联是指直接将样式定义在标签上，没有使用选择器，如下所示：

    <h3 style="color:red;">Runobb</h3>

## CSS 选择器：分组和嵌套

分组选择器，用逗号分隔的选择器，表示这些选择器具有相同的样式，但它们之前没有层级关系：

    h1,h2,p {color: green;}

上面这个例子表示所有的 h1 元素，h2 元素，p 元素指定颜色为白色的样式，h1, h2, p 元素之前没有层级关系。

嵌套选择器，用空格分隔的选择器，它们之间有层级关系：

    .marked p {color: white;}

上例表示，为所有 class="marked" 的元素内的 p 元素指定颜色为白色的样式。

## CSS 组合选择符

组合选择符说明了两个选择器直接的关系。CSS 组合选择符包括各种简单选择符的组合方式。

在 CSS3 中包含了四种组合方式：

- 后代选取器 (以空格分隔)
- 子元素选择器 (以大于号分隔)
- 相邻兄弟选择器 (以加号分隔)
- 普通兄弟选择器 (又叫后续兄弟选择器，以破折号分隔)

**后代选择器**

后代选取器匹配所有指定元素的后代元素。

选取所有 div 元素中的 p 元素：

    div p {...}

**子元素选择器**

与后代选择器相比，子元素选择器 (child selectors) 只能选择作为某元素子元素的元素。

选取 div 元素中所有直接子元素 p：

    div>p {...}

**相邻兄弟选择器**

相邻兄弟选择器 (adjacent sibling selector) 可选择紧接在另一元素后的元素，且二者有相同父元素。

选择所有位于 div 元素后的第一个 p 元素：

    div+p {...}

注意，p 和 div 必须连续，中间不能有其它元素。

**后续兄弟选择器**

后续兄弟选择器选取所有指定元素之后的所有指定兄弟元素。(注意，是所有，而上一个相邻兄弟选择器是只选择第一个元素。)

选取所有 div 元素之后的所有兄弟 p 元素：

    div~p {...}

注意，p 和 div 中间可以有其它元素，比如：

    <div>A</div>
    <h1>B</h1>
    <p>P1</p>
    <h2>C</h2>
    <p>P2</p>

上例中两个 p 元素都可以被选取。

## CSS 属性选择器

选择具有特定属性或具有特定值的属性的元素，而不仅仅通过 id 和 class 来选择元素。

语法，用 `[]` 选择：

    [property=value] {...}

**属性选择器**

    [title] {color: blue;}

选取所有包含标题 (title) 的所有元素，设其颜色为蓝色。

**属性和值选择器**

    [title='runoob'] {border: 5px solid green;}

选择所有 title 属性的值为 runoob 的元素，并为其设置样式。

除了所有 `=` 表示完全匹配外，还可以使用 `~=` 和 `|=` 表示部分区配。(怎么个部分法?)

在表单中的应用：

    input[type="text"] {...}   /* 选择所有类型为 text 的 input 元素 */
    input[type="button"] {...} /* 选择所有类型为 button 的 input 元素 */

## CSS 创建

CSS 的三种形式：

- 外部样式表
- 内部样式表
- 内联样式

**外部样式表**

在文档的 `<head>` 中用 `<link>` 标签引入外部样式表文件，以 `.css` 的文件形式存在。

    <head>
      <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>

    // mystyle.css
    hr {color: sienna;}
    p {margin-left: 20px;}
    body {background-image: url("/images/back40.gif");}

**内部样式表**

在文档的 `<head>` 中用 `<style>` 标签定义。

    <head>
      <style>
        hr {color: sienna;}
        p {margin-left: 20px;}
        body {background-image: url("images/back40.gif");}
      </style>
    </head>

**内联样式**

直接定义在标签的 style 属性上。

    <p style="color:sienna;margin-left:20px">这是一个段落。</p>

**优先级**

内联 > 内部 > 外部 > 浏览器默认样式

但是，如果外部样式放在内部样式之后，则外部样式覆盖内部样式。(所以内部样式表和外部样式表的优先级，只是取决于顺序。)

## CSS 背景

CSS 背景属性用于定义 HTML 元素的背景。

CSS 属性定义背景效果：

- background-color
- background-image
- background-repeat
- background-attachment
- background-position
- background

**background-color**

用颜色充当背景。

color 有三种表现表式：

- 十六进制 - "#ff0000"
- RGB - "rgb(255,0,0)"
- 颜色名称 - "red"

示例：

    h1 {background-color: #ff0000;}
    p {background-color: rgb(255,0,0);}
    div {background-color: red;}

**background-image**

用图片充当背景。

    body {background-image: url('gradient2.png');}

**background-repeat**

默认情况下 background-image 属性会在页面的水平或者垂直方向平铺。

我们可以用 background-repeat 来控制是否平铺以及在哪个方向平铺。

    body {
      background-image: url('gradient2.png');
      background-repeat: repeat-x;
    }

(除了 repeat-x，repeat-y，还有什么值? 还有 no-repeat，表示不平铺)

**background-position**

默认背景图片从左上角开始放置，用 background-posistion 可以改变默认的放置位置。

**background-attachment**

控制背景图片是否固定，还有随着内容一起滚动，默认值是 "scroll"，即后者，设为 "fixed" 可以让背景始终固定。

**背景属性的简写**

可以将以上所有属性一起设置在 background 属性中，必须遵循规定的顺序：

    body {background: #ffffff url('img_tree.png') no-repeat right top;}

(background-attachment 去哪了?)

## CSS 文本

相关的属性：

- color - 设置文本颜色
- direction - 设置文本方向
- letter-spacing - 设置字符间距
- line-height - 设置行高
- text-align - 对齐元素中的文本
- text-decoration - 向文本添加修饰
- text-indent - 缩进元素中文本的首行
- text-shadow - 设置文本阴影
- text-transform - 控制元素中的字母
- unicode-bidi - 设置或返回文本是否被重写
- vertical-align - 设置元素的垂直对齐
- white-space - 设置元素中空白的处理方式
- word-spacing - 设置字间距

**text-align**

值：center, right, justify ...

**text-decoration**

值：none, overline, line-through, underline ...

可以用 none 值来消除 `<a>` 链接默认带的下划线。

**text-transform**

值：uppercase, lowercase, capitalize ...

## CSS 字体

CSS 字体属性定义字体，加粗，大小，文字样式。

属性：

- font-family - 指定文本的字体系列
- font-size - 指定文本的字体大小
- font-style - 指定文本的字体样式
- font-variant - 以小型大写字体或者正常字体显示文本
- font-weight - 指定字体的粗细
- font - 在一个声明中设置所有的字体属性

### CSS 字型

在 CSS 中，有两种类型的字体系列名称：

- 通用字体系列 - 拥有相似外观的字体系统组合 (如 "Serif" 或 "Monospace")
- 特定字体系列 - 一个特定的字体系列 (如 "Times" 或 "Courier")

通俗地说，前者是一类字体，这类字体包含很多具体的字体类型。

Generic family | 字体系列                       | 说明
---------------|------------------------------|---------------------------------------
Serif          | Times New Roman / Georgia    | Serif 字体中字符在行的末端拥有额外的装饰
Sans-serif     | Arial / Verdana              | Sans 是指无衬线，这些字体在末端没有额外的装饰
Monospace      | Courier New / Lucida Console | 所有的等宽字符具有相同的宽度

(终于多明白了一些字体的知识!)

(serif 更适合在纸上阅读，而 sans-serif 更适合在电脑屏幕上阅读。)

**font-family**

font-family 属性设置文本的字体系列。

font-family 属性应该设置几个字体名称作为一种 "后备" (fallback) 机制，如果浏览器不支持第一种字体，他将尝试下一种字体。

注意: 如果字体系列的名称超过一个字，它必须用引号，如 `Font Family："宋体"`。

多个字体系列是用一个逗号分隔指明：

    p {font-family: "Times New Roman", Times, serif;}

(上面这个例子中三种字体都是 serif 类型。)

记得几种常用的字体组合：

- serif - "Times New Roman", Times, serif
- sans-serif - Arial, Helvetica, sans-serif
- monospace - "Courier New", Courier, monospace

在 [CSS Web 安全字体组合](http://www.runoob.com/cssref/css-websafe-fonts.html) 查看更多组合。

**font-size**

三种格式：

    p {font-size: 16px;}
    p {font-size: 1em;}
    p {font-size: 100%;}

1 em = 16 px

**font-style**

值：normal, italic (斜体), oblique (类似斜体)...

注意，并没有一个 bold 的 font-style 值让字体加粗，让字体加粗用 font-weight 属性。

**font-weight**

    p.normal {font-weight: normal;}
    p.light {font-weight: lighter;}
    p.thick {font-weight: bold;}
    p.thicker {font-weight: 900;}

## CSS 链接

链接的样式，可以用任何CSS属性 (如颜色，字体，背景等)。

特别的链接，可以有不同的样式，这取决于他们是什么状态。

这四个链接状态是：

- a:link - 正常，未访问过的链接
- a:visited - 用户已访问过的链接
- a:hover - 当用户鼠标放在链接上时
- a:active - 链接被点击的那一刻

(注意，上面四个顺序是固定的，可以这样记：L-O-VE H-A-TE)

## CSS 列表

用于 `<li>` 的样式属性：

- list-style-image - 将图象设置为列表项标志
- list-style-position - 设置列表中列表项标志的位置
- list-style-type - 设置列表项标志的类型
- list-style - 简写属性，用于把所有用于列表的属性设置于一个声明中

## CSS 表格

略。只有一个特别的样式属性：border。

## CSS 盒子模型 (Box Model)

![](../art/box-model.gif)

四部分内容：

- Margin (外边距) - 清除边框外的区域，外边距是透明的
- Border (边框) - 围绕在内边距和内容外的边框
- Padding (内边距) - 清除内容周围的区域，内边距是透明的
- Content (内容) - 盒子的内容，显示文本和图像

需要注意的是，box 的背景会充满 Content 和 Padding 部分，而不只是限制在 Content 中，Content 限制的只是内容，不包括背景。

另外，在 HTML 中，相邻元素的 margin 是会重叠的，实际的 margin 是两者是较大的那一个。(但在 Android / ReactNative 中相邻 view 的 margin 是不会重合的，实际的 margin 是两者之和。)

### 元素的宽度和高度

传统的这种盒子模型称为 Content-Box，这是因为在元素的 width 和 height 属性，只是 Content 部分的 width 和 height，不包括 Padding，Border。(Margin 自然是不包括的，在任何模型中都不会计算到元素的实际宽高中。)

所以在这种模型中，一个元素的实际宽高 (即实际占据的空间)，还要加上 padding 和 border 的宽度。

而且，这种模型还存在兼容性问题，在 IE 中，width 和 height 属性的值，是包括 Content，Padding 和 Border 的。

如今的解决办法是，使用 Border-Box，顾名思义，就是 Padding 和 Border 都包括在 width 属性的值中 (其实相当于就是采纳了 IE 的标准啦。)

## CSS Border

设置边框的样式、宽度、颜色：

- border-top-width - 设置元素的上边框的宽度
- border-top-style - 设置元素的上边框的样式
- border-top-color - 设置元素的上边框的颜色
- border-top - 简写属性，用于把上边框的所有属性设置到一个声明中

- border-right-width - 设置元素的右边框的宽度
- border-right-style - 设置元素的右边框的样式
- border-right-color - 设置元素的右边框的颜色
- border-right - 简写属性，用于把右边框的所有属性设置到一个声明中

- border-bottom-width - 设置元素的下边框的宽度
- border-bottom-style - 设置元素的下边框的样式
- border-bottom-color - 设置元素的下边框的颜色
- border-bottom - 简写属性，用于把下边框的所有属性设置到一个声明中

- border-left-width - 设置元素的左边框的宽度
- border-left-style - 设置元素的左边框的样式
- border-left-color - 设置元素的左边框的颜色
- border-left - 简写属性，用于把左边框的所有属性设置到一个声明中

- border-width - 简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度
- border-style - 用于设置元素所有边框的样式，或者单独地为各边设置边框样式
- border-color - 简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色
- border - 简写属性，用于把针对四个边的属性设置在一个声明

示例：

    p {border: 5px solid red;}

## CSS 轮郭 (Outline)

轮廓 (outline) 是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。(在 border 之外)

轮廓 (outline) 属性指定元素轮廓的样式、颜色和宽度。和 border 的属性是一样的，但是不可以为单独某条边设置。

- outline-width
- outline-style
- outline-color
- outline

## CSS Margin

- margin-top
- margin-right
- margin-bottom
- margin-left
- margin

margin 的值：

- auto
- %
- 具体的值，单位可以是 px, em, pt

margin 的值有四种写法：

- `margin: 25px 50px 75px 100px;`
  - 上边距为 25px
  - 右边距为 50px
  - 下边距为 75px
  - 左边距为 100px

- `margin: 25px 50px 75px;`
  - 上边距为 25px
  - 左右边距为 50px
  - 下边距为 75px

- `margin: 25px 50px;`
  - 上下边距为 25px
  - 左右边距为 50px

- `margin: 25px;`
  - 所有的 4 个边距都是 25px

## CSS Padding

CSS Padding (填充) 属性定义元素边框与元素内容之间的空间。

其它使用同 Margin 大致相同。略。

## CSS 尺寸 (Dimension)

CSS 尺寸 (Dimension) 属性允许你控制元素的高度和宽度。同样，它允许你增加行间距。

- height - 设置元素的高度
- width - 设置元素的宽度
- max-height - 设置元素的最大高度
- max-width - 设置元素的最大宽度
- min-height - 设置元素的最小高度
- min-width - 设置元素的最小宽度
- line-height - 设置行高

(line-height 在 "CSS 文本" 一小节也讲过的)

它们的值既可以用具体的值表示，单位可以用 px, pt, em，也可以用百分比表示，比如 50%。

## CSS Display & Visibility

隐藏元素可以用 `{display: none;}` 或 `{visibility: hidden;}`，但两者不完全相同，前者对应的元素不会生成在 DOM 树中，也就不会占据任何空间，而后者生成了 DOM 元素，在 DOM 树中，仍然占据了布局空间，只是视觉上看不见。

### 块元素与内联元素

(在 html 中已经介绍过了)

块元素是一个元素，占用了全部宽度，在前后都是换行符。比如：`<h1>`, `<p>`, `<div>`

内联元素只需要必要的宽度，不强制换行。比如：`<a>`, `<span>`

用 display 属性可以必变一个元素的默认显示类型，将 block 改为 inline，或者从 inline 改成 block。如下所示：

    li {display: inline;}
    span {display: block;}

注意，改变一个元素的 display 类型，只是改变它的视觉显示，并不会改变它的其它能力，比如 span，它的默认 display 类型是 inline，它不能嵌套其它元素，将它的 display 改成 block 后，它依然不能嵌套其它元素。

在 HTML5 & CSS3 出现了一种新的 display 值，"inline-block"，之后再介绍。

再次总结一下，display 的值：

- none
- block
- inline
- inline-block

visibility 的值：

- hiddden
- collapse
- visible
