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
