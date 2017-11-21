# JavaScript DOM 编程艺术 (第一版) 学习笔记

(2013/12/25)

## 第 1 章 - JavaScript 简史

略。

DOM 的定义：一个与系统平台和编程语言无关的接口，程序和脚本可以通过这个接口动态地对文档的内容、结构和样式进行访问和修改。

## 第 2 章 - JavaScript 语法

略。

### 2.4 变量

#### 2.4.2 数组

就像 object 有两种声明方式一样，一种是 `var obj = {};`，一种是 `var obj = new Object();`，数组也有两种，一种是 `var array = [];`，一种是 `var array = new Array();`。

### 2.9 对象

#### 2.9.1 内建对象

    var beatles = new Array();

内建对象：Array, Math, Date ...

#### 2.9.2 宿主对象

只用记住 document 对象即可。

## 第 3 章 - DOM

- D：Document
- O：Object，主要是 document 对象。另外 window 对象对应着浏览器窗口本身。
- M：Model，html 结点组成树的结构

### 3.3 "M"

DOM 把文档表示为一棵家谱树。

#### 3.3.1 节点

- 元素节点：DOM 的原子是元素节点 (element node)
- 文本节点 (text node)
- 属性节点 (attribute node)

一个元素节点，它包含着一个属性节点和一个文本节点。

#### 3.3.2 getElementById()

这个方法与 document 对象相关联。

    document.getElementById(id);

返回值是一个对象。事实上，文档中的每一个元素都对应着一个对象。

#### 3.3.3 getElementsByTagName()

从方法名称上可以看出，Elements 是复数，所以这个方法返回的是一个对象数组。并不只与 document 对象相关联。使用方法：

    element.getElementsByTagName(tag);

    // sample
    document.getElementsByTagName("li");
    // 支持通配符
    var shopping = document.getElementById("purchases");
    var items = document.getElementsByTagName("*");

### 3.4 趁热打铁

小结：

- 一份文档就是一棵节点树
- 节点类型：元素节点，属性节点，文本节点
- 检索元素节点的 api：getElementById(), getElementsByTagName()
- 每个节点都是一个对象

#### 3.4.1 getAttribute()

对使用 getElementById() 或 getElementsByTagName() 检索出来的对象节点查询某个属性的值：

    object.getAttribute(attribute);

    // sample
    var paras = document.getElementsByTagName("p");
    for (var i=0; i<paras.length; i++) {
      var title_text = paras[i].getAttribute("title");
      if (title_text) alert(title_text);
    }

#### 3.4.2 setAttribute()

用于修改属性节点的值。

    object.setAttribute(attribute, value);
    // 也可以像下面这样，但不推荐
    object.attribute = value;

## 第 4 章 - 案例研究：JavaScript 美术馆

练习场所：

1. <http://codepen.io/anon/pen/GqpFf>
2. <http://jsbin.com/oWumiwE/2/edit> (jsbin 有 console)

函数：

    function showPic(whicPic) {
      var source = whichPic.getAttribute("href");
      var placeholder = document.getElementById("placeholder");
      placeholder.setAttribute("src", source);
    }

### 4.3 JavaScript 函数的调用

通过事件处理函数 (event handler)。看来所有的处理 UI 的程序都是用这一套方法。

js 中常见的事件处理函数：onclick, onmouseover, onmouseout。

    <a href="images/fireworks.jpg" onclick="showPic(this); return false;">Fireworks</a>

`return false;` 表示默认行为没有发生。`onclick` 相当于 `<a>` 这个元素节点的一个方法属性。像这样：

    var a = {
      href : "image/fireworks.jpg",
      onclick : function() {
        showPic(this);
        return false;
      },
    };
    // 2017/11/21，多年后回顾到这里，这不就是 VirtualDOM 的思想吗？

### 4.4 对 JavaScript 函数进行功能扩展

#### 4.4.1 childNodes 属性

childNodes 属性将返回一个数组，包含给定元素节点的全体子元素：

    element.childNodes

    // sample
    function countBodyChildren() {
      var body_element = document.getElementsByTag("body")[0];
      // or var body_element = document.body;
      alert(body_element.childNodes.length);
    }

    window.onload = countBodyChildren;

`window.onload()` 在浏览器将 html 文档加载完毕时触发。

#### 4.4.2 nodeType

childNodes 返回的数组包含所有类型的节点，主要是元素节点，属性节点和文本节点。

- 元素节点的 nodeType = 1
- 属性节点的 nodeType = 2
- 文本节点的 nodeType = 3

#### 4.4.5 nodeValue 属性

文本结点的值

#### 4.4.6 firstChild, lastChild

    node.fristChild = node.childNodes[0];
    node.lastChild = node.childNodes[node.childNodes.length-1];

#### 4.4.7 利用 nodeValue 属性刷新 p 元素的文本内容

    // html
    <p id="description">Description</p>

    // js
    var description = document.getElementById("description");
    description.firstChild.nodeValue = "newValue"; 

效果：<http://jsbin.com/oWumiwE/3/edit>

## 第 5 章 - JavaScript 编程原则和良好习惯

- 预留后路
- 分离 JavaScript
- 向后兼容

(从今天来看，这一章的内容无疑是过时了。)

### 5.2 预留后路

要为那么禁用 JavaScript 的用户考虑。这其中包含最重要的用户 - 搜索引擎!

### 5.4 分离 JavaScript

    element.event = action...

### 5.5 向后兼容

- if...else... 进行判断
- 浏览器嗅探技术

## 第 6 章 - 案例研究：JavaScript 美术馆改进版

JS 中两大很特别的地方：函数是一等公民，匿名函数很常见。

### 6.3 解决 "分离 JavaScript" 问题

效果：<http://jsbin.com/oWumiwE/6/edit>

    function prepareGallery() {
      if (!document.getElementsByTagName) return false;
      if (!document.getElementById) return false;
      if (!document.getElementById("imagegallery")) return false;
      var gallery = document.getElementById("imagegallery");
      var links = gallery.getElementsByTagName("a");
      for (var i=0; i<links.length; i++) {
        links[i].onclick = function() {
          showPic(this);
          return false;
        }
      }
    }

#### 6.3.7 将多个 JavaScript 函数绑定到 onload 事件处理函数上

    // 1
    window.onload = prepareGallery;
    // 2. 匿名函数
    window.onload = function() {
      firstFunc();
      secondFunc();
    }
    // 3. addLoadEvent()
    addLoadEvent(firstFunc);
    addLoadEvent(secondFunc);

### 6.4 JavaScript 函数的优化：不要做太多假设

这一节内容看看就行，实际很少直接使用原生 DOM API，会用 jQuery 来做，而 jQuery 会帮你做这些判断工作。

nodeName 属性：返回对象的节点名称，返回值总是大写字母。比如：

    if (placeholder.nodeName != "IMG") return false;

键盘浏览功能：onkeypress 事件处理函数，但不要用。

### 6.5 DOM Core 和 HTML-DOM

     getElementById()
     getElementsByTagName()
     getAttribute()
     setAttribute()
     ----
     DOM Core (适用于多种文档，多种语言)
     ----
     HTML, XML...  |  JS, C#, ...

     HTML-Core: 只能处理 web 文档
     document.getElementsByTagName("form") --> document.forms
     element.getAttribute("src")  --> element.src
     placeholder.setAttribute("src", source) --> placeholder.src = source

## 第 7 章 - 动态创建 HTML 内容

绝大多数 JavaScript 函数的工作原理：网页的结构由 HTML 文档负责创建，JavaScript 只用来改变 HTML 文档的某此细节而不改变其底层结构。

但实际 JavaScript 也可以用来改变网页的结构和内容。

- document.write() 方法和 innerHTML 属性
- createElement(), createTextNode(), appendChild(), insertBefore()

### 7.1 document.write() 方法

(我最早是在 ASP 的书藉里看到 ASP 也有这个方法，动态创建 HTML，我想应该所有的 web 语言都应该有这个方法吧，比如 PHP)。

    <body>
      <script type="text/javascript">
        document.write("<p>This is dynamic created.</p>");
      </script>
    </body>

`document.write()` 无法在 `window.onload` 时调用，因此它必须在 `<body>` 中显式调用，因此违背了 "分离 JavaScript" 原则，不推荐使用。

效果：<http://jsbin.com/agAjucAm/1/edit> 

### 7.2 innerHTML 属性

几乎所有浏览器都支持，但并非 W3C DOM 的标准组成部分。

innerHTML 属性要比 document.write() 更值得推荐。

innerHTML 属性无细节而言。标准化的 DOM 就像是一把手术刀，innerHTML 属性就像是一把劈柴刀。

    <div id="testdiv">
    </div>

    window.onload = function() {
      var testdiv = doucment.getElementById("testdiv");
      testdiv.innerHTML = "<p>this is inserted by <em>innerHTML</em>.</p>";
    }

效果：<http://jsbin.com/ANoxATo/1/edit>

### 7.3 DOM 提供的方法

- document.createElement(nodeName)
- document.createTextNode(text)
- parent.appendChild(child)
- parent.insertBefore(newElement, targetElement)

用上面的方法再写了一个 `insertAfter()`

新属性：`element.nextSibling`, `element.parentNode`

### 7.4 重回 "JavaScript" 美术馆

效果：<http://jsbin.com/oWumiwE/7/edit>

## 第 8 章 - 充实文档的内容

### 8.1 不应该做的事情

"可以做一件事情" 并不意味着 "应该做这件事情"。

...别忘了，至少在目前，各大搜索引擎还不怎么支持 JavaScript。

...如果你觉察到自己正在使用 DOM 技术添加重要内容到网页上... 你可能会发现这是在滥用 DOM 技术。

(过时的观点。)

### 8.2 把 "不可见" 变成 "可见"

CSS 的功能确实强大，但它并不是万能的。CSS 只能对包含在 HTML 的内容进行排版处理，至少目前是这样。(CSS3 已经强大很多了)

绝大多数属性的内容在浏览器里都是看不见的。

### 8.3 原始内容

`<abbr>` 与 `<acronym>` 标签的意义。IE 不支持 `<abbr>`。

### 8.4 示例 HTML 文档

效果：<http://jsbin.com/ocUSeriK/1/edit>

### 8.6 JavaScript 代码

抽取出所有 `<abbr>` 元素的 title 属性的值，动态组成表格形式 `<dl>` 显示在网页中。

    <dl>
      <dt>W3C</dt>
      <dd>World Wide Web</dd>
      ...
    </dl>

#### 8.6.2 显示 "文献来源链接表"

效果：<http://jsbin.com/ocUSeriK/2/edit>

注意，在编写 DOM 脚本时，理所当然地认为某个节点肯定是一个元素节点是一种相当常见的错误。

`<sup>` 标签。

### 8.7 总结

JavaScript 只应该用来充实文档的内容，要避免使用 DOM 直接插入核心内容。

## 第 9 章 - CSS-DOM

利用 DOM 技术去读写 CSS 信息。

### 9.1 三位一体的网页

- 结构层：HTML
- 表示层：CSS
- 行为层：DOM

三者存在着一些潜在的重叠区域，比如 DOM 技术可以动态改变网页结构，CSS 的伪 class 属性 (比如 :hover, :focus) 可以根据用户触发事件来改变呈现的效果，这是一种行为层的行为。DOM 技术可以把样式信息施加在 HTML 元素上。

### 9.2 style 属性

文档的每个元素节点都有一个属性 style，style 属性也是一个对象。

    element.style.property

    // sample
    element.style.color;
    element.style.fontFamily; // 采用 camel 记号代替 '-' 号

    // 设置
    element.style.property = value; // value 永远是字符串

element.style 只能获得包含在 HTML 代码中用 style 属性声明的样式信息，无法获得在外部 css 文件中声明的样式信息，也无法获得包含在 `<head>` 部分的 `<style>` 标签中的样式信息。

效果：<http://jsbin.com/udadIXO/1/edit>

### 9.3 何时该用 DOM 脚本去设置样式信息

你能够做什么并不意味着你应该那么做。绝大多数场合，还是应该使用 CSS 去声明样式信息。

#### 9.3.1 根据元素在节点树里的位置来设置样式信息

例如，目前还不能使用 CSS 做到 "把以下样式施加在所有 h1 元素的下一个兄弟节点上"，这时就需要使用 DOM 技术来实现... (CSS3 中已经可以通过 :first-child, :last-child 等伪 class 来实现了。)

#### 9.3.2 根据某种条件来设置样式信息

注意，在用 CSS 布置和美化网页时，千万不要人云亦云地认为表格都是不好的。用表格来安排元素位置是不好的，但用来显示表格数据却是理所当然的。

(本小节的例子是用 DOM 技术来为表格的奇数和偶数行分别显示不同的背景，在 CSS3 中，同样有 :odd 和 :even 等伪 class 可以来实现。)

#### 9.3.3 对事件做出响应

例子：用 onmouseover 替代 :hover。在某些时候前者得到更浏览器的支持。

一般原则：如果你想改变某个元素的显示效果，就应该选用 CSS；如果你想改变某个元素的行为，就应该选用 DOM 技术。如果两者都要，请运用理智 -- 没有放之四海而皆准的解决方案。

### 9.4 className 属性

(相比前面的解决方案，更优的解决方案是直接替换 className 属性)

前面的做法都不值得推荐。这里有一种简明的解决方案：与其使用 DOM 脚本直接改变某个元素的样式信息，不如通过 JavaScript 代码却刷新这个元素的 class 属性。(Good!) 这种方法使得网页的表示层和形为层分离得更加彻底。

## 第 10 章 - 用 JavaScript 实现动画效果

### 10.1 何为动画

有一个应用领域是 CSS 无能为力的：动画，只能使用 JavaScript。(注：在 CSS3 时代，这句话也不是那么准吧。) 动画是样式随时间变化的完美例子之一。简单地说，动画就是让元素的位置随着时间而不断地发生变化。

#### 10.1.1 位置

position 属性：static/absolute/relative/fixed

四种区别：

- 默认值 static
- absolute 是相对第一个 position 属性不是 static 的父结点而言，如果没有这样的父结点，则是相对整个 html 文档而言
- relative 则正好相反，是相对第一个 position 属性是 static 的父结点而言
- fixed 则是相对浏览器窗口而言

#### 10.1.2 时间

setTimeout(), clearTimeout() 函数

    variable = setTimeout("function", interval); // function 包含参数

    // sample
    movement = setTimeout("moveMessage()", 5000);
    // 取消
    clearTimeout(movement);

parseInt(), parseFloat() 函数。

演示效果：<http://jsbin.com/AvIGaHO/3/edit>

### 10.2 实用的动画

注意，不要滥用动画，网页上的动画元素不仅容易引起访问者的反感，还容易导致各种可访问性问题。

从这一节的例子中学到的：

- onmouseover 的使用
- 如何提高图片的加载速度：把几张图片合成到一张图片中，并预先加载。
- 利用 css 的 overflow 属性显示部分图片：visible, hidden, scroll, auto
- 如何传递全局变量：将它作为元素节点的属性
- 如何改进动画效果，使之更平滑和迅速
- 优化无止境

## 第 11 章 - 学以致用：JavaScript 网站设计实战

哎，没有素材，不好模仿。

一些小的技巧：

- 如果你为某个元素设置了一种前景颜色，就应该再为它设置一种背景颜色。
- 当前 url: document.location.href
- string.indexOf()
- string.toLowerCase()
- string.split()
- url 中 `#` 后面部分表示内部链接

### 表单 `<form>`

#### `<label>` 标签

label 元素特别有助于改善网页的可访问性。label 元素的 for 属性可以把一条文本与某个表单字段关联在一起。当用户点击某个 label 元素所包含的文本，与之相关的表单字段就将获得输入焦点。

#### Form 对象

html 文档中每个 form 元素都是一个 form 类型的对象，每个 form 对象都有一个 elements.length 属性，表示表单元素 (比如 input 元素，textarea 元素...) 的个数。

    form.elements.length;

表单元素的特殊属性：defaultValue，表示表单元素的初始值。如何实现单击某个表单元素时自动清除默认值，离开时若为空则恢复默认值：

    element.onfocus = function() {
      if (this.value === this.defaultValue) {
        this.value = "";
      }
    }

    element.onblur = function() {
      if (this.value === "") {
        this.value = this.defalutValue;
      }
    }

#### 表单数据的合法性检查

- 糟糕的表单检查还不如不检查。
- 不要完全依赖 JavaScript，用 JavaScript 检查过了，并不意味着在服务器就不再需要检查了。

## 第 12 章 - 展望 DOM 脚本编程技术

- Web 的现状
- Ajax 技术和 XMLHttpRequest 对象
- Web 上的应用软件

### 12.2 Ajax

Ajax 技术等于是在客户 (浏览器) 和服务器之间安插了一个中转站：JavaScript 先把请求从客户端发给这个中转站，再由这个中转站把请求转发给服务器；服务器先把响应也发给这个中转站，再由这个中转站把响应转发给客户端的 JavaScript 脚本处理。

这个所谓的 "中转站" 就是 XMLHttpRequest 对象。

XMLHttpRequest 不是 W3C 标准的内容，不同的浏览器有自己不同的实现。

    function getHttpObject() {
      if (window.ActiveXObject)
        var waystation = new ActiveXObject("Microsoft.XMLHTTP");
      else if (window.XMLHttpRequest)
        var waystation = new XMLHttpRequest();
      else 
        var waystation = false;
      return waysataion;
    }

    // sample
    request = getHttpObject();
    request.open("GET", "example.txt", true);
    request.onreadystatechange = doSomething;
    request.send(null);

    function doSomething() {
      if (request.readyState == 4) 
        alert(request.responseText);
    }

当服务器把一个响应返回给 XMLHttpRequest 对象时，这个对象有几个属性将从 "不可用" 变成 "可用"。readyState 属性包含一个数值，这个数值将随服务器对相关请求的处理进度而变化，它有 5 种取值：
 
- 0 - 尚未初始化
- 1 - 正在加载
- 2 - 加载完毕
- 3 - 正在处理
- 4 - 处理完毕

一旦 readyState 值变成 4，就可以对服务器返回的数据进行访问了。

从服务器返回的响应数据保存在 reponseText 属性里。如果响应数据是以 Content-Type 类型 "text/xml" 返回的，还可以访问 reponseXML 属性。

## 附录 - DOM 方法和属性

略。(其实应该做一个汇总的。)

## 第二版增补内容

## 第 11 章 - HTML5

### 11.1 HTML5 简介

结构层，HTML5 增加了新的元素，如 `<section>`，`<article>`，`<header>`，`<footer>`，还提供了更多交互及媒体元素，如`<canvas>`，`<video>`，`<audio>`，表单得到了加强，新增了一些常见控件 (如颜色拾取器，数据选择器，滑动条，滚动条)。很多新元素有自己的 JavaScript 和 DOM API (如 canvas)。

行为层，HTML 规定了每个新元素的交互方式，以及新的 API。例如，可以自定义 video 元素的控件样式，改变其播放方式，form 元素支持进度控制，在 canvas 进行绘制。

表现层主要靠 CSS3 得到增强，包括高级选择器，渐变，变换，动画等。

最后，新的 JavaScript API 包括多个新的模块，比如 LocalStorage，Drag-and-Drop，WebSocket，Worker 等。

HTML5 的文档声明是：`<!DOCTYPE html>`。

### 11.2 来自朋友的忠告

开源 JavaScript 库 Modernizr，用于在不支持 HTML5 的浏览器中屏蔽 HTML5 特性。
