# HTML5

## 简介

HTML5 是 HTML 最新的修订版本，2014 年 10 月由万维网联盟 (W3C) 完成标准制定。

HTML5 的设计目的是为了在移动设备上支持多媒体。

HTML5 中的一些有趣的新特性：

- 用于绘画的 canvas 元素
- 用于媒介回放的 video 和 audio 元素
- 对本地离线存储的更好的支持
- 新的特殊内容元素，比如 article、footer、header、nav、section
- 新的表单控件，比如 calendar、date、time、email、url、search

HTML5 的文档类型声明，必须位于第一行：

    <!DOCTYPE html>

### HTML5 的改进

- 新元素
- 新属性
- 完全支持 CSS3
- Video 和 Audio
- 2D/3D 制图
- 本地存储
- 本地 SQL 数据
- Web 应用

### HTML5 多媒体

- `<video>`
- `<audio>`

### HTML5 图形

使用 HTML5 你可以简单的绘制图形：

- 使用 `<canvas>` 元素
- 使用内联 SVG
- 使用 CSS3 2D/3D 变换

### HTML5 使用 CSS3

- 新选择器
- 新属性
- 动画
- 2D/3D 变换
- 圆角
- 阴影效果
- 可下载的字体

### HTML5 应用

使用 HTML5 你可以简单地开发应用：

- 本地数据存储
- 访问本地文件
- 本地 SQL 数据
- 缓存引用
- Javascript Worker
- XHTMLHttpRequest 2

## HTML5 浏览器支持

略。

## HTML5 新元素

HTML5 中移除的一些元素：略。

新增的元素，有点多，不全部列举。

这些新增的元素按其功能分为几类：

- `<canvas>`
- 新多媒体元素：`<audio>` `<video>` `<source>` `<embed>` `<track>`
- 新表单元素：`<datalist>` ...
- 新的语义和结构元素：很多，只列举一些常见的，`<article>` `<aside>` `<summary>` `<footer>` `<header>` `<nav>` `<section>` ...

## HTML5 Canvas

略，一般需要配合 JavaScript 来使用，JavaScript 调用 canvas 的各种 API 在其上面进行绘制，可以很方便地实现原生的 web 游戏，不需要再借助 Flash。

## HTML5 内联 SVG

    <body>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
        <polygon points="100,10 40,180 190,60 10,60 160,180"
        style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;">
      </svg>
    </body>

### SVG 和 Canvas 两者的区别

- SVG 是一种使用 XML 描述 2D 图形的语言。
- Canvas 通过 JavaScript 来绘制 2D 图形。
- SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
- 在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
- Canvas 是逐像素进行渲染的。在 Canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

## HTML5 MathML

HTML5 可以在文档中使用 MathML 元素，对应的标签是 `<math>`。

MathML 是数学标记语言，是一种基于 XML 的标准，用来在互联网上书写数学符号和公式的置标语言。

一个示例：

    <body>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
         <mrow>
            <msup><mi>a</mi><mn>2</mn></msup>
            <mo>+</mo>
            <msup><mi>b</mi><mn>2</mn></msup>
            <mo>=</mo>
            <msup><mi>c</mi><mn>2</mn></msup>
         </mrow>
      </math>
    </body>

## HTML5 拖放

拖放 (Drag & Drop) 是 HTML5 标准的组成部分，任何元素都可以拖放。

**设置元素为拖放**

把元素的 draggable 属性置为 true。

    <img draggable="true">

事件：

- ondragstart(event) - 作用在拖放元素上
- ondragover(event) - 作用在拖放元素放置的对象上
- ondrop(event) - 同 ondragover

一些 API：

- event.dataTransfer.setData() - 一般在 ondargstart(event) 中使用
- event.dataTransfer.getData() - 一般在 ondrag(event) 中使用

示例略，需要时回来看此网页。

## HTML5 GeoLocation

HTML5 Geolocation API 用于获得用户的地理位置。鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

暂略，简单了解即可，需要时再细看。

## HTML5 Video

使用 `<video>` 标签实现在网页中原生播放视频 (在此之前的解决方案是使用 Flash)。

    <video width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4">
      <source src="movie.ogg" type="video/ogg">
      您的浏览器不支持Video标签。
    </video>

`<video>` 元素提供了播放、暂停和音量控件来控制视频，如上所示由 "controls" 属性决定是否显示控件。

同时 `<video>` 元素元素也提供了 width 和 height 属性控制视频的尺寸。如果设置的高度和宽度，所需的视频空间会在页面加载时保留。如果没有设置这些属性，浏览器不知道大小的视频，浏览器就不能再加载时保留特定的空间，页面就会根据原始视频的大小而改变。

`<video>` 与 `</video>` 标签之间插入的内容是提供给不支持 video 元素的浏览器显示的。

`<video>` 元素支持多个 `<source>` 元素。`<source>` 元素可以链接不同的视频文件，浏览器将使用第一个可识别的格式。

当前，`<video>` 元素支持三种视频格式：MP4、WebM 和 Ogg。

### 使用 API 控制 `<video>`

`<video>` `<audio>` 类似 `<canvas>`，拥有对外的接口，可以通过 JavaScrpit 调用它们，比如控制播放、暂停、加载，设置宽度、高度等。

详略。

## HTML5 Audio

使用 `<audio>` 标签实现在网页中原生播放音频 (在此之前的解决方案是使用 Flash)。

    <audio controls>
      <source src="horse.ogg" type="audio/ogg">
      <source src="horse.mp3" type="audio/mpeg">
      您的浏览器不支持 audio 元素。
    </audio>

control 属性供添加播放、暂停和音量控件。

在 `<audio>` 与 `</audio>` 之间你需要插入浏览器不支持的 `<audio>` 元素的提示文本。

`<audio>` 元素允许使用多个 `<source>` 元素。`<source>` 元素可以链接不同的音频文件，浏览器将使用第一个支持的音频文件。

当前，`<audio>` 元素支持三种音频格式：MP3、Wav 和 Ogg。

## HTML5 新增的 `<input>` 类型

- color
- date
- datetime
- datetime-local
- email
- month
- number
- range
- search
- tel
- time
- url
- week

但是看了一下大部分还没有得到很到的支持，暂且先略过。

## HTML5 新增的表单元素

- `<datalist>`
- `<keygen>` (已在新标准中废弃)
- `<output>`

就还 `<datalist>` 有点意思，前面已经介绍过。

## HTML5 新增的表单属性

HTML5 的 `<form>` 和 `<input>` 标签添加了几个新属性。

`<form>` 新属性：

- autocomplete
- novalidate

`<input>` 新属性：

- autocomplete
- autofocus
- form
- formaction
- formenctype
- formmethod
- formnovalidate
- formtarget
- height 与 width
- list
- min 与 max
- multiple
- pattern (regexp)
- placeholder
- required
- step

`<input>` 的 "form" 属性很有意思，这使得一个 `<input>` 元素可以从属于多个 `<form>` 表单，而且通过 "form" 属性把 `<input>` 和相应的 `<form>` 关联起来，这样 `<input>` 就可以放置在 `<form>` 外面了，而不像以前必须在 `<form>` 里面。

"form" 打头的其它属性，作用和在 `<form>` 元素上相应属性的作用是一样的，作用在 type 为 submit 的 `<input>` 标签上，它们的值会覆盖 `<form>` 上属性。

其余略。需要注意的是，上面的属性不是作用在所有类型的 `<input>` 标签上的，比如 "multiple" 就只作用在 type 为 file 和 email 的 input 上。

## HTML5 语义元素

语义元素，即有意义的元素。比如 `<form>` `<table>` `<img>` `<h1>`，清楚的定义了它的内容，用来显示内容。

无语义的元素，比如 `<div>` `<span>`，无需考虑内容，用来布局。

### HTML5 中新的语义元素

许多现有网站都包含以下 HTML 代码：

    <div id="nav">
    <div class="header">
    <div id="footer">

来指明导航链接，头部，以及尾部。

HTML5 提供了新的语义元素来明确一个 Web 页面的不同部分：

- `<header>`
- `<nav>`
- `<aside>`
- `<section>`
- `<article>`
- `<figcaption>`
- `<figure>`
- `<footer>`

详略。需要时再回来仔细看。需要注意的是，`<header>` `<footer>` 不仅可以用于整个文档的头部和尾部，还可以用于其它元素的头部和尾部，比如在 `<articel>` 元素中：

    <article>
      <header>
        <h1>Internet Explorer 9</h1>
        <p><time pubdate datetime="2011-03-15"></time></p>
      </header>
      <p>Windows Internet Explorer 9 (缩写为 IE9) 是在 2011 年 3 月 14 日 21:00 发布的</p>
    </article>

(上例中 `<time>` 是什么元素?)

## HTML5 Web 存储

localStorage 和 sessionStorage (在此之前的解决方案是 cookie)。

- localStorage - 没有时间限制的数据存储
- sessionStorage - 针对一个 session 的数据存储，浏览器关闭后数据清除

API:

- setItem(key)
- getItem(key)
- removeItem(key)
- clear()
- key(index)

## HTML5 Web SQL 数据库

Web SQL 数据库 API 并不是 HTML5 规范的一部分，但是它是一个独立的规范，引入了一组使用 SQL 操作客户端数据库的 API。

相当于操作一个本地的 SQLite。

使用机会比较少，详略。

## HTML5 应用程序

使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。

如需启用应用程序缓存，请在文档的 `<html>` 标签中包含 manifest 属性：

    <!DOCTYPE HTML>
    <html manifest="demo.appcache">
    ...
    </html>

每个指定了 manifest 的页面在用户对其访问时都会被缓存。如果未指定 manifest 属性，则页面不会被缓存 (除非在 manifest 文件中直接指定了该页面)。

详略。估计不会有人用这种方案的，要用也会选择 PWA。

## HTML5 Web Workers

(有点意思。)

web worker 是运行在后台的 JavaScript，不会影响页面的性能。

当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。

web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。

我觉得其实就相当于是一个子线程。

web worker 和 js 主线程之间怎么通信?

worker 通过 postMessage(msg) api 向主线程发消息，主线程通过注册在 worker 上的 onmessage(msg) 回调接收消息，通过调用 worker 对象的 terminate() 方法中止 worker 的执行。

worker 的限制：无法访问 window 对象、document 对象，当然也就无法操作 DOM 了。能力比较有限。

## HTML5 SSE (Server-Sent Event)

(这个真的可以工作吗? 为什么好像从来没有听说过这种方案。)

Server-Sent 事件指的是网页自动获取来自服务器的更新。以前的方案是客户端向服务器轮循。

详略。我不觉得这是一个有效的方案。

## HTML5 WebSocket

WebSocket 是HTML5开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。

浏览器通过 JavaScript 向服务器发出建立 WebSocket 连接的请求，连接建立以后，客户端和服务器端就可以通过 TCP 连接直接交换数据。

当你获取 WebSocket 连接后，你可以通过 send() 方法来向服务器发送数据，并通过 onmessage 事件来接收服务器返回的数据。

WebSocket 事件：

- onopen
- onmessage
- onerror
- onclose

WebSocket 方法：

- send()
- close()

详略。需要注意的是，WebSocket 需要服务器端也实现相应的功能。
