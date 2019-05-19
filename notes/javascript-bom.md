# JavaScript BOM

学习资源：

1. [JavaScript 浏览器 BOM](http://www.runoob.com/js/js-window.html)

BOM: Browser Object Model，浏览器对象模型，使 JavaScript 有能力与浏览器 "对话"。

## BOM & DOM

BOM 和 DOM 的关系，一张图可以明白。简单地说，就是 DOM 是 BOM 的成员之一。

![](../art/bom-dom.jpg)

BOM 包括以下内容：

- document (DOM)
- frames
- history
- location
- navigator
- screen

ref:

- [图解 BOM 与 DOM 的区别与联系](https://www.jianshu.com/p/86acc95f1eb8)

## JavaScript Window

### Window 对象

所有浏览器都支持 window 对象。它表示浏览器窗口。(在 Node 中，由于没有 window 这个概念，它被 global 对象取代。)

所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

- 全局变量是 window 对象的属性
- 全局函数是 window 对象的方法

甚至 HTML DOM 的 document 也是 window 对象的属性之一：

    document.getElementById("header");
    // 等同于
    window.document.getElementById("header");

### Window 尺寸

- window.innerHeight - 浏览器窗口的内部高度 (包括滚动条)
- window.innerWidth - 浏览器窗口的内部宽度 (包括滚动条)

或者：

- document.body.clientHeight
- document.body.clientWidth

### Window 方法

- window.open()
- window.close()
- window.moveTo()
- window.resizeTo()

## Window Screen 对象

- screen.availWidth - 可用的屏幕宽度，减去了窗口任务栏等界面元素的尺寸
- screen.availHeight - 可用的屏幕高度

注意，这里的 screen 我觉得应该是指整个显示器，应该不常用，了解即可。

## Window Location 对象

(这个对象很重要，经常用!)

window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。

常用属性：

- location.href
- location.origin
- location.hostname
- location.pathname
- location.port
- location.protocol

方法：

- location.assign(newUrl) - 加载新的文档，其实直接用 `location.href = newUrl` 也是可以的

## Window History 对象

window.history 对象包含浏览器的历史。

常用方法：

- history.back() - 等同于在浏览器中点击后退按钮
- history.forward() - 等同于在浏览器中点击前进按钮

## Window Navigator 对象

window.navigator 对象包含有关访问者浏览器的信息。主要用来获取 userAgent。

常用属性：

- navigator.appCodeName
- navigator.appName
- navigator.appVersion
- navigator.cookieEnabled
- navigator.platform
- navigator.userAgent
- ...

因为 navigator 的数据可被浏览器使用者篡改，所以仅供参观。

## Window 弹窗

可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框。

- 警告框 - alert()
- 确认框 - confirm()
- 提示框 - prompt()

## Window 计时事件

- setInterval() / clearInterval()
- setTimeout() / clearTimeout()

## Cookie

~~(cookie 是 DOM 的内容，怎么放到 BOM 这里来了?)~~ cookie 是由浏览器来管理的，所以当然是属于 BOM 的内容。

JavaScript 可以使用 document.cookie 属性来创建 、读取、及删除 cookie。

详略。需要时再看。
