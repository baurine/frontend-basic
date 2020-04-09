# CSS Misc

## position:sticky

Refs:

- [杀了个回马枪，还是说说 position:sticky 吧](https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/)
- [CSS Position Sticky - How It Really Works!](https://medium.com/@elad/css-position-sticky-how-it-really-works-54cd01dc2d46)

很酷的用法，不仅可以 sticky 在顶部，还可以 sticky 在底部。是 `position:relative` 和 `postion:fixed` 的结合体。

声明为 `position:sticky` 的元素，同时要和 top/bottom 属性配合使用，和 `position:absolute` 一样。

sticky 在顶部：

```css
.sticky-item {
  position: sticky;
  top: 0; // 不一定要是 0 值，其它值也可以，比如 10px
}
```

sticky 在底部：

```css
.sticky-item {
  position: sticky;
  bottom: 0; // 不一定要是 0 值，其它值也可以，比如 10px
}
```

sticky 的元素，其 sticky 的参考系是它的父容器，和 position:fixed 它的参考系是整个 viewport 不一样。

在同一个父容器中的多个 sticky 元素，前面 sticky 的元素被后面到来的 sticky 元素挤出去。

## word-break / word-wrap (overflow-wrap) / white-space / text-overflow / overflow

如果对一个 block 容器 (如 div) 限定宽度，然后在里面填充超过其宽度的文字内容，则默认情况下，这些文字会进行换行。而 word-break 和 word-wrap (后面改成了 overflow-wrap) 这两个属性则是用来控制如何换行的，前者更简单粗暴，比如会在 url 中间进行换行，而后者更智能一点，它在 url 之前或之后事进行换行。

如果要实现 ellipsis 的效果，即只显示一行，超过宽度的内容用 `...` 显示，则需要借助 white-space 的帮助。

white-space 从名字上看是控制如何处理空白字符，比如空格，制表符，换行符。默认情况下 html 会合并多个换行符和空白字符，则 white-space 可以控制保留不合并这些空白字符。用于显示代码时必须这些操作。一般使用 pre-wrap 属性值。

white-space 也可以设置不换行，只显示成一行，使用 nowrap 属性值。但这时超出容器的内容还是会显示，并显示在容器之外，这时我们要对容器加上 `overflow: hidden;`，让超出容器的内容不显示。但这时超出的内容被简单的截断了，我们使用 `text-overflow: ellipsis;` 对超出的内容用 `...` 表示。

```css
.ellipsis-content {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

## pre / code

- [HTML pre 和 code 的作用和用法](https://www.jianshu.com/p/99efe7eaf9a8)
- [HTML pre 和 code 的详解](https://www.jianshu.com/p/61c0af018ed0)

pre 元素可定义预格式化的文本。被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。

(pre 标签意思是 preformatted text)

code 在语义上表示里面包含的内容为计算机源代码，它通常只将内容变成等宽字体，但不会保留空格和换行符。

(如果只是希望使用等宽字体，但内容在语义上并不是计算机源代码，可以使用 `<tt>` tag。)

可以对比下面代码的效果：

```
<pre>
  hello
  world
</pre>
<code>
  hello
  world
</code>
```

效果如下：

```
  hello
  world
hello world
```

所以总结一下就是，code 在语义上表示源代码，一般用它来显示单行代码。

pre 在语义上并没有特别含义，它用来显示一大段需要保留格式的预置文本内容，如果内容为非代码，则单独使用 pre，如果内部内容为源代码，但 pre 可以和 code 配合使用，如下所示：

```html
<pre>
  <code>
  ...
  </code>
</pre>
```

用 pre 和保留格式，用 code 来在语义上表示为源代码。

另外，为什么一般大家都在 pre 中配合 code 使用，因为在页面上对这部分代码内容进行语法高亮时，额外添加的的类名一般都是作用在 code 标签上的，比如：

```html
<pre>
  <code class="hljs bash" lang="bash">
  ...
  </code>
</pre>
```

当然，有些语法高亮库也会同时把 class 加到 pre 上。
