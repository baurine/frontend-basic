# CSS 响应式 Web

学习资源：

1. [响应式 Web 设计](http://www.runoob.com/css/css-rwd-intro.html)

## viewport

viewport 是用户网页的可视区域。viewport 翻译为中文可以叫做 "视区"。

手机浏览器是把页面放在一个虚拟的 "窗口" (viewport) 中，通常这个虚拟的 "窗口" 比屏幕宽，这样就不用把每个网页挤到很小的窗口中 (这样会破坏没有针对手机浏览器优化的网页的布局)，用户可以通过平移和缩放来看网页的不同部分。

**设置 viewport**

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

"initial-scale=1.0" 表示加载页面是不要缩放。否则在手机浏览器上加载桌面版的 web 页面时会产生缩放。

## 网格视图

(nice! 理解了。)

核心要点：

1. 所有元素的 box-sizing 是 border-box
1. 把一个容器划分成 12 列，每个子元素可以占据多列，但所有子元素占据列数之和必须等于 12 (小于也是可以的吧?)
1. 子元素都设置成 `float: left`
1. 容器元素要对 float 进行 clear，使用 `:after` 伪元素

一步步实现一个简化版。

第一步，设置 box-sizing。

    * {
      box-sizing: border-box;
    }

第二步，划分 12 列，用 100% / 12 = 8.33%。

    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}

第三步，所有列向左浮动，设置 padding (可选)。

    [class*="col-"] {
      float: left;
      padding: 15px;
      border: 1px solid red;
    }

每一行使用 `<div>` 包裹。所有列数加起来应为 12。

    <div class="row">
      <div class="col-3">...</div>
      <div class="col-9">...</div>
    </div>

第四步，清除浮动。

    .row:after {
      content: "";
      clear: both;
      display: block;
    }

nice!

## 媒体查询 (@media)

前面已经介绍过大部分内容了。

使用 @media 为不同的屏幕尺寸设置不同的样式。

上一小节中我们为不同的列设置不同的宽度，但在移动端我们希望每一列都充满屏幕：

    @media only screen and (max-width: 768px) {
      /* For mobile phones: */
      [class*="col-"] {
        width: 100%;
      }
    }

上面的例子我们是以桌面版优先，如果以移动版优先，那么 CSS 就应该是：

    /* 为移动端设计: */
    [class*="col-"] {
      width: 100%;
    }
    @media only screen and (min-width: 768px) {
      /* For desktop: */
      .col-1 {width: 8.33%;}
      .col-2 {width: 16.66%;}
      .col-3 {width: 25%;}
      .col-4 {width: 33.33%;}
      .col-5 {width: 41.66%;}
      .col-6 {width: 50%;}
      .col-7 {width: 58.33%;}
      .col-8 {width: 66.66%;}
      .col-9 {width: 75%;}
      .col-10 {width: 83.33%;}
      .col-11 {width: 91.66%;}
      .col-12 {width: 100%;}
    }

为 HTML 设置支持不同屏幕的 css 样式：

    <div class="row">
      <div class="col-3 col-m-3">...</div>
      <div class="col-6 col-m-9">...</div>
      <div class="col-3 col-m-12">...</div>
    </div>

对横竖屏的支持：

    orientation：portrait | landscape

    @media only screen and (orientation: landscape) {
      body {
        background-color: lightblue;
      }
    }

## 实战

### 图片

略。

### 视频

略。

## Bootstrap 框架

Bootstrap，响应式 Web 设计框架。
