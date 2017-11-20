# Boostrap3 - Part 2

学习资源：

1. [Bootstrap 教程](http://www.runoob.com/bootstrap/bootstrap-tutorial.html)

Bootstrap，来自 Twitter，是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS、JavaScript 的，它简洁灵活，使得 Web 开发更加快捷。

主要内容：

- Bootstrap 基本结构
- Bootstrap CSS
- Bootstrap 布局组件
- Bootstrap 插件

---

## Bootstrap 布局组件

### 字体图标 (Glyphicons)

WebFont。

    @font-face {
      font-family: 'Glyphicons Halflings';
      src: url('../fonts/glyphicons-halflings-regular.eot');
      src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
    }

    .glyphicon {
      position: relative;
      top: 1px;
      display: inline-block;
      font-family: 'Glyphicons Halflings';
      -webkit-font-smoothing: antialiased;
      font-style: normal;
      font-weight: normal;
      line-height: 1;
      -moz-osx-font-smoothing: grayscale;
    }

还有 200 个 class，每个 class 针对一个图标。这些 class 的常见格式如下：

    .glyphicon-keyword:before {
      content: "hexvalue";
    }

比如，使用的 user 图标，它的 class 如下：

    .glyphicon-user:before {
      content: "\e008";
    }

使用：

    <span class="glyphicon glyphicon-search"></span>

### 下拉菜单

容器使用 .dropdown class，内部的菜单列表使用 .dropdown-menu class。

可与 Bootstrap 下拉菜单 jQuery 插件配合使用。

其它略。需要时再细看。

### 按钮组

按钮组允许多个按钮被堆叠在同一行上。当你想要把按钮对齐在一起时，这就显得非常有用。您可以通过 Bootstrap 按钮 (Button) 插件添加可选的 JavaScript 单选框和复选框样式行为。

一些重要的类：.btn-group, .btn-toolbar ...

### 按钮下拉菜单

在一个 .btn-group 中放置按钮和下拉菜单。还可以使用 `<span class="caret"></span>` 来指示按钮作为下拉菜单。

详略。

### 输入框组

输入框组扩展自表单控件。使用输入框组，您可以很容易地向基于文本的输入框添加作为前缀和后缀的文本或按钮。

详略。

### 导航元素

创建一个标签式的导航菜单：

- 以一个带有 class .nav 的无序列表开始
- 添加 class .nav-tabs

示例：

    <p>标签式的导航菜单</p>
    <ul class="nav nav-tabs">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">SVN</a></li>
      <li><a href="#">iOS</a></li>
      <li><a href="#">VB.Net</a></li>
      <li><a href="#">Java</a></li>
      <li><a href="#">PHP</a></li>
    </ul>

其它各种导航菜单，详略。需要时再仔细看。

### 导航栏

详略。

### 面包屑导航

面包屑导航 (Breadcrumbs) 是一种基于网站层次信息的显示方式。以博客为例，面包屑导航可以显示发布日期、类别或标签。它们表示当前页面在导航层次结构内的位置。

Bootstrap 中的面包屑导航 (Breadcrumbs) 是一个简单的带有 .breadcrumb class 的无序列表。分隔符会通过 CSS 中下面所示的 class 自动被添加：

    .breadcrumb > li + li:before {
      color: #CCCCCC;
      content: "/ ";
      padding: 0 5px;
    }

实例：

    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">2013</a></li>
      <li class="active">十一月</li>
    </ol>

### 分页

.pagination, .pager class


### 标签

.label .label-primary/success/info/warning/danger

### 徽章

.badge class

### 超大屏幕

.jumbotron class

### 页面标题

.page-header class

### 缩略图

.thumbnail class

### 警告

.alert .alert-success/info/warning/danger

### 进度条

使用 CSS3 过渡和动画来获得该效果。

**默认的进度条**

创建一个基本的进度条的步骤如下：

- 添加一个带有 class .progress 的 div。
- 接着，在上面的 div 内，添加一个带有 class .progress-bar 的空的 div。
- 添加一个带有百分比表示的宽度的 style 属性，例如 `style="width: 60%";` 表示进度条在 60% 的位置。

示例：

    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="60"
          aria-valuemin="0" aria-valuemax="100" style="width: 40%;">
        <span class="sr-only">40% 完成</span>
      </div>
    </div>

其余详略。

### 多媒体对象

.media, .media-list class

### 列表组

列表组件用于以列表形式呈现复杂的和自定义的内容。创建一个基本的列表组的步骤如下：

- 向元素 ul 添加 class .list-group
- 向 li 添加 class .list-group-item

详略。

### 面板 (Panels)

面板组件用于把 DOM 组件插入到一个盒子中。创建一个基本的面板，只需要向 div 元素添加 class .panel 和 class .panel-default 即可。

示例：

<div class="panel panel-default">
  <div class="panel-body">
    这是一个基本的面板
  </div>
</div>

### Well

Well 是一种会引起内容凹陷显示或插图效果的容器 div。为了创建 Well，只需要简单地把内容放在带有 class .well 的 div 中即可。

示例：

    <div class="well">您好，我在 Well 中！</div>

---

## Boostrap 插件

### 概览

Bootstrap 自带 12 种 jQuery 插件，扩展了功能，可以给站点添加更多的互动。即使您不是一名高级的 JavaScript 开发人员，您也可以着手学习 Bootstrap 的 JavaScript 插件。利用 Bootstrap Data API，大部分的插件可以在不编写任何代码的情况被触发。

**data 属性**

你可以仅仅通过 data 属性 API 就能使用所有的 Bootstrap 插件，无需写一行 JavaScript 代码。这是 Bootstrap 中的一等 API，也应该是你的首选方式。(即直接设置某些元素的 "data-*" 属性，然后 Boostrap 会自动实现相应的事件)

话又说回来，在某些情况下可能需要将此功能关闭。因此，我们还提供了关闭 data 属性 API 的方法，即解除以 data-api 为命名空间并绑定在文档上的事件。就像下面这样：

    $(document).off('.data-api')

如需关闭一个特定的插件，只需要在 data-api 命名空间前加上该插件的名称作为命名空间即可，如下所示：

    $(document).off('.alert.data-api')

**编程方式的 API**

我们为所有 Bootstrap 插件提供了纯 JavaScript 方式的 API。所有公开的 API 都是支持单独或链式调用方式，并且返回其所操作的元素集合 (注：和jQuery的调用形式一致)。例如：

    $(".btn.danger").button("toggle").addClass("fat")

其余略。

### 过渡效果 (Transition) 插件

过渡效果 (Transition) 插件提供了简单的过渡效果。作为其它插件的基础，比如模态框插件、标签页插件 ...

### 模态框 (Modal) 插件

模态框是覆盖在父窗体上的子窗体。通常，目的是显示来自一个单独的源的内容，可以在不离开父窗体的情况下有一些互动。子窗体可提供信息、交互等。

**用法**

- 通过 data 属性：在控制器元素 (比如按钮或者链接) 上设置属性 `data-toggle="modal"`，同时设置 `data-target="#identifier"` 或 `href="#identifier"` 来指定要切换的特定的模态框 (带有 `id="identifier"`)。
- 通过 JavaScript：使用这种技术，您可以通过简单的一行 JavaScript 来调用带有 `id="identifier"` 的模态框。

        $('#identifier').modal(options)

详略，需要时再看。

### 下拉菜单 (Dropdown) 插件

使用下拉菜单 (Dropdown) 插件，您可以向任何组件 (比如导航栏、标签页、胶囊式导航菜单、按钮等) 添加下拉菜单。

**用法**

- 通过 data 属性：向链接或按钮添加 `data-toggle="dropdown"` 来切换下拉菜单
- 通过 JavaScript

        $('.dropdown-toggel').dropdown()

  dropdown() 方法支持选项，比如 dropdown('toggle')

详略。

### 滚动监听 (Scrollspy) 插件

滚动监听 (Scrollspy) 插件，即自动更新导航插件，会根据滚动条的位置自动更新对应的导航目标。其基本的实现是随着您的滚动，基于滚动条的位置向导航栏添加 .active class。

用法、选项及事件，详略。需要时再看。

### 标签页 (Tab) 插件

实际上说如何实现 Tab 栏，详略。

(目前，我只需要知道 Bootstrap 的原理，目前已理解，大致能做什么事情，具体的细节我不需要理解，需要的时候再回来看细节。)

### 提示工具 (Tooltip) 插件

很有用，详略。

### 弹出框 (Popover) 插件

就是就是一个升级版的 Tooltip，比它多了一个 Title，所以它是基于 Tooltip 插件实现的。

弹出框 (Popover) 与工具提示 (Tooltip) 类似，提供了一个扩展的视图。如需激活弹出框，用户只需把鼠标悬停在元素上即可。弹出框的内容完全可使用 Bootstrap Data API 来填充。该方法依赖于 Tooltip。

详略。

### 警告框 (Alert) 插件

警告框 (Alert) 消息大多是用来向终端用户显示诸如警告或确认消息的信息。使用警告框 (Alert) 插件，您可以向所有的警告框消息添加可取消 (dismiss) 功能。

详略。

### 按钮 (Button) 插件

通过按钮 (Button) 插件，您可以添加进一些交互，比如控制按钮状态，或者为其他组件 (如工具栏) 创建按钮组。

详略。

### 折叠 (Collapse) 插件

折叠 (Collapse) 插件可以很容易地让页面区域折叠起来。无论您用它来创建折叠导航还是内容面板，它都允许很多内容选项。

详略。

### 轮播 (Carousel) 插件

轮播 (Carousel) 插件是一种灵活的响应式的向站点添加滑块的方式。除此之外，内容也是足够灵活的，可以是图像、内嵌框架、视频或者其他您想要放置的任何类型的内容。

详略。

### 附加导航 (Affix) 插件

类似一个 position 为 fixed 的导航栏。

附加导航 (Affix) 插件允许某个 div 固定在页面的某个位置。您也可以在打开或关闭使用该插件之间进行切换。一个常见的例子是社交图标。它们将在某个位置开始，但当页面点击某个标记，该 div 会锁定在某个位置，不会随着页面其他部分一起滚动。

详略。

---

## 其它

### Bootstrap UI 编辑器

略。

### v2 教程

略。

### Bootstrap HTML 编码规范

(这部分内容放到 html5 的 note 中更好。)

**语法**

- 用两个空格来代替制表符 (tab) -- 这是唯一能保证在所有环境下获得一致展现的方法。
- 嵌套元素应当缩进一次 (即两个空格)。
- 对于属性的定义，确保全部使用双引号，绝不要使用单引号。
- 不要在自闭合 (self-closing) 元素的尾部添加斜线 -- HTML5 规范中明确说明这是可选的。(与 XHTML 的要求是矛盾的)
- 不要省略可选的结束标签 (closing tag) (例如，`</li>` 或 `</body>`)。

**引入 CSS 和 JavaScript 文件**

根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 type 属性，因为 text/css 和 text/javascript 分别是它们的默认值。

    <!-- External CSS -->
    <link rel="stylesheet" href="code-guide.css">

    <!-- In-document CSS -->
    <style>
      /* ... */
    </style>

    <!-- JavaScript -->
    <script src="code-guide.js"></script>

**实用为王**

尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。

**属性顺序**

HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

- class
- id, name
- data-*
- src, for, type, href
- title, alt
- aria-*, role

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用 (例如，页面内的书签)，因此排在第二位。

**布尔 (boolean) 型属性**

布尔型属性可以在声明时不赋值。XHTML 规范要求为其赋值，但是 HTML5 规范不需要。元素的布尔型属性如果有值，就是 true，如果没有值，就是 false。

**减少标签的数量**

编写 HTML 代码时，尽量避免多余的父元素。

**JavaScript 生成的标签**

通过 JavaScript 生成的标签让内容变得不易查找、编辑，并且降低性能。能避免时尽量避免。

### Bootstrap CSS 编码规范

详略 (太多太细了)，写得很好，需要时就参考这份规范。

### Bootstrap 可视化布局

一个在线布局工具，有意思。

### Less 教程

略，现在应该是 Sass 更流行了吧。
