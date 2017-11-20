# Boostrap3 - Part 1

学习资源：

1. [Bootstrap 教程](http://www.runoob.com/bootstrap/bootstrap-tutorial.html)

Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JavaScript 的，它简洁灵活，使得 Web 开发更加快捷。

主要内容：

- Bootstrap 基本结构
- Bootstrap CSS
- Bootstrap 布局组件
- Bootstrap 插件

(目前，我只需要知道 Bootstrap 的原理，目前已理解，大致能做什么事情，具体的细节我不需要理解，需要的时候再回来看细节。)

---

## 简介

Boostrap 的特点，详略，主要是支持响应式，移动优先。

Bootstrap 包的内容：

- 基本结构 - Bootstrap 提供了一个带有网格系统、链接样式、背景的基本结构。
- CSS - Bootstrap 自带以下特性：全局的 CSS 设置、定义基本的 HTML 元素样式、可扩展的 class，以及一个先进的网格系统。
- 组件 - Bootstrap 包含了十几个可重用的组件，用于创建图像、下拉菜单、导航、警告框、弹出框等等。
- JavaScript 插件 - Bootstrap 包含了十几个自定义的 jQuery 插件。您可以直接包含所有的插件，也可以逐个包含这些插件。
- 定制 - 您可以定制 Bootstrap 的组件、LESS 变量和 jQuery 插件来得到您自己的版本。

---

## Bootstrap 环境安装 (基本结构)

详略。主要包括 bootstrap.min.css 和 bootstrap.min.js 两个文件，但由于后者依赖 jQuery，所以在此之前要先引入 jquey.min.js。一般使用 CDN 来引入。另外还有一个可选反 bootstrap 主题 css bootstrap-theme.min.css，一般不使用。

一个使用模版：

    <!DOCTYPE html>
    <html>
      <head>
        <title>Bootstrap 模板</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- 引入 Bootstrap -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

        <!-- HTML5 Shiv 和 Respond.js 用于让 IE8 支持 HTML5元素和媒体查询 -->
        <!-- 注意： 如果通过 file://  引入 Respond.js 文件，则该文件无法起效果 -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
      </head>
      <body>
        <h1>Hello, world!</h1>

        <!-- jQuery (Bootstrap 的 JavaScript 插件需要引入 jQuery) -->
        <script src="https://code.jquery.com/jquery.js"></script>
        <!-- 包括所有已编译的插件 -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </body>
    </html>

---

## Bootstrap CSS

### 概览

使用 HTML5 文档类型：

    <!DOCTYPE html>
    <html>
    ....
    </html>

移动设备优先：

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

响应式图像：

    <img src="..." class="img-responsive" alt="响应式图像">

    .img-responsive {
      display: block;
      height: auto;
      max-width: 100%;
    }

#### 全局显示、排版和链接

**基本的全局显示**

Bootstrap 3 使用 `body {margin: 0;}` 来移除 body 的边距。

body 的设置：

    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 14px;
      line-height: 1.428571429;
      color: #333333;
      background-color: #ffffff;
    }

**排版**

使用 @font-family-base、 @font-size-base 和 @line-height-base 属性作为排版样式。

(?? @ 打头的是 LESS 变量吗?)

**链接样式**

通过属性 @link-color 设置全局链接的颜色。(??)

#### 避免跨浏览器的不一致

Bootstrap 使用 Normalize 来建立跨浏览器的一致性。

Normalize.css 是一个很小的 CSS 文件，在 HTML 元素的默认样式中提供了更好的跨浏览器一致性。

#### 容器

`.container` class。

    <div class="container">
      ...
    </div>

    .container {
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }

    .container:before,
    .container:after {
      display: table;
      content: " ";
    }

    .container:after {
      clear: both;
    }

设置 display 为 table，会创建一个匿名的 table-cell 和一个新的块格式化上下文。`:before` 伪元素防止上边距崩塌，`:after` 伪元素清除浮动。

(还不是理解得很清楚，先继续往下看吧。)

### 网格系统

在 [响应式 Web 设计](./css-responsive.md) 一篇中已有简单介绍。

Bootstrap 网格系统 (Grid System) 的工作原理：

- 行必须放置在 `.container` class 内，以便获得适当的对齐 (alignment) 和内边距 (padding)。
- 使用行来创建列的水平组。
- 内容应该放置在列内，且唯有列可以是行的直接子元素。
- 预定义的网格类，比如 `.row` 和 `.col-xs-4`，可用于快速创建网格布局。LESS 混合类可用于更多语义布局。
- 列通过内边距 (padding) 来创建列内容之间的间隙。该内边距是通过 `.rows` 上的外边距 (margin) 取负，表示第一列和最后一列的行偏移。(??)
- 网格系统是通过指定您想要横跨的 12 个可用的列来创建的。例如，要创建三个相等的列，则使用三个 `.col-xs-4`。

**媒体查询**

    /* 超小设备（手机，小于 768px） */
    /* Bootstrap 中默认情况下没有媒体查询 */

    /* 小型设备（平板电脑，768px 起） */
    @media (min-width: @screen-sm-min) { ... }

    /* 中型设备（台式电脑，992px 起） */
    @media (min-width: @screen-md-min) { ... }

    /* 大型设备（大台式电脑，1200px 起） */
    @media (min-width: @screen-lg-min) { ... }

不同媒体查询的 class 前缀：

- col-xs-n
- col-sm-n
- col-md-n
- col-lg-n

**基本的网格结构**

    <div class="container">
      <div class="row">
        <div class="col-*-*"></div>
        <div class="col-*-*"></div>
      </div>
      <div class="row">...</div>
    </div>
    <div class="container">
      ...
    </div>

**响应式的列重置**

    <div class="container">
      <div class="row" >
        <div class="col-xs-6 col-sm-3">
          ...
        </div>
        <div class="col-xs-6 col-sm-3">
          ...
        </div>

        <div class="clearfix visible-xs"></div>

        <div class="col-xs-6 col-sm-3">
          ...
        </div>
        <div class="col-xs-6 col-sm-3">
          ...
        </div>
      </div>
    </div>

"visible-xs" 类表示此元素只在 xs 屏幕上可以，"clearfix" 表示清除 float 样式。

**偏移列**

使用 `.col-type-offset-n` 类，这些类会把一个列的左外边距 (margin) 增加 n 列，其中 n 范围是从 1 到 11。

xs 屏幕不支持 offset。

    <div class="container">
      <div class="row" >
        <div class="col-xs-6 col-md-offset-3">
          ...
        </div>
      </div>
    </div>

此例将一个占 6 列宽度的元素，向右偏移 3 列，使之居中。

**嵌套列**

略。直接在列中增加新的 `.row` 就行了。

**列排序**

使用 `.col-md-push-n` 和 `.col-md-pull-n` class，例子略，需要时再回来看。

### 排版

Bootstrap 为排版定义的一些 css class。

Bootstrap 使用 Helvetica Neue、Helvetica、Arial 和 sans-serif 作为其默认的字体栈。

使用 Bootstrap 的排版特性，您可以创建标题、段落、列表及其他内联元素。

#### 标题

Bootstrap 中定义了所有的 HTML 标题 (h1 到 h6) 的样式。

**内联子标题**

如果需要向任何标题添加一个内联子标题，只需要简单地在元素两旁添加 `<small>`，或者添加 `.small` class，这样子您就能得到一个字号更小的颜色更浅的文本。(85% 父元素的字号)

#### 引导主体副本 (呵呵，这翻译)

使用 "lead" class，将得到更大更粗、行高更高的文本。

    <p class="lead">...</p>

#### 强调

HTML 的默认强调标签 `<small>` (设置文本为父文本大小的 85%)、`<strong>` (设置文本为更粗的文本)、`<em>` (设置文本为斜体)。

Bootstrap 提供了一些用于强调文本的类。

    <small>本行内容是在标签内</small><br>
    <strong>本行内容是在标签内</strong><br>
    <em>本行内容是在标签内，并呈现为斜体</em><br>
    <p class="text-left">向左对齐文本</p>
    <p class="text-center">居中对齐文本</p>
    <p class="text-right">向右对齐文本</p>
    <p class="text-muted">本行内容是减弱的</p>
    <p class="text-primary">本行内容带有一个 primary class</p>
    <p class="text-success">本行内容带有一个 success class</p>
    <p class="text-info">本行内容带有一个 info class</p>
    <p class="text-warning">本行内容带有一个 warning class</p>
    <p class="text-danger">本行内容带有一个 danger class</p>

#### 缩写

略。

#### 地址

略。

#### 引用

`<blockquote>` 默认是左对齐，使用 "pull-right" class 使之右对齐。

    <blockquote class="pull-right">
      这是一个向右对齐的引用。
      <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
    </blockquote>

#### 列表

"list-unstyled" 类用来移除列表样式，"list-inline" 把所有列表项放到一行内。

#### 更多类

略，需要时再回来看手册。

### 代码

`<code>` 显示行内代码，`<pre>` 显示多行代码。

Bootstrap 应该是给这两个元素默认加上了一些样式。

### 表格

Bootstrap 为表格定义的一些样式类。

Bootstrap 支持的表格元素，略，基本都支持。

作用在 `<table>` 上的类：`.table`, `.table-striped`, `.table-bordered`, `.table-hover`, `.table-condensed` ... (很有用!)

作用在行或单元格 `<tr>` `<th>` `<td>` 上的类：`.active`, `.success`, `.info`, `.warning`, `.danger` ...

**响应式表格**

通过把任意的 `.table` 包在 `.table-responsive` class 内，您可以让表格水平滚动以适应小型设备 (小于 768px)。

    <div class="table-responsive">
      <table class="table">
        ...
      </table>
    </div>

### 表单

Bootstrap 为表单定义的一些样式类。

Bootstrap 通过一些简单的 HTML 标签和扩展的类即可创建出不同样式的表单。

Bootstrap 提供了下列类型的表单布局：

- 垂直表单 (默认)
- 内联表单
- 水平表单

**垂直或基本表单**

基本的表单结构是 Bootstrap 自带的，个别的表单控件自动接收一些全局样式。下面列出了创建基本表单的步骤：

- 向父 `<form>` 元素添加 `role="form"`。
- 把标签和控件放在一个带有 class `.form-group` 的 `<div>` 中，这是获取最佳间距所必需的。
- 向所有的文本元素 `<input>`、`<textarea>` 和 `<select>` 添加 `class="form-control"`。

**内联表单**

如果需要创建一个表单，它的所有元素是内联的，向左对齐的，标签是并排的，请向 `<form>` 标签添加 class `.form-inline`。

- 默认情况下，Bootstrap 中的 input、select 和 textarea 有 100% 宽度。在使用内联表单时，您需要在表单控件上设置一个宽度。
- 在 `<label>` 上使用 class `.sr-only`，您可以隐藏内联表单的标签。

**水平表单**

与垂直表单相比，在 class 为 `.form-group` 的 div 元素中，lable 与 input 是水平的，而不是垂直的。

- 向父 `<form>` 元素添加 class `.form-horizontal`
- 把标签和控件放在一个带有 class `.form-group` 的 `<div>` 中
- 向标签添加 class `.control-label`

#### 支持的表单控件

Bootstrap 支持最常见的表单控件，主要是 input、textarea、checkbox、radio 和 select。

对它们的支持，详略，需要时再回来细看。

### 按钮

Bootstrap 提供了很多比默认按钮样式好看的样式。

可作用 a, input, button 元素上的样式：

- .btn
- .btn-default
- .btn-primary
- .btn-success
- .btn-inof
- .btn-warning
- .btn-danger
- .btn-link
- .btn-lg
- .btn-sm
- .btn-xs
- .btn-block
- .active
- .disabled

详略。

### 图片

Bootstrap 对图片支持的一些类：

- .img-rounded
- .img-circle
- .img-thumbnail
- .img-responsive

### 辅助类

- 文本 - .text-muted, .text-primary, .text-success/info/warning/danger ...
- 背景 - .bg-primary/success/info/warning/danger ...
- 其它 - .pull-left/right, .center-block, .clearfix, .show, .hidden, .close ...

### 响应式实用工具

- visible-xs/sm/md/lg-*
- hidden-xs/sm/md/lg

其余略。
