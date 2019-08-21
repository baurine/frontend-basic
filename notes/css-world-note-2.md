# 《CSS 世界》笔记 2

## 第 6 章 - 流的破坏与保护

### 6.1 - 魔鬼属性 float

float 的特性：

- 包裹性 (指宽度：包裹性和自适应性)
- 块状化并格式化上下文 (BFC) - 任何元素 float 后都会变成 "display:block" (除了 inline-table，它 float 后变成 "display:table")
- 破坏文档流
- 没有任何 margin 合并 (这其实算是 BFC 后带来的结果)

float 块状化后，text-align/vertical-align 就失效了，因为它们作用于内联元素。

float 导致的结果：父元素高度塌陷，行框盒子和浮动元素的不可重叠性，实现文字环绕 (但这种布局已经过时了...)

float 的本意是用来实现文字环绕，但实际却是大家用它的特性用来实现浮动布局 (设计者和使用者的区别)

示例：

```
<div class="father">
  <img src="1.jpg">
  <p class="animal">cat, dog, elphant ...</p>
</div>

.father {
  overflow: hidden;
}
.father > img {
  width: 60px; height: 64px;
  float: left;
}
.animal {
  margin-left: 70px;
}
```

适用于一侧定宽一侧自适应，如果宽度不固定，某些场景下可以使用百分比，如：

```css
.left {
  float: left;
  width: 50%;
}
.right {
  margin-left: 50%;
}
```

多栏布局：

```
<div class="box">
  <a href class="prev"> 上一章 </a>
  <a href class="next"> 下一章 </a>
  <h3 class="title">第 6 章 - 流</h3>
</div>

.prev {
  float: left;
}
.next {
  float: right;
}
.title {
  margin: 0 70px;
  text-align: center;
}
```

### 6.2 - float 的天然克星 clear

clear: none / left / right / both (但实际大家都只用 both)

clear 用来清除自身的浮动，官方解释："元素盒子的边不能和前面的浮动元素相邻"，注意，只是和前面的元素，不关心后面的元素，即使设置的是 "clear: both"。

clear 属性只有块级元素才有效，而 ::after 待伪元素默认是内联水平，所以要用它们清除浮动时需要设置 "display: table|block"。

```css
.clear::after {
  content: '';
  display: table;
  clear: both;
}
```

"clear:both" 的作用本质是让元素自己不和 float 元素在一行显示，并不是真正意义上的清除浮动 (原来的浮动还在)，一些不好的特性导致的现象：

1. 如果 "clear:both" 元素前面的元素就是 float，则 margin-top 负值无效
1. "clear:both" 后面的元素依旧可能发生文字环绕 (后面的元素使用了负值的 margin-top)

可见，"clear:both" 只能在一定程序上消除浮动的影响，要想完美地去除浮动元素的影响，需要其它 CSS 声明 - 引出 BFC。

### 6.3 - CSS 世界的结界 BFC

BFC: Block Format Context，块级格式化上下文。结界，封闭空间。如果一个元素具有 BFC，内部子元素再怎么折腾，都不会影响外部的元素。所以 BFC 元素是不可能发生 margin 重叠的，因为 margin 重叠会影响外部元素；BFC 元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元素高度塌陷，必然会影响后面的元素布局和定位，有违 BFC 元素的子元素不影响外部元素的设定 (反推法)。

总结就是两个特性：

- 不会发生 margin 合并
- 清除浮动

什么时候触发 BFC:

- `<html>` 根元素
- float 的值不为 none (这里和上面是不是矛盾啊... float 怎么会是 BFC 呢，BFC 作用之一不就是用来清除 float 吗... 不矛盾，float 的元素使自身不会和前面的 float 发生环绕，但它后面的元素会和自身环绕...)
- overflow 的值为 auto / scroll / hidden (即不为默认的 visible)
- display 的值为 table-cell / table-caption / inline-block
- position 的值不为 relative / static (即可以为 absolute / fixed)

只要元素符合上面任意一条件，就无须使用 "clear:both" 属性去清除浮动。

这些条件是最常用的可能是 `{ overflow: hidden; }` 了。

### 6.4 - overflow

overflow 用来消除浮动只是副业，本职工作是裁剪。裁剪界线是 border box 的内边缘，而不是 padding box 的内边缘。

overflow:

- visible - 默认值
- hidden - 裁剪
- scroll - 滚动条区域一直在
- auto - 不足时没有滚动条，超出时显示滚动条

html 和 textarea 的 overflow 默认值是 auto，而不是 visible。

overflow-x, overflow-y，虽然默认值都是 visible，但是，如果有一个轴的值设置成了 hidden/auto/scroll，那么另一个轴的 visible 实际会表现成 auto。即：

```css
html {
  overflow-x: hidden;
  overflow-y: auto; // 多余
}
```

(css 难就是在这，各种隐藏的规则，防不胜防...)

overflow 与滚动条：滚动格在 PC 上会占据可视空间，它来自 html，而不是 body。

依赖 overflow 的样式表现：如单行文字溢出显示点点点的效果。

```css
.ell {
  /* 三个条件缺一不可 */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
```

#### 6.4.5 overflow 与锚点

当 "overflow: hidden;" 时，如果隐藏的内容里有锚点，它能滚动到可视区域来。借助这种方式，可以无需使用 js 而实现简单的选项卡效果。妙！

### 6.5 - float 的兄弟 "position: absolute"

虽然一个是 float，一个是 position，但两者很多特性相似，如 "块状化"，"包裹性"，"破坏性" 等。

absolute 后的元素会块状化，即 "display: block"。

absolute 的包含块，即相对定位的那个块，并不是它的父元素，而且向上遇到的第一个 "position: relative" 的元素，直至 html。

元素 absolute 后，它的初始位置和它没有 absolute 之前是一模一样的，打个比方，你现在站在地面上，然后给你添加 "position: absolute" 后，你就从原地漂浮垂直漂浮到空中，但从空中俯看时，你的位置和之前没有区别。利用这个特性，可以简化 css 的写法，很多时候，一句 "postion: absolute" 就够了，不用再把父元素设置成 "position: relative"，再把当前元素的 top/left 设置成 0。如下所示：

```css
.father {
  position: relative;
}
.son {
  position: absolute;
  top: 0;
  left: 0;
}
```

很多时候，它的效果和下面是一样的：

```css
.son {
  position: absolute;
}
```

注意一个大区别：第一种方式，absolute 的包含块是父元素，但第二种方式包含块就不一定是父元素了。这种方式被本书作者张鑫旭称之为 "无依赖绝对定位"。

你会大吃一惊，既然设置成 absolute 和不设置是一样的效果，那我改它干嘛呀，原因是，设置成 absolute 后，它会影响它后面的元素，后面的元素可以占据 absolute 原来的空间，从而和 absolute 元素重叠，开成堆叠的效果，这是和 float 的区别，float 是占据空间但内容不重叠。

### 6.6 - absolute 与 overflow

对于普通元素来说，"height: 0; overflow: hidden;" 会导致块内的所有元素被裁剪，但对于 absolute 和 fixed 元素来说，规则有些复杂。

规则：如果 overflow 不是定位元素 (定位元素即 position 为 relative/absolute/fixed)，同时绝对定位元素和 overflow 容器之间也没有定位元素，则 oveflow 无法对 absolute 元素进行裁剪。(有点绕...)

示例：

```html
<div style="overflow: hidden;">
  <img src="1.jpg" style="position: absolute" />
</div>
```

此示例符合上面的规则，因为 img 不会被裁剪。

详细，遇到问题时再翻翻此书。

### 6.7 - absolute 与 clip

css 中有些属性必须和其它属性配合使用才有效，比如 clip 就只能用于 "position: absolute"。

(MDN 说此属性此弃用，用 clip-path 替换...)

两大作用：

- fixed 固定定位的裁剪 (因为 overflow 裁剪对 fixed 无效) - (咦，不是说只能用于 "position: absolute" 的吗，怎么又来了个 fixed...)
- 最佳可访问性隐藏，替代 "display:none"，"visibility: hidden"，透明度为 0，text-indent 等方法。

注意："clip: rect(0,0,0,0)" 表示要裁剪掉所有区域，所以结果就是啥都看不到了。

详略。

### 6.9 - "position: relative" 才是大哥

relative 的定位是相对自身的，而不是父元素 (如果是相对父元素，那它就是 absolute 了)。top/bottom，left/right 只有一个方向的值生效。

position 的默认值是 static，表示没有定位，元素出现在正常的流中 (忽略 top, bottom, left, right 或者 z-index 声明)。

relative 的最小化影响原则：

- 尽量不使用 relative
- 如果一定要用，则 relative 务必最小化 (使 relative 限定在一个很小的范围内，不要影响其它布局) - 赞！

示例：

```html
<div>
  <img src="1.jpg" />
  <p>content 1</p>
  ...
</div>
```

要把 img 显示在右上角，不国思索和常见的做法：

```html
<div style="position: relative;">
  <img src="1.jpg" style="postion: absolute; top: 0; right: 0;" />
  <p>content 1</p>
  ...
</div>
```

此时，虽然实现了效果，但 img 后面的 p 等元素也被影响了。更佳的做法：

```html
<div>
  <div style="position: relative">
    <img src="1.jpg" style="postion: absolute; top: 0; right: 0;" />
  </div>
  <p>content 1</p>
  ...
</div>
```

妙！

### 6.10 - 强悍的 "position: fixed"

详略。

## 第 7 章 - CSS 世界的层叠规则

z-index 在 css 2 中只能作用于定位元素，在 css 3 中可以作用于 flexbox。

z-index 可以为负值。

详略，遇到问题再回来看。

## 第 8 章 - 强大的文本处理能力

### 8.1 line-height 的另外一个朋友 font-size

font-size -> line-height -> vertical-align

单位：px / ex / em / rem (root em)

chrome 有一个限制，font-size 要么不能小于 12px，要么为 0px，即使是 0.1px，实际也会变成 12px (我觉得这不应该是 chrome 应该负责的范围啊)。所以隐藏文字除了可以使用 text-indent 外，还可以用 "font-size: 0"。

(css 难的地方之二，忒灵活了，实现同一个效果可以有 n 种方法...)

### 8.2 font-family

- serif - 衬线字体
- sans-serif - 无衬线字体
- monospace - 等宽字体
- cursive - 手写字体
- fantasy - 奇幻字体
- system-ui - 系统 UI 字体

SC: Simplified Chinese / TC: Traditional Chinese

详略，看以前的笔记。

### 8.3 字体家族其它成员

#### 8.3.1 font-weight

属性值：

- normal (=400) / bold (=700)
- lighter / bolder
- 100 ~ 900 (100 的整数倍)

出乎意料，居然没有 light，我怎么印象中用过呢...

但是，这些值不是设置以后就能生效的，取决于该字体支不支持这种字重。

#### 8.3.2 font-style

属性值：

- normal
- italic
- oblique

了解即可，italic 斜体会优先使用字体的斜体字体，如果该字体没有斜体字体，则 fallback 成 oblique，单纯地让文字倾斜，所以 oblique 没有使用的必要。

所以 underline 的效果并不在 font-style 里，而是 text-decoration。

font-variant，略。

### 8.4 font 属性

让网页的字体跟着系统走的一些方法：

```css
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Microsoft YaHei';
}
html {
  font-family: system-ui, ...;
}
html {
  font-family: menu/small-caption/status-bar...;
}
```

### 8.5 真正了解 "@font-face" 规则

解释了 @font-face 中 src / font-weight/ font-style 的写法及意义，理解比以前更清楚了。

```css
@font-face {
  font-family: ICON;
  src: url('icon.eot') format('eot');
  src: url('icon.eot?#iefix') format('embedded-opentype'), url('icon.woff2')
      format('woff2') url('icon.woff') format('woff'),
    url('icon.ttf') format('typetrue'), url('icon.svg#icon') format('svg');
  font-weight: normal;
  font-style: normal;
}
```

写这么多 src 都是为了兼容性，如果不考虑兼容性可以简化。

- svg 是为了兼容 iOS 4.1 及其之前的版本
- eot 格式是 IE 私有，IE6~8 只支持 eot
- woff (web open font format) 是专为 web 设计开发的字体，Android 4.4 开始全面支持
- woff2 是比 woff 尺寸更小的字体，首选，但目前只有 Chrome/Firefox 支持较好
- ttf 一般用于系统安装字体，web 也能用，就是尺寸太大，优点是老版本的 Android 也能支持

综上：

- svg 格式果断舍弃
- 如果无须兼容 IE8，eot 舍弃
- 如果无须兼容 Android 4.3 之前，ttf 舍弃

其余略。

#### 8.5.2 @font-face 与字体图标技术

(趋势是此技术会被 svg 替代)

嗯，这一小节解决我以前的一个疑问，我以前在想，这个图标的 unicode 和正常文字的 unicode 冲突了怎么办？但实际就是会冲突，没关系啊，不是已经用 font-family 作为 namespace 进行隔离了吗。甚至利用冲突还可以更方便，如下所示：

```
@font-face {
  font-family: ICON;
  src: ...
}
.icon {
  font-family: ICON;
}
.icon-home::before {
  content: '家'
}
```

.icon-home 在正常字体下会显示成汉字 "家"，但在此图标字体中，我们把一个家的图标的 unicode 设置成和汉字 "家" 的 unicode 相同，然后 .icon-home 使用此图标字体且内容为 "家" 时就会显示相应的图标。

其它略。

### 8.6 文本控制

text-indent: 已脱离使用初衷，目前一般用于隐藏文字 (既然要隐藏，干嘛要写在 DOM 里，是因为为了增强 SEO)

一个巧妙的用法，首行突出，从第二行开始缩进。

```
p {
  text-indent: -3em;
  padding-left: 3em;
}
```

妙！

其它一些注意事项，略。

letter-spacing: 字符之间的距离，可以为负值，可以利用负值解决一些排版，及生成一些奇妙用法，比如文字依次飞入 (使用动画改变 letter-spacing)

word-spacing: 设置空格的间隙宽度 (也可以理解为它的本意，单词之间的空隙)

"word-break: break-all" 和 "word-wrap: break-word" 的区别：前者换行简单粗暴，比如会把一个 url 中间拦腰截断，但后者不会，后者会在 url 之前或之后换行。

"white-space: normal/pre/nowrap/pre-wrap/pre-line"，处理元素中的空格，应用广泛，详略。

"text-align: justify" 文本两端对齐，前提是要有多行，因为多行两端对齐才有意义嘛。

"text-decoration"，解决下划线和文本重叠的问题，使用 border-bottom 替代 "text-decoration: underline"。删除线可以使用 `<del>` 标签，而不是 span 加上 "text-decoration: line-through"。

"text-transform: uppercase / lowercase"

### 8.7 了解 :first-letter / :first-line 伪元素

挺多注意事项的，详细。

## 第 9 章 - 元素的装饰与美化

主要是讲 color 和 background，详略，遇到问题再看。

## 第 10 章 - 元素的显示与隐藏

详略。

## 第 11 章 - 用户界面样式

和 border 形似的 outline。outline 属性和 border 类似，但不能设置单个方向，它完全不占据空间，所以不会影响布局，有很多妙用。比如：

1. 头像裁剪遮罩镂空
1. 自动填满屏幕剩余空间

cursor，光标，具有很多很多属性值，支持自定义光标，详略。

## 第 12 章 - 流向的改变

direction / unicode-bidi / writing-mode 平时用得不多，先跳过。
