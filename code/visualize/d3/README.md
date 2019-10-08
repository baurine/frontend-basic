# D3 Study

D3.js，类似 SVG 中的 jQuery，同样拥有强大的选择器，链式调用。(D3.js 也可用于普通的 HTML DOM)

## D3.js 的 v5 版本入门教程

- [D3.js 的 v5 版本入门教程](https://blog.csdn.net/qq_34414916/article/category/7608878)

目录：

- 第一章 — 如何在项目中使用 D3.js
- 第二章 — 第一个程序 Hello World
- 第三章 — 选择元素和绑定数据
- 第四章 — 理解 Update、Enter、Exit
- 第五章 — 选择、插入、删除元素
- 第六章 — 做一个简单的图表
- 第七章 — 比例尺的使用
- 第八章 — 坐标轴
- 第九章 — 完整的柱状图
- 第十章 — 让图表动起来
- 第十一章 — 交互式操作
- 第十二章 — D3.js 中各种精美的图形
- 第十三章 — 饼状图
- 第十四章 — 力导向图
- 第十五章 — 树状图
- 第十六章 — 中国地图

### 第一章 - 如何在项目中使用 D3.js

在 head 中导入 d3.v5.min.js

```html
<script src="http://d3js.org/d3.v5.min.js"></script>
```

### 第二章 — 第一个程序 Hello World

略。

```js
var p = d3.select('body').selectAll('p')
p.text('hello world').style('color', 'red')
```

- text() - 设置文本
- style() - 设置样式

### 第三章 — 选择元素和绑定数据

选择元素：

- select() - 选择符合条件的第一个元素
- selectAll() - 选择符合条件的所有元素

绑定数据：

- datum() - 将一个数据绑定到所有选择集上
- data() - 将一个数组绑定到选择集上，数组元素和选择集元素一一对应关系

### 第四章 — 理解 Update、Enter、Exit

在使用 data() 方法将数组和选择集进行绑定时，存在两者长度不匹配的情况。

- 长度的交集部分称为 update
- 如果数组长度大于选择集长度，D3 可以创建新的 DOM 元素来和数组剩余数据进行匹配，这部分称为 Enter
- 如果数组长度小于选择集长度，那么有一些 DOM 元素就没有数据与之匹配，这部分称为 Exit

通过，对于 Enter 部分，我们选择使用 append() 方法来填充 DOM 元素，对于 Exit 部分，我们选择 remove() 方法来移除多余的 DOM 元素。

示例图：

![](./d3-update-enter-exit.png)

update 和 enter 示例代码：

```html
<body>
  <p>dog</p>
  <p>cat</p>
  <p>pig</p>

  <script>
    var dataset = [3, 6, 9, 12, 15]
    var p = d3.select('body').selectAll('p')
    var update = p.data(dataset) // 绑定数据, 并得到 update 部分
    var enter = update.enter() // 得到 enter 部分
    // 下面检验是否真的得到
    // 对于 update 的处理
    update.text(function(d, i) {
      return 'update:' + d + ',index:' + i
    })
    // 对于 enter 的处理
    // 注意，这里需要先添加足够多的 <p>，然后在添加文本
    var pEnter = enter.append('p') // 添加足够多的 <p>
    pEnter.text(function(d, i) {
      return 'enter: ' + d + ',index: ' + i
    })
  </script>
</body>
```

update 和 exit 示例代码：

```html
<body>
  <p>dog</p>
  <p>cat</p>
  <p>pig</p>
  <p>rat</p>

  <script>
    var dataset = [3, 6]
    var p = d3.select('body').selectAll('p')
    var update = p.data(dataset) // 绑定数据, 并得到 update 部分
    var exit = update.exit() // 得到 exit 部分
    // 下面检验是否真的得到
    // 对于 update 的处理
    update.text(function(d, i) {
      return 'update:' + d + ',index:' + i
    })
    // 对于 exit 的处理通常是删除 ，但在这里我并没有这么做
    exit.text(function(d, i) {
      return 'exit'
    })
  </script>
</body>
```

### 第五章 — 选择、插入、删除元素

- 选择
  - select()
  - selectAll()
- 插入
  - append() - 在父元素中插入子元素
  - insert() - 在兄弟元素前面插入元素
- 删除
  - remove()

### 第六章 — 做一个简单的图表

在 svg 上用 rect 画矩形，设置它的 x, y, width, height, fill 属性。

核心代码：

```html
<body>
  <svg width="960" height="600"></svg>
  <script>
    var margin = { top: 60, right: 60, bottom: 60, left: 60 }
    var dataset = [250, 210, 170, 130, 90]

    var svg = d3.select('svg')
    var g = svg
      .append('g')
      .attr('transform', `translate(${margin.top}, ${margin.left})`)

    var rectHeight = 30
    g.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', 20)
      .attr('y', function(d, i) {
        return i * rectHeight
      })
      .attr('width', function(d, i) {
        return d
      })
      .attr('height', function(d, i) {
        return rectHeight - 5
      })
      .attr('fill', 'blue')
  </script>
</body>
```

`g.selectAll('rect').data(dataset).enter().append('rect')` 在第四章已经解释了，这里表示填充不足的 rect 元素。(不过我表示好奇，如果 selectAll 和 append 的元素类型不相同会怎么样，待试验。- 经过测试发现也是可以的，也不会报 warning)

绘制图表，主要就是设置好坐标系，必要时还需要设置坐标系的比例，然后设置好各个形状的尺寸。

### 第七章 — 比例尺的使用

两种比例尺：

- 线性比例尺 - d3.scaleLinear()，按比例
- 序数比例尺 - d3.scaleOrdinal()，一一对应，有点枚举的意思

使用示例：

```js
// scaleLinear
var dataset = [1.2, 2.3, 0.9, 1.5, 3.3]
var min = d3.min(dataset)
var max = d3.max(dataset)
var scaleLinear = d3
  .scaleLinear()
  .domain([min, max])
  .range([0, 300])
document.write('scaleLinear(0.9): ', scaleLinear(0.9)) // output: 0
document.write('scaleLinear(3.3): ', scaleLinear(3.3)) // output: 300

// scaleOrdinal
var index = [0, 1, 2, 3, 4]
var color = ['red', 'blue', 'yellow', 'black', 'green']
var scaleOrdinal = d3
  .scaleOrdinal()
  .domain(index)
  .range(color)
document.write('scaleOrdinal(1) 输出：' + scaleOrdinal(1)) // blue
```

### 第八章 — 坐标轴

D3 中没有现成的坐标轴图形，需要我们自己用其他组件拼凑而成。D3 中提供了坐标轴组件，使得我们在 SVG 中绘制一个坐标轴变得像添加一个普通元素那样简单。

关键函数：call()。首先利用 D3 提供的坐标轴函数构造出一个坐标轴，然后选择 SVG DOM 元素，在 DOM 元素上调用 call(axis)。

在第六章的简单柱状图基础上加上一个 x 轴，示例代码：

```js
// 定义一个坐标轴 - x 轴
var xAxis = d3.axisBottom(scaleLinear).ticks(7)
// 将 x 轴添加到 <g> 中
g.append('g')
  .attr('transform', `translate(20, ${dataset.length * rectHeight})`)
  .call(xAxis)
```

我发现 SVG 中的这个 `<g>` 标签有点类似 html 中的 `<div>` 标签。

### 第九章 — 完整的柱状图

一个完整的柱状图，包括 x 轴，y 轴，柱状，文字。

相比第八章需要多使用两个 API:

- d3.scaleBand() - 也算序数比例尺的一种
- d3.rangeRound() - 返回一个等差数列

关于 D3 中常用的比例尺，可以参看这篇文章 - [D3 中常用的比例尺](https://segmentfault.com/a/1190000011006780)

示例：

```js
var xScale = d3
  .scaleBand()
  .domain(d3.range(dataset.length))
  .rangeRound([0, width - margin.left - margin.right])
var xAxis = d3.axisBottom(xScale)

// x 轴
g.append('g')
  .attr('transform', `translate(0, ${height - margin.top - margin.bottom})`)
  .call(xAxis)
```

### 第十章 — 让图表动起来

给 SVG 添加动画。动画的套路都是这样：

1. 设置初始状态及结束状态
1. 设置动画持续时间 (duration) 及开始时间 (delay)
1. 设置时间变换曲线 (ease)
1. 设置重复次数或者是否反转

D3 中相关的 API:

- `.attr(xxx).transition().attr(yyy)` - 使用 transition() 添加过渡动画，从 xxx 状态过渡到 yyy
- `.duration(2000)` - 动画持续时间
- `.delay(500)` - 动画开始时间，这里表示延迟 0.5s 后开始
- `.ease(d3.easeElasticInOut)` - 过渡方式，即时间变换曲线

给第九章中的柱状矩形添加动画，示例代码如下，对 y 和 height 属性进行了过渡动画：

```js
// bar
var rectPadding = 20
gs.append('rect')
  .attr('x', function(d, i) {
    return xScale(i) + rectPadding / 2
  })
  .attr('y', function(d, i) {
    // 初始状态
    var min = yScale.domain()[0]
    return yScale(min)
  })
  .attr('width', function(d, i) {
    return xScale.step() - rectPadding
  })
  .attr('height', function(d, i) {
    // 初始状态
    return 0
  })
  .attr('fill', 'blue')
  .transition()
  .duration(2000)
  .delay(function(d, i) {
    return i * 400
  })
  // .ease(d3.easeElasticInOut)
  .attr('y', function(d, i) {
    // 回到最终状态
    return yScale(d)
  })
  .attr('height', function(d, i) {
    // 回到最终状态
    return height - margin.top - margin.bottom - yScale(d)
  })
```

(写法有点啰嗦啊...)

### 第十一章 — 交互式操作

和 HTML DOM 处理交互事件一样的方法，使用 `on(eventType, handler)`。事件类型也和 DOM 一样：click, dbclick, mouseover, mouseout, mousemove, mousedown, mouseup ...

为柱状图添加鼠标滑过的事件处理：

```js
gs.append('rect')
  .attr('x', function(d, i) {
    return xScale(i) + rectPadding / 2
  })
  .attr('y', function(d, i) {
    return yScale(d)
  })
  .attr('width', function(d, i) {
    return xScale.step() - rectPadding
  })
  .attr('height', function(d, i) {
    return height - margin.top - margin.bottom - yScale(d)
  })
  .attr('fill', 'blue')
  .on('mouseover', function() {
    d3.select(this)
      .transition()
      .duration(1000)
      .attr('fill', 'yellow')
  })
  .on('mouseout', function() {
    d3.select(this)
      .transition()
      .duration(1000)
      .delay(1000)
      .attr('fill', 'blue')
  })
```

当鼠标滑过当前 rect 时，将填充颜色过渡为 yellow，滑出后再过渡回 blue。

### 第十二章 — D3.js 中各种精美的图形

D3 提供了一些制作常见图形的函数。D3 中一些常见的图形：

- bubble chart
- packing chart
- bundling chart
- force chart
- chord chart
- pie chart
- tree chart
- map chart

### 第十三章 — 饼状图

绘制饼状图所需 API：

- d3.arc().innerRadius(radius).outerRadiu(radius) - 弧形生成器
- d3.pie(dataset) - 将原始数组生成绘制饼状图所需数组，用于和 SVG 元素进行绑定
- d3.arc().centroid() - 弧形中心位置，用来绘制文本时所需坐标的方法
- d3.schemeCategory10 - 颜色

具体代码见示例。

### 第十四章 — 力导向图

绘制力导向图所需的 API：

- d3.forceSimulation() - 新建一个力导向图
- d3.forceSimulation().force() - 添加或移除一个力
- d3.forceSimulation().nodes() - 对输入的数组进行一定的数据转换
- d3.forceLink().links() - 输入也是一个数组 (边集)，对这个输入的边集进行转换
- tick() - ??
- d3.drag() - 力导向图可以被拖动

暂时不是很理解，需要时再仔细看。

### 第十五章 — 树状图

先跳过，需要时再消化。需要了解许多新的 API。

### 第十六章 — 中国地图
