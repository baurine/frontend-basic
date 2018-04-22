# JavaScript Basic

JavaScript 前端部分最基础的语法。

学习资源：

1. [JavaScript 教程](http://www.runoob.com/js/js-tutorial.html)

## JavaScript 简介

JavaScript 在前端中的应用：

- 直接写入 HTML 输出流

        document.write("<h1>这里一个标题</h1>")

- 响应 HTML 元素的事件

        <button type="button" onclick="alert('欢迎!')">点我!</button>

- 改变 HTML 的内容

        x=document.getElementById("demo")  // 查找元素
        x.innerHTML="Hello JavaScript";    // 改变内容

- 改变 HTML 样式

        x=document.getElementById("demo")  // 找到元素
        x.style.color="#ff0000";           // 改变样式

- 验证用户本地输入

        if (isNaN(x)) {alert("不是数字")};

## JavaScript 用法

略。

## JavaScript 输出

- 使用 window.alert() 弹出警告框
- 使用 document.write() 方法将内容写到 HTML 文档中
- 使用 innerHTML 写入到 HTML 元素
- 使用 console.log() 写入到浏览器的控制台

## JavaScript 语法

略。

## JavaScript 语句

略。

## JavaScript 注释

略。

变量、数据类型、对象、函数、作用域、事件、字符串、运算符、比较、条件语句、switch、for、while、breake & continue、typeof、类型转换、正则、错误、调式、变量提升、严格模式、使用误区 ... 皆略。

## JavaScript typeof

null 和 undefined 的区别。null 表示空值，undefined 表示这个变量还没有赋值。

    var person = null;          // 值为 null(空), 但类型为对象
    var person;                 // 值为 undefined, 类型为 undefined
    var person = undefined;     // 值为 undefined, 类型为 undefined

## JavaScript 类型转换

一些类型之间的转换，尤其是其它类型和 String 类型之间的转换。

## JavaScript 正则表达式

JavaScript 的正则表达式语法和 Ruby 一样：

    /正则表达式主体/修饰符(可选)

    // sample：以 javascript 开头的字符串
    var reg = /^javascript/i

**String 方法**

在 JavaScript 中，正则表达式通常用于两个字符串方法：search() 和 replace()。

- search() 方法 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。
- replace() 方法 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

**RegExp 对象方法**

- test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。
- exec() 方法用于检索字符串中的正则表达式的匹配。该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。

## JavaScript 表单

通过 `document.forms["form_name"]` 拿到表单对象，通过 `document.forms["form_name"]["input_element_name"]` 拿到表单中的 input 元素对象。

form 中的元素，其 name 属性的作用，一是在向服务器发送数据时，用来生成数据的键值对 (name=value)，二是用于在 `document.forms` 对象中定位相应的对象。而 id 属性仅用于 DOM 操作。

    <form name="myForm" action="demo_form.php" onsubmit="return validateForm()" method="post">
      名字: <input type="text" name="fname">
      <input type="submit" value="提交">
    </form>

    function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        if (x == null || x == "") {
            alert("需要输入名字。");
            return false;
        }
    }

(需要再好好研究一下 document.form 这个对象，以及 form 元素，它的属性和事件。)

- form 元素的属性有：name, method, action
- form 元素的事件有：onsubmit ...
- form 元素的方法有：submit() ...

**HTML 表单自动验证**

如果表单字段 (fname) 的值为空, required 属性会阻止表单提交。

    <form action="demo_form.php" method="post">
      <input type="text" name="fname" required="required">
      <input type="submit" value="提交">
    </form>

**HTML 约束验证**

HTML5 新增了 HTML 表单的验证方式：约束验证 (constraint validation)。约束验证是表单被提交时浏览器用来实现验证的一种算法。

HTML 约束验证基于：

- HTML 输入属性：disabled, max, min, pattern, required, type ...
- CSS 伪类选择器：:disabled, :invalid, :optional, :required, :valid ...
- DOM 属性和方法 (??)

## JavaScript 验证 API

方法：

- checkValidity()
- setCustomValidity()

避性：

- validity
- validationMessage

其余略。

## JSON

将 JSON 字符串转换成 JavaScript 对象：

    var text = '{ "sites" : [' +
        '{ "name":"Runoob" , "url":"www.runoob.com" },' +
        '{ "name":"Google" , "url":"www.google.com" },' +
        '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';

    var obj = JSON.parse(text);

其余略。

## `javascript:void(0)` 的意义

void 是 JavaScript 中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值。

语法格式：

    <head>
      <script type="text/javascript">
      <!--
        void func()
        javascript:void func()

        // or
        void(func())
        javascript:void(func())
      //-->
      </script>
    </head>

例子：

    <a href="javascript:void(0)">单击此处什么也不会发生</a>
    <a href="javascript:void(alert('Warning!!!'))">点我显示弹窗!</a>

上面第二例，和

    <a onclick="alert('Warinng!!!')">点我显示弹窗!</a>

的区别，前者会显示为一个链接的形式，而后者并不会，只是普通的文本。

**`href="#"` 与 `href="javascript:void(0)"` 的区别**

- `#` 包含了一个位置信息，默认的锚是 `#top`，也就是网页的上端。在页面很长的时候会使用 `#` 来定位页面的具体位置，格式为：`#id`。
- `javascript:void(0)`，仅仅表示一个死链接。

---

## JavaScript 函数

### 函数定义

具名函数：

    function myFunction(a, b) {
      return a * b;
    }

匿名函数，函数存储在变量中：

    var x = function (a, b) {return a * b};
    var z = x(4, 3);

Function() 构造函数：

    var myFunction = new Function("a", "b", "return a * b");
    var x = myFunction(4, 3);

**在 JavaScript 中，很多时候，你需要避免使用 new 关键字。**

### 函数参数

Arguments 对象：JavaScript 函数有个内置的对象 arguments 对象，argument 对象包含了函数调用的参数数组。

    x = findMax(1, 123, 500, 115, 44, 88);
    function findMax() {
        var i, max = arguments[0];

        if(arguments.length < 2) return max;

        for (i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    }

其余略。

### 函数调用

this 指针。详略。

### 闭包

略。

---

## JavaScript 内置常用对象

- Number 对象
- String
- Date
- Array
- Boolean
- Math
- RegExp

各对象的常用方法，详略。

---

## HTML DOM

(简单再记录一下，因为我发现有些内容在 [JavaScript DOM](./javascript-dom.md) 这一篇中没有涉及，比如 DOM 事件。)

DOM: Document Object Model

通过 HTML DOM，可使用 JavaScript 访问 HTML 文档的所有元素。

- JavaScript 能够改变页面中的所有 HTML 元素
- JavaScript 能够改变页面中的所有 HTML 属性
- JavaScript 能够改变页面中的所有 CSS 样式
- JavaScript 能够对页面中的所有事件做出反应

### 查找 HTML 元素

- 通过 id 找到 HTML 元素 - `document.getElementById("id")`
- 通过标签名找到 HTML 元素 - `document.getElementsByTagName("tagName")`
- 通过类名找到 HTML 元素 - `document.getElementsByClassName("className")`

HTML5 之后还可以通过 `document.querySelector("css-selection")` API 来像 jQuery 一样查找 HTML 元素。

### 修改 HTML 内容

- `document.write()` (最好不要用)
- `element.innerHTML = "new content"`
- 修改属性，比如 `element.src="new_image.png"`

### 修改 CSS 样式

    element.style.color = "blue"

其它略。

### DOM 事件

onclick, onchange, onload / onunload, onmouseover / onmouseout / nomousedown / onmouseup ...

### DOM EventListener

**addEventListener()**

    element.addEventListener(event, function, useCapture);

- event - 事件类型，比如 "click" "mouseover"，注意，没有 "on" 前缀
- function - 处理函数，函数的参数是一个 event 对象
- useCapture - 描述事件是冒泡还是捕获，可选

示例：

    document.getElementById("myBtn").addEventListener("click", displayDate);

addEventListener() 方法允许你在 HTML DOM 对象添加事件监听，HTML DOM 对象包括：

- HTML 元素
- HTML 文档
- window 对象

或者其他支出的事件对象如：

- xmlHttpRequest 对象

示例：

    window.addEventListener("resize", function() {
      document.getElementById("demo").innerHTML = sometext;
    });

**事件冒泡与事件捕获**

事件传递有两种方式：冒泡 (bubbling) 与捕获 (capturing)。

- 在冒泡中，内部元素的事件会先被触发，然后再触发外部元素。
- 在捕获中，外部元素的事件会先被触发，然后才会触发内部元素的事件。

addEventListener() 方法可以指定 "useCapture" 参数来设置传递类型：

    addEventListener(event, function, useCapture);

默认值是 false，表示在事件冒泡阶段调用事件处理函数；如果参数为 true，则表示在事件捕获阶段调用处理函数。

**removeEventListener()**

    element.removeEventListener("mousemove", myFunction);

补充：

- [JS 中事件冒泡与捕获](https://segmentfault.com/a/1190000005654451)

> 事件冒泡和事件捕获分别由微软和网景公司提出，这两个概念都是为了解决页面中事件流（事件发生顺序）的问题。

> 网景和微软曾经的战争还是比较火热的，当时，网景主张捕获方式，微软主张冒泡方式。后来 w3c 采用折中的方式，平息了战火，制定了统一的标准 -- 先捕获再冒泡。

事件代理，不在每个子元素上单独绑定事件处理函数，而是统一在父元素上绑定一个事件处理函数，然后在这个事件处理函数，根据实际触发事件的元素 (通过参数 event.target 区分)，再去进行不同的处理。

这样的好处是：

1. 减少事件绑定
1. 有些子元素是动态生成的。比如有一个 ul 元素，文档刚加载时，有 3 个 li，然后你在这时候给每个 li 绑定了一个 event listener，之后又动态创建了 2 个新的 li，这时候新创建的 li 就没有 event listener，需要手动再给它加上，如果把 event listener 统一绑定到 ul 上，无论 li 怎么动态变化，事件都能得到正确处理。

**stopPropgation()**

默认情况下，事件触发后，会一直传递下去，如果我们想阻止事件继续传播，那我们可以调用 `event.stopPropgation()`，propgation 是传播的意思，它不仅阻止捕获，也阻止冒泡。

**preventDefault()**

首先，preventDefault 和 stopPropgation 没有半毛钱关系，它们各司其职，如果非说要有点关系的话，那就是它们都和元素的事件有关系。

stopPropgation 是阻止事件的继续传播，而 preventDefault 是阻止元素自身的默认事件发生，比如点击 a 标签会打开链接, 点击 form 中的 input 会提交 form。

在 a 标签调用 stopPropgation 并不会阻止它打开链接，但会阻止它把点击事件继续传播。

在 a 标签调用 preventDefault 会阻止它打开链接，但不会阻止它把点击事件继续传播。

如果在 a 标签上同时调用 stopPropgation 和 preventDefault，才会同时阻止它打开链接和阻止事件继续传播。

### 操作 HTML DOM 元素

- createElement()
- appendChild()
- removeChild()

其余略。
