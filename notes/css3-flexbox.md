# CSS3

学习资源：

1. [CSS3 FlexBox](http://www.runoob.com/css3/css3-flexbox.html)
1. [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
1. [学习 CSS 布局](http://zh.learnlayout.com/flexbox.html)

## CSS3 弹性盒子 (FlexBox)

相关的属性：

属性             | 说明
----------------|--------------------
display         | 指定 HTML 元素盒子类型，flex-box 的值为 "flex"
flex-direction  | 指定了弹性容器中子元素的排列方式 (其实是指定主轴的方向)
justify-content | 设置弹性盒子元素在主轴方向上的对齐方式
align-items     | 设置弹性盒子元素在侧轴方向上的对齐方式
align-self      | 在弹性子元素上使用，覆盖容器的 align-items 属性
flex-wrap       | 设置弹性盒子的子元素超出父容器时是否换行
align-content   | 修改 flex-wrap 属性的行为，类似 align-items，但不是设置子元素对齐，而是设置行对齐
flex-flow       | flex-direction 和 flex-wrap 的简写
order           | 设置弹性盒子的子元素排列顺序
flex            | 设置弹性盒子的子元素如何分配空间，flex-grow flex-shrink flex-basis 的汇总简写属性

在设置为 flex-box 布局的元素中，传统的布局失效了，块元素和行内元素不再有意义。设置为 flex-box 布局的元素，只会影响到此元素和它的所有子元素，不会影响它之外的元素。

其中 6 个是设置在容器元素上：

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

剩余 6 个是作用是设置在子元素上：

- order
- align-self
- flex-grow
- flex-shrink
- flex-basis
- flex

**主轴与侧轴**

暂略，在别的笔记中有解释。

**flex-direction**

指定主轴的方向。

四个值：

- row
- row-reverse
- column
- column-reverse

每个值的意义顾名思义，不多做解释。

**justify-content**

设置元素在主轴方向上的对齐方式。

值：

- flex-start
- flex-end
- center
- space-between
- space-around

**align-items**

设置元素在侧轴方向上的对齐方式。

值：

- flex-start
- flex-end
- center
- baseline
- stretch - 充满整个侧轴空间

对于子元素来说，其父元素的 align-items 的值可以被自身的 aligh-self 的值所覆盖。align-items 作用在容器元素，其指定的排列方式是针对它里面的子元素，其中的子元素可以通过指定自身的 align-self 属性来覆盖父元素的作用。

**flex-wrap**

指定子元素换行方式。

值：

- nowrap - 默认值，弹性容器为单行，该情况下子元素可能会溢出容器
- wrap - 弹性容器为多行，溢出的子元素会被放置到新行，且新行在原来行的下面
- wrap-reverse - 同 wrap，但如果发生换行，新行在原来行的上面

**align-content**

经过实践后，我的理解是，align-content 只有在子元素换行后才有作用，也就是它有几个前提条件：

- flex-wrap: wrap
- 子元素溢出并发生换行

这时，子元素有了多行，则 align-content 就是用来描述这些多行的对齐方式，是靠顶对齐，还是靠底对齐，还是居中对齐。

当 align-content 生效时，align-items 的值失效，相当于 align-content 具有更高优先高。

比如下面这个例子：

    <head>
      <style>
        .flex-container {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          align-content: flex-end;
          width: 400px;
          height: 300px;
          background-color: lightgrey;
        }
        .flex-item {
          background-color: cornflowerblue;
          width: 100px;
          height: 100px;
          margin: 10px;
        }
      </style>
    </head>

    <body>
      <div class="flex-container">
        <div class="flex-item">flex item 1</div>
        <div class="flex-item">flex item 2</div>
        <div class="flex-item">flex item 3</div>
      </div>
    </body>

当子元素没有发生换行时，align-items 是生效的，此时它们靠顶端对齐。

![](../art/css3-flexbox-align-content-1.png)

然后我们把父容器的宽度缩小为 300px，让子元素发生换行，这时，align-content 开始生效，子元素变成靠底端对齐。

    .flex-container {
      ...
      width: 300px;
    }

![](../art/css3-flexbox-align-content-2.png)

align-content 的值，和 align-items 的值基本相同：

- stretch - 默认，各行将会伸展以占用剩余的空间
- flex-start - 各行向弹性盒容器的起始位置堆叠
- flex-end - 各行向弹性盒容器的结束位置堆叠
- center - 各行向弹性盒容器的中间位置堆叠
- space-between - 各行在弹性盒容器中平均分布
- space-around - 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半

在 [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) 中总结 align-content 属性的作用是，定义多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。就是说，如果只有一根轴线 (没有换行产生)，align-content 是不起作用的，这时起作用的是 align-items，如果有多根轴 (即产生换行)，align-content 起作用，align-items 不起作用。

**order**

可以通过数值重新指定元素在父元素中的顺序，数值小的排在前面。类似 z-index 属性啦，详略。

**flex**

语法：

    flex: flex-grow flex-shrink flex-basis

- flex-grow - 定义弹性盒子元素的扩展比率
- flex-shrink - 定义弹性盒子元素的收缩比率
- flex-basis - 定义弹性盒子元素的默认基准值

该属性的默认值是 "0 1 auto"，另外有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

**flex-grow**

flex-grow 属性定义项目的放大比例，默认为 0，即如果存在**剩余空间**，也不放大。可以差不多理解成 Android 中的 `layout_weight`，但这里针对的是剩余空间。

如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间 (如果有的话)。如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

**flex-shrink**

flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 flex-shrink 属性为0，其他项目都为 1，则空间不足时，前者不缩小。

注意，flex-shrink 跟剩余空间无关，本来空间就不够，哪还有剩余空间啊。

**flex-basis**

flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。

它可以设为跟 width 或 height 属性一样的值 (比如 350px)，则项目将占据固定空间。

这篇文章对 flex-grow 与 flex-shrink 解释得比较详细：

- [详解 flex-grow 与 flex-shrink](https://github.com/xieranmaya/blog/issues/9)
