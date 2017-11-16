# HTML

学习资源：

1. [HTML 教程](http://www.runoob.com/html/html-tutorial.html)

HTML: HyperText Markup Language

后缀 .htm 和 .html，使用后者，前者是上古时代 (8.3 文件格式限制，后缀只能有三位) 的后缀。

HTML 中不支持空格、回车、制表符，它们都会被解析成一个空白字符。

## 简介

一个最简单的模板：

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>菜鸟教程 (runoob.com)</title>
      </head>

      <body>
        <h1>我的第一个标题</h1>
        <p>我的第一个段落。</p>
      </body>
    </html>

- `<!DOCTYPE html>` 声明为 HTML5 文档，大小写皆可
- `<html>` 元素是 HTML 页面的根元素
- `<head>` 元素包含了文档的元 (meta) 数据
- `<title>` 元素描述了文档的标题
- `<body>` 元素包含了可见的页面内容 (浏览器只显示此部分内容)
- `<h1>` 元素定义一个大标题
- `<p>` 元素定义一个段落

### HTML 标签 (HTML tag)

    <p>我的第一个段落。</p>

- HTML 标签是由尖括号包围的关键词，比如 `<html>`
- HTML 标签通常是成对出现的，比如 `<b>` 和 `</b>`
- 标签对中的第一个标签是开始标签，第二个标签是结束标签
- 开始和结束标签也被称为开放标签和闭合标签

(有些标签是自闭合的，比如 `<img />`，它不是用来包围内容的，它本身就是内容，而用来包围内容的标签，我觉得是用来排版的。)

(是不是还有标签是不需要闭合的，比如 `<input>`，为什么，怎么来理解这一类不需要闭合的标签? 是不是因为它是用来接受输入，而非显示输出，它显示的内容是属于标签的属性，而非被它包围。)

一个关于 `<input>` 的例子：

    <div class="col-sm-10">
      <input type="text" name="today_podcast[date]" id="today_podcast_date" value="2017-11-30">
    </div>

但 `<texteara>` 显示的内容是被它包围的，所以它是有闭合标签的：

    <textarea class="text optional form-control"
              name="today_podcast[introduction]"
              id="today_podcast_introduction">
      A show where we talk about the perspective of 30 somethings on life, love, and the never ending pursuit of fulfillment
    </textarea>

### HTML 元素

"HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思，但是严格来讲, 一个 HTML 元素包含了开始标签与结束标签，以及标签所包围的的内容。

### HTML 版本

HTML / HTML+ / HTML 2.0 / HTML 3.2 / HTML 4.01 / XHTML 1.0 / HTML5 / XHTML5

目前最常用的是 HTML5

对于中文网页，需要指定编码为 utf-8 或 gbk，否则会出现乱码 (待验证?)。在 `<head>` 中指定 `<meta charset="utf-8">` 或者 `<meta charset="gbk">`。

## HTML 基础

- HTML 标题：`<h1>` - `<h6>` 标签
- HTML 段落：`<p>` 标签
- HTML 链接：`<a>` 标签

        <a href="http://www.runobb.com">这是一个链接</a>

- HTML 图片：`<img>` 标签 (自闭合)

        <img src="/images/logo.png" width="258" height="39" />

href, src, width, height 都属于标签的属性，不同的标签支持不同的属性，后面会有更详细的介绍。

## HTML 元素

HTML 文档由 HTML 元素定义。

HTML 元素包括三部分内容：开始标签，元素内容，结束标签。

- HTML 元素以开始标签起始
- HTML 元素以结束标签终止
- 元素的内容是开始标签与结束标签之间的内容
- 某些 HTML 元素具有空内容 (empty content)
- 空元素在开始标签中进行关闭 (以开始标签的结束而结束) (比如 `<br />`)
- 大多数 HTML 元素可拥有属性

(标签及属性都推荐使用小写，在未来版本中被要求使用小写)

### HTML 空元素

没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的。

`<br />` 就是没有关闭标签的空元素。(`<br>` 的写法现在也是可以正常工作的，但在未来的 HTML 版本中，所有元素都必须被关闭，所以推荐使用 `<br />`)

## HTML 属性

- HTML 元素可以设置属性
- 属性可以在元素中添加附加信息
- 属性一般描述于开始标签
- 属性总是以名称/值对的形式出现，比如：name="value" (单引号和双引号都可以)

常见属性：

- class: 为 html 元素定义一个或多个 css 类名
- id: 定义元素的唯一 id
- style: 规定元素的行内样式 (inline style)
- title: 描述了元素的额外信息 (作为工具条使用 ??)

更多标准属性查看参考手册。

## HTML 标题

Heading，`<h1>` - `<h6>`。

标题很重要。

请确保将 HTML 标题 标签只用于标题。不要仅仅是为了生成粗体或大号的文本而使用标题。搜索引擎使用标题为您的网页的结构和内容编制索引。因为用户可以通过标题来快速浏览您的网页，所以用标题来呈现文档结构是很重要的。

应该将 h1 用作主标题 (最重要的)，其后是 h2 (次重要的)，再其次是 h3，以此类推。

`<hr />` 用来产生一条水平线。

注释：`<!-- 注释 -->`

## HTML 段落

`<p>` 标签。

在段落中换行，使用 `<br />` 标签。因为 HTML 的所有连续空格或空行都会逄成一个空格。

    <p>这个<br />段落<br />演示了分行的效果</p>

## HTML 文本格式化

(这一小节了解还真是不多)

`<b>` 对文本进行加粗，`<i>` 对文本进行斜体。

通常用标签 `<strong>` 替换加粗标签 `<b>` 使用，`<em>` 替换 `<i>` 标签使用。然而，这些标签的含义是不同的：

- `<b>` 与 `<i>` 定义粗体或斜体文本。
- `<strong>` 或者 `<em>` 意味着你要呈现的文本是重要的，所以要突出显示。

**HTML 文本格式化标签**

- `<b>` - 定义粗体文本
- `<i>` - 定义斜体字
- `<strong>` - 定义加重语气
- `<em>` - 定义着重文字
- `<small>` - 定义小号字
- `<sub>` - 定义下标字
- `<sup>` - 定义上标字
- `<ins>` - 定义插入字
- `<del>` - 定义删除字

**HTML "计算机输出" 标签**

- `<code>` - 定义计算机代码
- `<kbd>` - 定义键盘码
- `<samp>` - 定义计算机代码样本
- `<var>` - 定义变量
- `<pre>` - 定义预格式文本

**HTML 引文，引用及标签定义**

- `<abbr>` - 定义缩写
- `<address>` - 定义地址
- `<bdo>` - 定义文字方向
- `<q>` - 定义短的引用语
- `<blockquote>` - 定义长的引用语
- `<cite>` - 定义引用、引证
- `<dfn>` - 定义一个定义项目

## HTML 链接

    <a href="url" id="tips" target="_blank">Tips</a>

三个属性：

1. href: 链接目标，有几种形式
   - 以 "http" 开头的其它域名下的网页链接，比如 "https://www.google.com"
   - 以 "#" 开头的本页面内的链接，比如 "#tips"
   - 除了前面两种，剩下的就是同域名下的网页链接，比如 "/about"，"help"
1. id: 可以作为其它链接的锚点，用于其它链接的 href 属性，这样，点击同一页面的其它链接时，会跳过此处

        <a href="#tips">Jump to tips</a>

1. target: 定义链接目标在何处显示，`_blank` 表示在一个新的 tab 中打开链接，`_top` 是什么作用?

> 请始终将正斜杠添加到子文件夹。假如这样书写链接：`href="http://www.runoob.com/html"`，就会向服务器产生两次 HTTP 请求。这是因为服务器会添加正斜杠到这个地址，然后创建一个新的请求，就像这样：`href="http://www.runoob.com/html/"`。

真的吗? (待验证)

一个复杂的发送邮件的链接示例：

    <p>
    这是另一个电子邮件链接：
    <a href="mailto:someone@example.com?cc=someoneelse@example.com&bcc=andsomeoneelse@example.com&subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!" target="_top">发送邮件!</a>
    </p>

    <p>
    <b>注意:</b> 单词直接空格使用 %20 代替，以确保浏览器可以正常显示文本。
    </p>

## HTML 头部

HTML `<head>` 元素包含了所有的头部标签元素。在 `<head>` 元素中你可以插入脚本 (scripts), 样式文件 (css)，及各种 meta 信息。

可以添加在头部区域的元素标签为：

- `<title>`
- `<base>`
- `<meta>`
- `<style>`
- `<link>`
- `<script>`
- `<noscript>`

**`<title>`**

定义不同文档的标题，在 HTML/XHTML 文档中是必须的。

作用：

- 定义了浏览器工具栏的标题
- 当网页添加到收藏夹时，显示在收藏夹中的标题
- 显示在搜索引擎结果页面的标题

**`<base>`**

(好像用的很少很少)

用于描述基本的链接地址/链接目标，该标签作为 HTML 文档中所有的链接标签的默认链接:

    <head>
      <base href="http://www.runoob.com/images/" target="_blank">
    </head>

**`<meta>`**

通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。

实例：

为搜索引擎定义关键词：

    <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">

为网页定义描述内容：

    <meta name="description" content="免费 Web & 编程 教程">

定义网页作者：

    <meta name="author" content="Runoob">

每30秒钟刷新当前页面：

    <meta http-equiv="refresh" content="30">

以及前面说到的，指定网页编码：

    <meta charset="utf-8">

**`<style>`**

定义 css 样式：

    <head>
      <style type="text/css">
        body {background-color:yellow}
        p {color:blue}
      </style>
    </head>

**`<link>`**

定义文档与外部资源之间的关系，通常用于链接到样式表:

    <head>
      <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>

**`<script>`**

用于加载脚本文件，目前主要是指加载 JavaScript 脚本。后面会有详细介绍。

`<script>` 也可以放在 `<body>` 最后，表示等 DOM 加载完毕后再加载脚本。(是这个意思吧?)

## HTML 样式 - CSS

三种方式：

- 内联样式 - 在 HTML 元素中使用 "style" 属性
- 内部样式表 - 在 HTML 文档头部 `<head>` 区域使用 `<style>` 标签来包含 css
- 外部样式表 - 在 HTML 文档头部 `<head>` 区域使用 `<link>` 标签引入外部 css 文件 (可以在 `<body>` 中使用 `<link>` 吗?)

**内联样式**

    <p style="color:blue;margin-left:20px;">This is a paragraph.</p>

**内部样式表**

    <head>
      <style type="text/css">
        body {background-color:yellow;}
        p {color:blue;}
      </style>
    </head>

**外部样式表**

    <head>
      <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>

## HTML 图像


    <img src="pulpit.jpg" alt="Pulpit rock" width="304" height="228">

使用 `<img>` 标签来显示图片，属性有：src, alt, width, height。alt 用来在图片无法加载时显示的替换文本。

如果 `<img>` 指定了宽高，则页面加载时会为它们预留指定的尺寸。

和 `<img>` 相关的另外两个标签 `<map>` 和 `<area>` (第一次听说)，用来为 `<img>` 定义图象地图，点击图片中的不同地方可以链接到不同的网页。

    <img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">

    <map name="planetmap">
      <area shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm">
      <area shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm">
      <area shape="circle" coords="124,58,8" alt="Venus" href="venus.htm">
    </map>

## HTML 表格

表格由 `<table>` 标签定义，每个表格有若干行 `<tr>`，每行有若干单元格 `<td>` (td 表示 table data)，另外，我们可以用 `<th>` (table head) 显示表头，大多数流览器会把表头显示为粗体居中的文本。

    <table border="1">
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
        <tr>
            <td>row 1, cell 1</td>
            <td>row 1, cell 2</td>
        </tr>
        <tr>
            <td>row 2, cell 1</td>
            <td>row 2, cell 2</td>
        </tr>
    </table>

`<table>` 的 "border" 属性用来表示边框的粗细。

`<th>` 不光可以作为表格的第一行，也可以作为表格的第一列，相比 `<td>` 只不过它的默认样式是加粗居中。

在 `<table>` 中使用的其它一些标签：

- `<caption>` - 定义表格标题
- `<thead>` - 定义表格页眉
- `<tbody>` - 定义表格主体
- `<tfoot>` - 定义表格页脚

`<table>` 标签的其它一些常见的属性：

- cellspace
- cellpadding

`<th>`, `<td>` 标签的其它一些常用属性：

- rowspan - `<th rowspan="2">` 表示这个单元格实际是由同列的 2 行单元格合并而成的
- colspan - `<td colspan="2">` 表示这个单元格实际是由同行的 2 列单元格合并而成的

## HTML 列表

1. 有序列表 `<ol>` (order list)
1. 无序列表 `<ul>` (un-order list)
1. 自定义列表 `<dl>` (define list ?)

**`<ol>`**

    <ol>
      <li>Coffee</li>
      <li>Milk</li>
    </ol>

**`<ul>`**

    <ul>
      <li>Coffee</li>
      <li>Milk</li>
    </ul>

**`<dl>`**

自定义列表不仅仅是一列项目，而是项目及其注释的组合。

自定义列表以 `<dl>` 标签开始，每个自定义列表项以 `<dt>` 开始，每个自定义列表项的定义以 `<dd>` 开始。`<dt>` 和 `<dd>` 是并列关系，有点像 `<table>` 中的 `<th>` 和 `<td>` 的关系。

    <dl>
      <dt>Coffee</dt>
      <dd>- black hot drink</dd>
      <dt>Milk</dt>
      <dd>- white cold drink</dd>
    </dl>

## HTML 区块

HTML 的元素主要分两种：

- 块元素：一个块元素占据一整行，这类元素有 `<h1>` `<p>` `<ul>` `<table>` `<div>`
- 内联元素 (行元素)：内联元素接在其它元素同一行之后，不会以新行开始，这类元素有 `<b>` `<td>` `<a>` `<img>` `<span>`

**`<div>`**

HTML `<div>` 元素是块级元素，它可用于组合其他 HTML 元素的容器。`<div>` 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。

如果与 CSS 一同使用，`<div>` 元素可用于对大的内容块设置样式属性。

`<div>` 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 `<table>` 元素进行文档布局不是表格的正确用法。`<table>` 元素的作用是显示表格化的数据。

**`<span>`**

HTML `<span>` 元素是内联元素，可用作文本的容器。`<span>` 元素也没有特定的含义。

当与 CSS 一同使用时，`<span>` 元素可用于为部分文本设置样式属性。

## HTML 布局

使用 `<div>` 而不是 `<table>` 进行布局。

## HTML 表单和输入

(在 ajax 之前，表单是唯一可以接受用户输入并向服务器发送数据进行交互的方式，有了 ajax 之后，表单的必要性已经降低了。)

表单是一个包含表单元素的区域。表单元素是允许用户在表单中输入内容的元素，比如：文本域 textarea、下拉列表、单选框、复选框。

表单标签 `<form>`。

### HTML 表单 - 输入元素

多数情况下在表单中用到的表单元素是输入元素 `<input>`，它有很多种类型，由 "type" 属性决定。主要有以下值：

- text - 文本域，默认类型
- password - 密码输入框
- radio - 单选框
- checkbox - 复选框
- submit - 提交按钮
- reset - 重置按钮
- hidden - 隐藏输入
- file - 选择文件

另外，这些 `<input>` 元素还有额外的 "name" 和 "value" 属性，对于某些类型，这两个属性是必选的。

只举复选框的示例：

    <form>
      <input type="checkbox" name="vehicle" value="Bike">I have a bike<br/>
      <input type="checkbox" name="vehicle" value="Car">I have a car
    </form>

点击提交按钮后，`<form>` 表单中的内容会提交给服务器处理，提交到何处，以何种方式提交 (GET/POST)，由 `<form>` 标签的 "action" 和 "method" 属性决定。

    <form name="input" action="html_form_action.php" method="get">
      Username: <input type="text" name="user">
      <input type="submit" value="Submit">
    </form>

其它一些在表单中常用的标签：

- `<textarea>` - 用来输入多行文本时使用
- `<select>` `<option>` - 下拉选择框
- `<fieldset>` `<legend>` - 定义一组相关的表单元素，并使用外框包围起来，`<legend>` 用来定义外框标题
- `<datalist>` - HTML5 中新增的元素，用来为 `<input>` 元素提供预定义的列表，助其实现自动完成功能，有意思

`<datalist>` 的一个示例，`<input>` 需要通过 "list" 属性的值和 `<datalist>` 关联起来。

    <form action="demo-form.php" method="get">
      <input list="browsers" name="browser">
      <datalist id="browsers">
        <option value="Internet Explorer">
        <option value="Firefox">
        <option value="Chrome">
        <option value="Opera">
        <option value="Safari">
      </datalist>
      <input type="submit">
    </form>

## HTML iframe

iframe 实现在同一个浏览器窗口显示多个页面。

    <iframe src="demo_iframe.htm" width="200" height="200" frameborder="0"></iframe>

"frameborder" 属性用来设置 iframe 的边框。

(看上去 iframe 是一个空元素，为什么它不是自闭合呢? 答案：`您可以把需要的文本放置在 <iframe> 和 </iframe> 之间，这样就可以应对不支持 <iframe> 的浏览器。`)

前面我们说过 `<a>` 的 "target" 属性，目前已经知道它有两个值 `_blank` 和 `_top`，它的值还可以是 iframe 的 name，这样点击链接后它的内容将显示在 iframe 中 (嘿嘿，如果链接是页面本身的 url，那岂不是产生了无限嵌套的效果)。示例：

    <iframe src="demo_iframe.htm" name="iframe_a"></iframe>
    <p><a href="http://www.runoob.com" target="iframe_a">RUNOOB.COM</a></p>

## HTML 颜色

略。此页面可作为选取颜色时的参考手册。

## HTML 脚本

即 JavaScript，略。

使用 `<noscript>` 标签在不支持 JavaScript 的浏览器中显示提示信息。(come on，这都什么年代了，还有不支持 JavaScript 的浏览器吗?)

## HTML 字符实体

HTML 中的预留字符必须被替换为字符实体。一些在键盘上找不到的字符也可以使用字符实体来替换。

字符实体有两种表现形式：

- `&entity_name;`
- `&#entity_number;`

比如大于号和小于号，在 HTML 中是作为标签使用的，所以不能直接使用，如果要显示小于号，可以用 `&lt;`，或者 `&#60;`，`&#060;`。

**不间断空格 (Non-breaking Space)**

HTML 中常用的字符实体是不间断空格 (`&nbsp;`)。因为浏览器总是会截短 HTML 页面中的空格，任何连续的空格都会截短为一个。如果需要在页面中增加空格的数量，就要使用 `&nbsp;` 字符实体。

**其它常用字符实体**

- `<` - `&lt;`
- `>` - `&gt;`
- `&` - `&amp;`
- `"` - `&quot;`

## HTML URL

**URL 字符编码**

URL 只能使用 ASCII 字符集来通过因特网进行发送。由于 URL 常常会包含 ASCII 集合之外的字符，URL 必须转换为有效的 ASCII 格式。

URL 编码使用 "%" 其后跟随两位的十六进制数来替换非 ASCII 字符。

URL 不能包含空格。URL 编码通常使用 "+" 来替换空格。

- 空格，在 PHP 中被 "+" 替换，在 JavaScript 中被 "%20" 替换
- 原始的 "+" 被 "%2B" 替换
- 原始的 "%" 被 "%25" 替换
- "[" --> "%5B"
- "]" --> "%5D"
- 中文，"我" --> "%E6%88%91" (暂时不知道是什么依据)

疑问：这些对应关系是怎么决定的? 有什么标准吗? (应该是有一个映射表的)

不同的语言都提供了对字符串进行 URL 编码的函数。JavaScript 使用 encodeURI() 函数，PHP 使用 rawurlencode() 函数...

## HTML 速查手册

nice!

## HTML 总结

接下来的学习：CSS，JavaScript

略。

## HTML 补充

### HTML 事件

[HTML 事件属性](http://www.runoob.com/tags/ref-eventattributes.html)

还真有有挺多事件有很用，但平时了解比较少的。比如 onresize、onblur、onfocus、onselect、onsubmit ...

事件分为几大类：

- 窗口事件属性 - onresize, onblur, onfocus ...
- 表单事件 - onselect, onsubmit ...
- 键盘事件 - onkeydown, onkeypress, onkeyup
- 鼠标事件 - onclick, ondrag, onscroll ...
- 多媒体事件
- 其它事件

事件必须借助 JavaScript 来处理。
