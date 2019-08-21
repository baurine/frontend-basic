# 《CSS 世界》笔记 1

主要是 CSS 2 的内容。

相比网上一些碎片的总结，这本书比较系统深入地了讲解了常用的知识点，分析了很多诡异的现象的原理，收获很大。(花几十块就得到了别人十年的总结，很划算！)

贯空全书的一个 "流" 的概念，了解 CSS 的历史，最初只是为了图文排版，所以很多设计都是出于图片排版考虑的。

## 第三章 - 流、元素与基本尺寸

- 块级元素
- 内联元素
- inline-block

块级元素不等于 "display: block" 元素，块级元素还包括 "display: table | list-item" 的元素。独占一行。宽度自动充满父级，像水放进容器一样。

内联元素，和其它内联元素一行显示，后面会讲到，又区分内容可替换元素 (带 src 或 value 属性的元素，如 img, audio, video, input, select...) 和内容不可替换元素 (如 span)。并不是所有的内联元素在 css 中设置 width/height 都不起作用，img 就可以，而是内容不可替换元素 (span) 设置 width/height 才不起作用。

- span - 只有 padding left/right 和 margin left/right 有作用，width/height 和 padding top/bottom, margin top/bottom 不起作用
- img/audio/video ... - width/height 起作用，padding top/bottom, margin top/bottom 待实践 (根据后面的内容，垂直 margin 是生效的，且不会 margin 合并)

inline-block，对外为 inline (不会独占一行)，对内 block (可以设置 height)，即由外在的 "内联盒子" 和 内在的 "块级盒子" 组成。

而 inline，实际为 inline-inline，则内外皆为 "内联盒子"。

"display: inline-table"，外面是 "内联盒子"，里面是 "table 盒子"。

width/height 作用在内在盒子上。

### width

width 属性默认值是 auto，对于不同元素，auto 有不同的表现：

- 充分利用可用空间，比如 div, p 这些宽度默认是父级容器 100% 的元素
- 收缩与包裹，收缩到合适，典型代表是浮动、绝对定位、inline-block 或 table 元素 (那 inline 的呢?)
- 收缩到最小，比如 table-layout 为 auto 的表格中(??)
- 超出容器限制，比如内联元素设置了 "white-space: nowrap" 且内容很长

(当你需要一个宽度默认充满父容器的 block 时，使用 "display: block"，当你需要一个宽度由内容决定的 block 时，使用 "display: inline-block")

那像 inline 的 span 是哪种情况啊??

"white-space" 是干嘛用的？MDN：https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space ，用来设置如何处理元素中的空白，有这些值：normal/nowrap/pre/pre-wrap/pre-line/break-spaces (是不是可以用这个属性替代 pre 标签？待试)

"text-align: center"，虽然本意是让文本居中，但也可以让块级元素内的子元素水平居中，但不能垂直居中。

首选最小宽度：对 inline-block 设置 "width: 0"，其宽度不一定就是 0，如果里面有内容的话，宽度会是最小文字单元的宽度 (对于中文来说是一个字，对于英文来说是默认是一个单词。)

最大宽度：...

连续内联盒子的概念

```
<div>
  "我是文本"                            // 匿名内联
  <span>我在 inline 标签内</span>       // 内联
  <button>我是按钮</button>             // 内联
  <img src="test.png" alt="test">      // 内联
  <br>
  "我是下一行"                           // 匿名内联
  <p>我是一段描述</p>                     // 块状
</div>
```

box-sizing：*margin-box / border-box / *padding-box / content-box，默认是 content-box，现在几乎都用 border-box 了。详略。

### height

"height: 100%" 生效的情况：

1. 父级指定高度的具体体
1. 元素本身使用绝对定位，则父容器使用 "height: auto" 也可以

### min-width / max-width / min-height / max-height

这些属性的初始值为 auto，不是 0。

设置图片宽度不能超过父容器宽度：

```css
img {
  max-width: 100%;
  height: auto !important;
}
```

和 width/height 之间相互覆盖的规则：超越 "!important"，超越最大。

```
<img src="1.jpg" style="width: 480px!importatn;">
img { max-width: 256px; }
```

最后宽度是 256px，而不是 480px。

```css
.container {
  min-width: 1400px; // 生效
  max-width: 1200px; // 无效
}
```

min-width 和 max-width 冲突时，min-width 会覆盖 max-width。

### 内联元素

块级负责结构，内联负责内容。CSS 世界是为了图文展示而设计的。所谓图文，就是图片和文字，是最典型的内联元素。所以，在 CSS 世界中，内联元素最为重要。

**哪些是内联元素**

1. 从定义看，内联中的内联特指 "外在盒子"，和 "display:inline" 不是一个概念。inline-block 和 inline-table 也都是内联元素，因为它们的 "外在盒子" 都是内联盒子。
1. 从表现看，"内联元素" 典型特征是可以和文字在一行显示。因此，文字/图片/按钮/输入框/下拉框...都是内联元素。

**内联盒模型**

- 内容区域
- 内联盒子 (`<p>我是匿名内联盒子 <em>非匿名内联</em></p>`)
  - 内联盒子 (显示地被 span/a/em 等标签包裹)
  - 匿名内联盒子 (光秃秃的文字)
- 行框盒子 (每一行就是一个行框盒子，由一个个内联盒子组成)
- 包含盒子 (由一行一行的行框盒子组成)

说实话，这里解释得有点模糊，让人很迷惑。大致理解吧。

**幽灵空白节点**

这个是后面导致很多诡异问题的源头。

在 HTML 5 文档中 (这是前提)，内联元素的所有解析和渲染表现就如同每个行框盒子的前面有一个 "空白节点" 一样，它永远透明，不占据任何宽度 (但是有高度！)，看不见也无法通过脚本获取，就好像幽灵一般，但又确实存在，表现如同文本节点一样，称之为 "幽灵节点"。

```
<div><span></span></div>
span {
  display: inline-block;
}
```

在 chrome 中发现 span 高度为 0，但 div 的高度并不为 0，而是 18px，因为存在幽灵节点...

(但是 span 如果是默认的 inline，则 div 高度是为 0 的，如何解释...所以幽灵节点只对 inline-block 有效？)

## 第 4 章 - 盒尺寸四大家族

content / padding / border / margin

### 深入理解 content

前面说到内联元素的 width/height 无法在 css 中修改，但 img/input 这些内联元素却又可以，这是怎么回事。这涉及到另外一个分类：替换元素和非替换元素。

替换元素可以说是 CSS 世界中的另外一个派系了。顾名思义，就是说内容可以被替换，比如 `<img src="1.jpg">`，把 1.jpg 换成 2.jpg，图片就被替换了。这种通过修改某个属性值呈现的内容就可以被替换的元素就称之为 "替换元素"。如 img/object/video/iframe，表单元素 textarea/input 等。

像 span/a/p/h1 这种就是非替换元素。

特性：

1. 内容的外观不受页面上的 CSS 影响，即样式表现在 CSS 作用域外。(Shadow DOM?)
1. 有自己的尺寸，多数为 300x150，也有部分为 0，根浏览器也相关
1. 在很多 CSS 属性上有自己的一套表现规则，比如 vertical-align，默认值为 baseline，即字符 x 的下边缘，但由于替换元素一般不用来显示字符，所以在替换元素中，baseline 变成了元素的下边缘

所有的替换元素都是内联水平元素，inline/inline-block。

(但没说非替换元素，我觉得非替换元素既有内联，也有块级，比如 p/h1 这种)

替换元素可以在 css 中设置 width/height。

**替换元素的尺寸计算规则**

固有尺寸 (内容原本尺寸) < HTML 属性尺寸 < CSS 尺寸

```
<img src="1.jpg">  // 显示 1.jpg 的尺寸，比如 256x192px

<img src="1.jpg" width="128" height="96">  // 显示 128x96px

img { width: 200px; height: 150px }
<img src="1.jpg" width="128" height="96">  // 显示 200x150px
```

值得注意的是，即使把替换元素的 display 设置成 block，它的尺寸也遵循这些规则，width 不变会成 100% 容器宽度。

```
img { display: block }
<img src="1.jpg">  // width 为图片尺寸，比如 256x192px，而不是 100% 容器宽度 (待验证)
```

(有个兼容性问题，img 在 src 无值的情况下，在 firefox 中等同于 span，无法设置 width...)

**替换元素和非替换元素的距离有多远**

1. 观点 1 - 只隔一个 src 属性
1. 观点 2 - 只隔一个 content 属性

由此引出了 content

margin/border/padding/content 这 4 个盒子中的 content box，对应的 css 属性就是 content，从理论来说，content 属性决定了是替换元素还是非替换元素...

在 chrome 浏览器下，所有元素都支持 content 属性 (那这样不是和前面说替换元素都是内联元素矛盾吗...)，而其它浏览器仅在 ::before/::after 中才支持。

在 chrome 中，以下是等效的：

```
<img src="1.jpg">

<img>
img {
  content: url("1.jpg");
}
```

hover 时替换图片：

```
<img src="laugh.jpg">
img:hover {
  content: url("laugh-tear.jpg");
}
```

用图片替换 h1:

```
<h1> CSS 世界 </h1>
h1 {
  content: url(logo.png);
}
```

但由于兼容性问题，content 主要还是用在 ::before/::after 伪元素中，有很多有趣的案例，比如实现 "loading..." 中三个点的动态显示。详略。

PS：::before/::after 都是内联元素。

### 温和的 padding

padding 的妙用：

1. 在内联元素上设置 padding top/bottom，加大可点击范围，却在大部分情况下不影响布局
1. ...

padding 使用百分值，无论是水平，还是垂直方向，均是相对宽度计算！

实现一个宽高比为 5:1 的头图效果：

```css
.box {
  padding: 10% 50%;
  position: relative;
}
.box > img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
```

其余略。

### 激进的 margin 属性

padding 不能为负值，但 maring 可以，margin 属性通过负值来改变元素尺寸。

负值的 margin 在很多情况下有很妙的用法，能很巧妙的解决问题。比如三个水平的 li，每个 li 的 margin-right 为 20px，但实际我不想要最后一个 li 多余的 20px margin-right。虽然我们可以让最后一个 li 的 marign-right 为 0，但也可以这样做：

```css
ul {
  margin-right: -20px;
}
ul > li {
  float: left;
  width: 100px;
  margin-right: 20px;
}
```

此时，ul 的宽度相当于 100%+20px，妙啊！

只使用子元素的 margin-bottom 来实现滚动容器的底部留白，而不要使用容器的 padding-bottom，在 chrome 上这个 padding-bottom 会失效。

**margin 合并问题**

(这一小节总结得很好)

块级元素的上边距 (margin-top) 和下边距 (margin-bottom) 有时会合并成单个外连距，这样的现象称之为 "margin 合并"。关键点：

1. 块级元素，但不包括浮动和绝对定位元素 (任何元素变成浮动或绝对定位后，display 都会变成 block)
1. 只发生在垂直方向，不包括水平方向

合并的三种场景：

1. 相邻兄弟元素的 margin 合并 - 最常见
1. 父级和第一个/最后一个子元素 - 带来麻烦最多
1. 空块级元素的 margin 合并 - 不常见，解决办法看书上

对于第二种场景中的解决办法：

- margin-top 合并
  - 将父元素设置为 BFC
  - 父元素设置 border-top
  - 父元素设置 padding-top
  - 父元素和第一个子元素之间添加内联元素进行分隔
- margin-bottom 合并
  - 父元素设置成 BFC
  - 父元素设置 porder-bottom
  - 父元素设置 padding-bottom
  - 父元素和最后一个子元素之前添加内联元素进行分隔
  - 父元素设置 height, min-height 或 max-height

将父元素设置成 BFC 的一个方式：

```
.container {
  overflow: hidden;
}
```

后面会深入讲 BFC (终于理解这玩意了)

**margin:auto**

实现块级元素的水平左中右对齐。

为什么是块级元素，而不能对内联元素实现对齐，因为 "margin: auto" 的前提是元素能在不设置 width 的情况下自动填充父元素剩余空间，即默认 "width: 100%"，而内联元素显然不行。

又为什么是水平，而不是垂直，因为块级元素只有 width 方向才能填充父元素，height 不行。

"margin: auto" 用来填充闲置的尺寸，规则如下：

1. 如果一侧为定值，一侧 auto，则 auto 为剩余空间 - 不常用但实际很实用
1. 如果两则均是 auto，则平分剩余空间 - 常用

比如实现右对齐，"float: right" 的替代方法：

```css
.father {
  width: 300px;
}
.son {
  width: 200px;
  margin-left: auto;
}
```

如何实现垂直和水平同时居中，使用绝对定位：

```css
.father {
  width: 300px;
  height: 150px;
  position: relative;
}
.son {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

此时，son 元素在水平和垂直方向都能填充父元素的所有剩余空间了，我们再给它加上 width/height 以及 "margin: auto" 就行了。

```css
.son {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 100px;
  margin: auto;
}
```

**margin 无效情奖品**

1. 对于 inline 的非替换元素，垂直方向的 margin 无效，但对于替换元素，垂直 margin 有效，而且，没有 margin 合并的情况，所以图片永远不会发生 margin 合并。
1. 绝对定位元素非定位方位的 margin 值无效。
1. ... 略

### 功勋卓越的 border

border-width 不支持百分比，可以用来辅助实现一些独特造型的图形，比如三角形，梯形。

透明 border 用来扩大点击范围。

详略。

## 第 5 章 - 内联元素与流

### 字母 x

凡涉及文字排版，离不开最基本的基线 - baseline，line-height 行高的定义就是两基线的距离，vertical-align 的默认值就是基线。

基线的定义：字母 x 的下边缘 (线) 就是基线。(图略)

各种线由上到下依次是：

- ascender height (ascent) - 上行线高度
- cap height - 大写字母高度
- median (mean line) - 中线
- baseline - 基线
- descender height (descent) - 下行线高度

图略。以 serif 字体的 "Sphinx" 为例，h 顶点最高处为 ascender height，次高 S 顶点最高处为 cap height，p/i/n/x 顶点齐高，为 median，S/h/i/n/x 底部齐平，为 baseline，p 最底部为 descender height。

x-height: 小写字母 x 的高度，术语描述就是基线和等分线 (mean line，也称中线 midline) 之间的距离。

"vertical-align: middle"，在 CSS 中，此处的 middle 指的是基线往上 1/2 x-height 高度，可以近似理解为 x 字母中交叉点那个位置。由此可见，"vertical-align: middle" 并不是绝对的垂直居中对齐，它相对的是文字，而非容器。

vertical-align: [CSS vertical-align 属性详解](https://www.cnblogs.com/hykun/p/3937852.html) (还是迷糊)

**单位 ex**

ex 是相对单位，指的是小写字母 x 的高度，即 x-height = 1ex。1ex 的具体值取决于 font-size，当 font-size 为 14px 时，1ex 在 chrome 上约为 7.36px，当 font-size 为 30px 时，1ex 约为 15.23px。

书中有个 ex 的妙用，利用 ex 和默认的 baseline 对齐实现右侧向下箭头和文本的居中。详略。

### 内联元素的基石 - line-height

div 内仅有文本时，它的高度是由文本的 line-height 决定的，而不是 font-size。

对于非替换元素的纯内联元素，其可视高度完全由 line-height 决定。height = font-size\*line-height，假如 font-size 是 80px，line-height 是 1.5，那么高度是 120px。line-height 的默认值是 normal，这个值对于不同字体是不一样的，对于宋体来说，line-height 默认值大约是 1.14，所以当文本的 font-size 为 16px 时，在 chrome 中 inspect，它的高度约是 18px。

行距 = 行高 - em-box，即 行距 = line-height - font-size

对于替换元素，或是块级元素，line-height 的作用如何？

对于替换元素如 img，line-height 对它无效。但要注意，替换元素前面存在幽灵节点，它实际是文本节点，当给替换元素的父节点设置 line-height 时，这个 line-height 会作用在幽灵节点时，从而影响幽灵节点的高度，如果幽灵节点的高度大于替换元素的高度，就会误以为 line-height 作用在替换元素上。

对于替换元素和内联非替换元素在一起时，line-height 只能决定最小高度。

**line-height 让内联元素垂直居中**

暂时没理解，先跳过。

**line-height 各类属性值**

```css
line-height: 1.5;
line-height: 150%;
line-height: 1.5em;
```

三者区别，使用 1.5，后代继承的属性都是 `line-height: 1.5;`，使用后两者，假如在当前元素 font-size 为 16px，则 line-height 为 24px，则后代继承的属性是 `line-height: 24px;`。

```css
body {
  line-height: 1.5;
}
* {
  line-height: 1.5;
}
```

上面两者的区别，虽然 line-height 具有继承性，但对于某些替换元素来说，尤其是表单类的替换元素，如输入框，按钮之类的，对它们来说承是属于最弱的权重，所以第一种写法无法影响这些元素，而第二种写法是可以的。折衷法：

```css
body {
  line-height: 1.5;
}
input,
button {
  line-height: inherit;
}
```

line-height 还可以设置为具体的 px 值。

还有待进一步深入学习，刚 inspect 时发现 span 的高度并不等于 line-height\*font-size。假设 html 是这样的：

```
<div class="box box2">
    <span>span content</span>
</div>

.box {
    width: 280px;
    margin: 1em auto;
    outline: 1px solid #beceeb;
    background: #f0f3f9;
}
.box2 span {
    line-height: 6;  // 从 2 依次增加到 6 看效果
}
```

文本默认值是 14px，span 默认是 inline，因为 line-height 是 6，预期 span 的高度是 84，但 inspec 时发现，span 的高度无论 line-height 是多少，它的高度都是 17px，但随着 line-height 的增加，span 的上下空间增加 (类似 margin top/bottom)，导致 div 容器的高度增加，当 line-height 为 6 时，容器高度为 84px。

但是如果把 span 的 display 改成 inline-block，span 的高度则变成 84px，即为 font-size\*line-height。

(TODO: 添加图片)

所以，一定要区分块级元素/inline/inline-block 的情况。

### vertical-align

line-height 一般和 vertical-align 配合使用。

line-height 和 height 不一定相等。

vertical-align 属性值分类：

1. 线类：baseline / top / middle / bottom
1. 文本类：text-top / text-bottom
1. 上标下标类：sub / super
1. 数值百分比类：20px / 2em / 20% (百分比相对的值是 line-height)

vertical-align 只能应用于内联元素 (inline, inline-block, inline-table) 以及 display 值为 table-cell 的元素。

因为浮动和绝对定位会让元素块状化，因为浮动元素和绝对定位元素使用 vertical-align 失效。

问题：不同字体大小的文字混排，不同字号的基线不一样，最后对齐的基线会是哪一个？(从书中例子来看，会统一对齐最底部的基线，需要进一步求证... 会不会由前面的幽灵节点的 baseline 来决定的？)

图片和不同字体大小的文字进行混排，baseline/top/middle/bottom/text-top/text-bottom 是如何决定的。

幽灵结点导致了很多诡异的问题，比如图片底部有缝隙的问题。解决办法

1. 将 img 改成 display:block
1. 设置容器的 line-height 为 0
1. 设置容器的 font-size 为 0
1. 图片设置其它的 vertical-align，比如 bottom

**深入理解 vertical-align 线性类属性值**

inline-block 与 baseline: baseline 在文本之类的内联元素那里就是 x 字符的下边缘，对于替换元素则是元素的最下边缘，但如果是 inline-block 元素，则规则要复杂一些：一个 inline-block 元素，如果里面没有内联元素，或者 overflow 不是 visible，则该元素的基线是其 margin 底边缘，否则，就是元素里最后一行内联元素的基线。

(网上又看了一些资料，line-height 和 vertical-align 确实很难理解，反正涉及到文字排版一深究都让人头大。)

看不懂的先跳过，需要时再回头来看。

"vertical-align: middle"，只有这个属性值难理解一些，它的作用是，把当前元素的 middle 和父元素的 baseline + 1/2\*x-height 对齐，这个 x-height 是父元素中 x 字母的高度，与父元素 font-size 相关。

(有了 flexbox 是不是就可以不用 vertical-align 啦)

- "vertical-align: text-top": 盒子的顶部和父级内容区域的顶部对齐
- "vertical-align: text-bottom": 盒子的底部和父级内容区域的底部对齐

实际作用非常有限，跳过。
