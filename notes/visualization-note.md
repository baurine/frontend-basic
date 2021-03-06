# 数据可视化

web 上提供了三种数据可视化的方法：

- Flash/SilverLight (dead)
- SVG (Scalable Vector Graphic)
- Canvas
- WebGL

svg 和 canvas 用于 2D 绘图，各有千秋，但用于数据可视化的话可能还是 svg 用得多一些，canvas 多用于 H5 小游戏。

svg 是使用和 html 相似的声明式标签 (所以它也是一种标记语言) 来展示图，绘制的是矢量图。常用的库是 d3.js (本来 svg 是声明式的，但使用 d3.js 来操作 svg 中的 DOM 后，又变成命令式了...)，以及其它各种封装的用来操作 svg 的显示统计图的 js 库，比如 highcharts (商业版需付费)，echarts (出自百度，也支持 canvas) ...

svg 可以很方便的和 JS DOM API 以及 css 交互，可以使用 DOM API 选择 svg 中的节点，可以给 svg 节点绑定事件，设置 css class。

正因为 svg 和 html 本质是一样的，所以，正如你只有用浏览器才能看 .html 文件的内容一样，虽然 svg 也可以保存到单独的 .svg 文件中，但它本质还是一个文本文件，所以只能在浏览览器中被解析查看，而不像 .png 那样是二进制文件。

canvas 需要自己手动写 js 调用 canvas 的各种 2D 绘图 API，明显是命令式的。其各种绘图 API 和 android/iOS 上的绘图，windows 上的 GDI 绘图都大同小异，其实只要是绘制 2D 图，其概念和 API 都差不多是相同的。在 canvas 上绘制出来的位图，放大会失真。

canvas 取代 flash 成为 H5 小游戏的解决方案，比如 cocos2d，白鹭等各种 2D 引擎。也有一些数据可视化库底层采用 canvas 而不是 svg，svg 超过 1000 个节点时，性能会急剧下降，这种情况下，用 canvas 会好一些。百度的 echarts 库一开始是采用 canvas 实现的，但后来也支持了 svg。

WebGL 是用来在实现 3D 绘图的，比较复杂，需要一些专业的知识，常用的库是 Three.js。

分类笔记：

- [Canvas 及动画](../code/visualize/canvas-and-animation/README.md)
- [SVG 及动画](../code/visualize/svg-and-animation/README.md)
- [D3.js 学习笔记](../code/visualize/d3/README.md)

其它资源：

- [AntV 文档](https://www.yuque.com/antv)
  - G2 - 用于绘制日常最常见的各种统计图表，比如柱状图，折线图，饼图等，基于 G2 封装有 BizCharts 库，viser 库
  - G6 - 专注于绘制各种拓扑图，比如流程图，思维导图
  - F2 - 用于移动端，可以看作是 G2 的 mobile 版
  - L7 - 专注于绘制各种地理空间图表，比如中国地图，地球，一般会用来显示基本地理空间的热力图
- [AntV、G2 和 BizCharts 介绍](https://github.com/AnHongpeng/blog/issues/4)
- [三大图表库：ECharts、BizCharts 和 G2，该如何选择？](https://juejin.im/post/5ba348475188255c70399e1a)
