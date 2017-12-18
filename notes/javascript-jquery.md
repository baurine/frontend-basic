# jQuery

学习资源：

1. [jQuery 教程](http://www.runoob.com/jquery/jquery-tutorial.html)

jQuery 是一个 JavaScript 库，主要是封装了原生 JavaScript DOM API，极大地简化了对 DOM 的操作。

(当然，jQuery 算是一个比较重的库，如果你的工程只是少量地操作 DOM，那么直接用原生的 DOM API 就行了，犯不着用上 jQuery，而且 HTML5 之后，DOM API 也加入了一些类似 jQuery 的 API，可以胜任一些 jQuery 的工作。)

(另外，在 MVVM 时代的前端开发，jQuery 已经不推荐使用了，虽然如此，但我们还是要了解它。)

[You Dont Need jQuery](https://github.com/nefe/You-Dont-Need-jQuery/blob/master/README.zh-CN.md)

一个 jQuery 简单的示例：

    $(document).ready(function(){
      $("p").click(function(){
        $(this).hide();
      });
    });

## jQuery 简介

jQuery 能做的事：

- HTML 元素选取
- HTML 元素操作
- CSS 操作
- HTML 事件函数
- JavaScript 特效和动画
- HTML DOM 遍历和修改
- AJAX
- Utilities

另外，还有大量基于 jQuery 的插件。jQuery 形成了一个生态。

## jQuery 语法

通过 jQuery，您可以选取 (查询，query) HTML 元素，并对它们执行 "操作" (actions)。

    $(selector).action()

$(selector) 得到的是一个 jQuery 的对象，里面封装了 DOM element 对象。jQuery 对象相比 DOM element 对象，多了很多方便的方法和属性。

所有的 jQuery 操作必须在文档就绪之后执行：

    $(document).ready(function() {
      // jQuery 语句
    })

    // 或者
    $(function() {
      // jQuery 语句
    })

## jQuery 选择器

- 元素选择器 - `$("p")`
- id 选择器 - `$("#test")`
- class 选择器 - `$(".test")`

以上选择器可组合使用，比如 `$("p.test")`。

## jQuery 事件

    $("p").click(function(){
      $(this).hide();
    });

常见 DOM 事件：

- 鼠标：click, dbclick, mouseenter, mouseleave
- 键盘：keypress, keydown, keyup
- 表单事件：submit, change, focus, blur
- 文档/窗口事件：load, resize, scroll, unload
- 文档就绪事件：ready (`$(document).ready()`)

## jQuery 效果

其实主要是指 jQuery 对元素的 CSS 属性的动画操作。

- 显示 / 隐藏
- 淡入淡出
- 滑动
- 动画
- 停止动画
- callback
- 链

### 显示 / 隐藏

- show(), show(speed, callback)
- hide(), hide(speed, callback)
- toggle(), toggle(speed, callback)

speed 可以取值 "slow" / "fast" 或毫秒值，比如 1000，callback 可选。

    $("button").click(function(){
      $("p").hide(1000);
    });

### 淡入淡出

实际是改变透明度值。

- fadeIn(), fadeIn(speed, callback)
- fadeOut(), fadeOut(speed, callback)
- fadeToggle(), fadeToggle(speed, callback)
- fadeTo(speed, opacity, callback)

### 滑动

我想这应该是通过改变宽高来实现的吧。

- slideDown(), slideDown(speed, callback)
- slideUp(), slideUp(speed, callback)
- slideToggle(), slideToggle(speed, callback)

### 动画

批量改变 CSS。

语法：

    $(selector).animate({params}, speed, callback);

示例：

    $("button").click(function(){
      $("div").animate({
        left:'250px',
        opacity:'0.5',
        height:'150px',
        width:'150px'
      });
    });

注意事项：

1. 如果动画是改变元素位置，那么记得要把元素的 posistion 设置为 static 以外的值，static 的元素无法移动
1. 在 animate 中的属性，必须使用 camle 的命名风格，比如 `paddingLeft`，而不是 `padding-left`

详略。

### 停止动画

语法：

    $(selector).stop(stopAll, goToEnd);

- 可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
- 可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。

因此，默认地，stop() 会清除在被选元素上指定的当前动画。

示例：

    $("#stop").click(function(){
      $("#panel").stop();
    });

### callback

略。

### 链

jQuery 支持链式调用。(因为每一个 action 方法都返回了 jQuery 对象自身。)

示例：

    $("#p1").css("color","red").slideUp(2000).slideDown(2000);

## jQuery HTML

上面讲了 jQuery 对元素 CSS 属性的操作，这一节则是 jQuery 对 HTML DOM 本身的操作。包括：

- 获得 HTML 元素的内容
- 设置元素内容
- 添加元素
- 删除元素
- CSS 类
- css() 方法
- 尺寸

### 获得元素内容

- text() - 设置或返回所选元素的文本内容，包含的 HTML 标记会被清除
- html() - 设置或返回所选元素的内容 (包括 HTML 标记)
- val() - 设置或返回表单字段的值
- attr() - 获取元素的某个属性值，如 `$("a#runobb").attr("href")`

### 设置元素内容

还是上面四个方法，但是参数不一样。 上面前三个方法，如果方法为空，则表示获取，如果参数有值，则为设置内容。`attr()` 如果只有一个参数，则表示取值，如果有两个参数，则第二个值为要设置的值。

示例：

    $("#btn1").click(function(){
      $("#test1").text("Hello world!");
    });
    $("#btn2").click(function(){
      $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
      $("#test3").val("RUNOOB");
    });

text(), html(), val() 还支持回调函数作为第二个参数。

    $("button").click(function(){
      $("#runoob").attr("href","http://www.runoob.com/jquery");
    });

    $("button").click(function(){
      $("#runoob").attr({
        "href" : "http://www.runoob.com/jquery",
        "title" : "jQuery 教程"
      });
    });

attr() 也支持回调函数。

### 添加元素

- append() / prepend() - 用于容器元素添加子元素
- after() / before() - 用于子元素添加兄弟元素

### 删除元素

- remove() / remove(selector) - 删除元素自身
- empty() - 删除容器中的子元素

### CSS 类

- addClass()
- removeClass()
- toggleClass()
- css()

### css()

获取 css 属性值：

    $("p").css("background-color");

设置 css 属性值：

    $("p").css("background-color", "yellow");

设置多个 css 属性：

    $("p").css({"background-color":"yellow","font-size":"200%"});

### 尺寸

- width()
- height()
- innerWidth()
- innerHeight()
- outerWidth()
- outerHeight()

(好奇对应的 DOM element 属性是哪些?)

![](../art/jquery-dimension.gif)

## jQuery 遍历

- 祖先，向上遍历
  - parent()
  - parents()
  - parentsUtil()

- 后代，向下遍历
  - children()
  - find() (让我想起了 Android 中的 findViewBy() 方法了)

- 兄弟 (siblings)
  - siblings()
  - next()
  - nextAll()
  - nextUtil()
  - prev()
  - prevAll()
  - prevUtil()

- 过滤
  - first()
  - last()
  - eq()
  - not()
  - filter()

## jQuery AJAX

jQuery 与 AJAX 的关系。AJAX 是可以独立使用的，正如 HTML DOM，但写起来比较麻烦，而 jQuery 对它进行了封装，简化了写法，使之使用更加方便。

### AJAX load() 方法

jQuery load() 方法是简单但强大的 AJAX 方法。load() 方法从服务器加载数据，并把返回的数据放入被选元素中。

语法：

    $(selector).load(URL, data, callback);

示例：

    $("#div1").load("demo_test.txt");

### get() 和 post() 方法

GET:

    $.get(URL, callback)

POST:

    $.post(URL, data, callback)

其它封装的方法：

- `$.getJSON()`
- `$.ajax()`

## jQuery 其它

### noConflict() 方法

jQuery 使用 `$` 作为 jQuery 的简写，如果其它 JavaScript 框架也使用 `$` 符号作为简写，就会遇到冲突。

noConflict() 方法会释放对 `$` 标识符的控制。

示例：

    $.noConflict();
    jQuery(document).ready(function(){
      jQuery("button").click(function(){
        jQuery("p").text("jQuery 仍然在工作!");
      });
    });

    var jq = $.noConflict();
    jq(document).ready(function(){
      jq("button").click(function(){
        jq("p").text("jQuery 仍然在工作!");
      });
    });

其余略。

## JSONP

JSONP 用来解决跨域请求问题。需要前后端配合。

(这篇文章讲得不好，看其它文章)

- [5 分钟彻底明白 JSONP](https://tonghuashuo.github.io/blog/jsonp.html)

原理：

> AJAX 无法跨域是受到 "同源政策" 的限制，但是带有 src 属性的标签 (例如 `<script>`、`<img>`、`<iframe>`) 是不受该政策限制的，因此我们可以通过向页面中动态添加 `<script>` 标签来完成对跨域资源的访问，这也是 JSONP 方案最核心的原理。

> 通常我们使用 `<script>` 都是引用的静态资源 (主要是 js 文件)，其实它也可以用来引用动态资源 (php、jsp、aspx 等)，后台服务被访问后返回一个 "JavaScript 函数调用" 形式的字符串，由于是字符串，因此在后台的时候不会起到任何作用，但到了前台，放入 `<script>` 标签之内，就成了一个合法的 JavaScript 函数调用，实参是我们真正需要的数据，被调用的回调函数也已经实现了，因此就会顺利的被调用。

纯 JavaScript 的实现：

    <script>
      // 实现回调函数，这里没有了 jQuery 的封装，必须手动指定并实现
      var dosomething = function(data){
          console.log(data);
      };

      // 提供 JSONP 服务的 URL 地址，查询字符串中加入 callback 指定回调函数
      var url = "tonghuashuo.github.io/test/jsonp.txt?callback=docomething";

      // 创建 <script> 标签，设置其 src 属性
      var script = document.createElement('script');
      script.setAttribute('src', url);

      // 把 <script> 标签加入 <body> 尾部，此时调用开始。
      document.getElementsByTagName('body')[0].appendChild(script);

      // 因为目标 URL 是一个后台脚本，访问后会被执行，返回的 JSON 被包裹在回调函数中以字符串的形式被返回。
      // 返回的字符串放入 <script> 中就成为了一个普通的函数调用，执行回调函数，返回的 JSON 数据作为实参被传给了回调函数。
    </script>

jQuery 的实现：

    $.ajax({
      url: "http://tonghuashuo.github.io/test/jsonp.txt",
      dataType: 'jsonp',
      jsonp: "callback",
      jsonpCallback: "dosomething"
    })
    .done(function(res) {
      console.log("success");
      console.log(res);
    })
    .fail(function(res) {
      console.log("error");
      console.log(res);
    });

## jQuery 插件

略。
