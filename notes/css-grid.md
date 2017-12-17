# CSS Grid

(只作简单了解，目前还没有成为主流。)

学习资源：

1. [带你入门 CSS Grid 布局](https://zhuanlan.zhihu.com/p/26757425)
1. [学习 CSS Grid](https://www.w3cplus.com/css/learncssgrid.html)
1. [CSS Grid 布局浅谈](https://dsb123dsb.github.io/2017/05/04/CSS-Grid%E5%B8%83%E5%B1%80%E6%B5%85%E8%B0%88/)
1. [CSS Grid 布局指南](http://blog.csdn.net/ceshi986745/article/details/51733383)

看了上面几篇文章，大致明白了 CSS Grid 的理念。

在公司的 Creative Friday 上做了一个简短的分享，这是 Slides 和 Speech:

- [Slides](https://github.com/baurine/cf-shares/blob/master/cf-css-grid/cf-css-grid.md)
- [Speech](https://github.com/baurine/cf-shares/blob/master/cf-css-grid/speech.md)

主要讲了三部分内容：

1. Rows / Columns：使用 `grdi-template-rows`、`grid-template-columns`、`grid-row-gap`、`grid-column-gap`，对容器内的空间规划出多行和多列，以及行列之间的间隔。(如果子元素的个数多于规划的 grids，行会自动扩充。)
1. Item Position：使用 `grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end` (及简化写法 `grid-row`、`grid-column`、`grid-area`) 属性改变子元素的默认位置，支持多个子元素占据同一片区域，也支持一个元素占据多片区域 (即占据多行多列)。
1. Align Items：使用 `justify-items`、`align-items`、`justify-self`、`align-self` 等属性设置容器内子元素或子元素自身的对齐方式。

以下是原来写的内容：

CSS Grid 布局的理念是，首先在一个容器元素上，用 `grid-template-rows`、`grid-template-columns` 等一些属性，把这个容器规划出几行、几列的区域来，设定区域间的间隔，区域间的排列方式等。

排列子元素时，因为每个区域都编好了号，可以方便地把子元素放到指定的区域内，而不是只能按顺序排列。

这跟我们建房子是一样的，建房子前，先要画好蓝图，在地上规划好每一片区域建什么。划分好 A 区，B 区，这里建 1 号楼，那里建 2 号楼。

和 FlexBox 相比，FlexBox 容器内，子元素要么排列成一行，要么排列成一列，所以它的布局是一维的，而 CSS Grid，它控制容器内的元素排列成多行和多列，因此它的布局是二维的，比 FlexBox 灵活和强大。(但也有点过度设计的感觉)

CSS Grid 也吸收了 FlexBox 的一些思想，比如它里面也有 `align-items` `align-self` 这类属性，相应的值也类似。

但 CSS Grid 并不是用来取代 FlexBox 的 (我认为)，它是传统布局和 FlexBox 的一种补充。正如我们在 Android 中，可以同时使用 LinearLayout, RelativeLayout, FrameLayout ... 等各种丰富的布局，现如今在 CSS 中，我们也可以在不同的容器中使用不同的布局，视我们的需求而定。
