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
- 第六章 —做一个简单的图表
- 第七章 — 比例尺的使用
- 第八章 — 坐标轴
- 第九章 —完整的柱状图
- 第十章 —让图表动起来
- 第十一章 —交互式操作
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



