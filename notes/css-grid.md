# CSS Grid

(只作简单了解，目前还没有成为主流。)

学习资源：

1. [带你入门 CSS Grid 布局](https://zhuanlan.zhihu.com/p/26757425)
1. [学习 CSS Grid](https://www.w3cplus.com/css/learncssgrid.html)
1. [CSS Grid 布局浅谈](https://dsb123dsb.github.io/2017/05/04/CSS-Grid%E5%B8%83%E5%B1%80%E6%B5%85%E8%B0%88/)
1. [CSS Grid 布局指南](http://blog.csdn.net/ceshi986745/article/details/51733383)

看了上面几篇文章，大致明白了 css grid 的理念。

css grid 布局的理念是，首先在一个容器元素上，用 `grid-template-rows`、`grid-template-columns` 等一些属性，把这个容器规划出几行、几列的区域来，设定区域间的间隔，区域间的排列方式等。有些区域大，有些区域小。区域大的可能是因为这一行或列的宽度或高度就比别人大，或者它占据了多行或多列，这个是很灵活的。

注意，很重要的一点，这只是规划，以便将来子元素可以对号入座，实际子元素的个数，可多可少。子元素少了，那多余的区域就空在那，子元素多了，那多个子元素是可以占据同一片区域的，产生层叠的效果。

排列子元素时，因为每个区域都编好了号，可以方便地把子元素放到指定的区域内，而不是只能按顺序排列。

这跟我们建房子是一样的，建房子前，先要画好蓝图，在地上规划好每一片区域建什么。划分好 A 区，B 区，这里建 1 号楼，那里建 2 号楼。

和 FlexBox 相比，FlexBox 容器内，子元素要么排列成一行，要么排列成一列，所以它的布局是一维的，而 css grid，它控制容器内的元素排列成多行和多列，因此它的布局是二维的，比 FlexBox 灵活和强大。(但也有点过度设计的感觉)

css grid 也吸收了 FlexBox 的一些思想，比如它里面也有 `justify-content`, `align-items` `align-self` 这类属性，相应的值也一样。

但 css grid 并不是用来取代 FlexBox 的 (我认为)，它是传统布局和 FlexBox 的一种补充。正如我们在 Android 中，可以同时使用 LinearLayout, RelativeLayout, FrameLayout ... 等各种丰富的布局，现如今在 css 中，我们也可以在不同的容器中使用不同的布局，视我们的需求而定。
