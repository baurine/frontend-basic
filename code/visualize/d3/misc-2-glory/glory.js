d3.csv(
  // 'https://raw.githubusercontent.com/levvsha/d3-in-all-its-glory-en/master/stats/data.csv'
  './misc-glory-data.csv'
).then(data => draw(data))

// function ticks() {
//   console.log(arguments) // [5, callee: f, ...]
//   console.log(Array.prototype.slice.call(arguments))
// }
// ticks(5) // [5]
// ticks(5, 6) // [5,6]
// ticks([5, 6]) // [[5,6]]

function draw(data) {
  // data:
  // [
  //   {regionId: "1", regionName: "Ryazan Oblast", date: "2001-01-01T00:00:00", percent: "26.5000"}
  //   ...
  // ]
  // console.log(data)

  // 准备尺寸
  const outWidth = 750
  const outHeight = 420
  const margin = { top: 20, right: 20, bottom: 50, left: 50 }
  const inWidth = outWidth - margin.left - margin.right
  const inHeight = outHeight - margin.top - margin.bottom

  // 准备 scale
  const x = d3.scaleTime().range([0, inWidth])
  const y = d3.scaleLinear().range([inHeight, 0])
  // color scale
  const colorScale = d3
    .scaleOrdinal()
    .range([
      '#4c78a8',
      '#9ecae9',
      '#f58518',
      '#ffbf79',
      '#54a24b',
      '#88d27a',
      '#b79a20',
      '#439894',
      '#83bcb6',
      '#e45756',
      '#ff9d98',
      '#79706e',
      '#bab0ac',
      '#d67195',
      '#fcbfd2',
      '#b279a2',
      '#9e765f',
      '#d8b5a5'
    ])

  // 处理 data 和 scale
  data.forEach(d => {
    d.date = new Date(d.date)
    d.percent = +d.percent
  })
  x.domain(d3.extent(data, d => d.date)) // d3.extent = (array) => [min, max]
  y.domain([0, d3.max(data, d => d.percent)])
  colorScale.domain(d3.map(data, d => d.regionId).keys())
  // console.log(data);
  // console.log(d3.map(data, d => d.regionId));
  // console.log(d3.map(data, d => d.regionId).keys());

  // svg
  const svg = d3
    .select('.chart')
    .append('svg')
    .attr('width', outWidth)
    .attr('height', outHeight)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`) // 移动到绘图区的起点

  // Step 1 - 绘制坐标轴和网格
  function drawAxes() {
    // 坐标轴由 path/line/text 三种 svg 元素组成
    // path 是轴，line 是与轴垂直的 tick，text 是标签
    // axisBottom 表示默认文字在 path 之下，并不表示是底部的 x 轴
    // axisRight 表示默认文字在 path 右边，并不表示是右边的 y 轴
    // axisTop 表示默认文字在 path 上边
    // axisLeft 表示默认文字在 path 左边
    const xAxis = d3
      .axisBottom(x)
      .ticks(((inWidth + 2) / (inHeight + 2)) * 5) // 这个算出是约为 10，但实际绘出来为什么有 14 个点啊 (http://pkuwwt.github.io/d3-tutorial-cn/axes.html，这篇文章说 ticks() 只是建议，d3 会根据实际情况自行调整)
      .tickSize(-inHeight - 6) // 还可以负数？猜测这个 tickSize 表示 tick 的长度，负值表示往 y 轴上方扩展，形成网格
      .tickPadding(10) // 从源码看，padding 是坐标轴上文字和 path 的距离
    const yAxis = d3
      .axisRight(y) // 为什么是 right 而不是 left，因为 right 并不表示右边的 y 轴，只表示文字默认在右边
      .ticks(5)
      .tickSize(7 + inWidth) // 往 x 轴方向扩展的长度
      .tickPadding(-15 - inWidth) // 文字和竖线的距离，实际 padding: 7 + inWidth -15 - inWidth = -8，源码：spacing = Math.max(tickSizeInner, 0) + tickPadding,
      .tickFormat(d => d + '%')
    // 是否等同，测试了，效果基本一样，甚至还要好一些，文字对齐的更好
    // const yAxis = d3
    //   .axisLeft(y)
    //   .ticks(5)
    //   .tickSize(-7 - inWidth)
    //   .tickPadding(8)
    //   .tickFormat(d => d + '%')
    svg
      .append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', `translate(0, ${inHeight + 6})`) // 将原点移到 (0, inHeight+6 处)
      .call(xAxis)
    svg
      .append('g')
      .attr('class', 'axis y-axis')
      .attr('transform', 'translate(-7, 0)') // 将原点移到 (-7, 0) 处，y 轴方向不变，x 轴往负方向移动 7
      .call(yAxis)
    // 单独绘制两条轴的 path，上面两条轴的 path 在 style 中用 `display: none` 隐藏了
    svg
      .append('g')
      .attr('transform', `translate(0, ${inHeight})`)
      .call(d3.axisBottom(x).ticks(0))
    svg.append('g').call(d3.axisLeft(y).ticks(0))
    // 使用 tickSize(0)，默认并不为 0
    // svg
    //   .append('g')
    //   .attr('transform', `translate(0, ${inHeight})`)
    //   .call(d3.axisBottom(x).ticks(0).tickSize(0))
    // svg.append('g').call(d3.axisLeft(y).ticks(0).tickSize(0))
  }
  drawAxes()

  ////////////////////////////////
  // step 2: draw lines
  // 按 regionId 进行分组，相同 regionId 的元素聚合在一起
  const nestByRegionId = d3
    .nest()
    .key(d => d.regionId)
    .sortKeys((v1, v2) => (parseInt(v1, 10) > parseInt(v2, 10) ? 1 : -1))
    .entries(data)
  // [{key: "1", values: [{regionId: "1", regionName: ..., date: ..., precent: ...}, {regionId: "1", ...} ]}]
  // console.log(nestByRegionId)

  let regions = {}
  // d3.map(data, d => d.regionId)
  //   .keys() // 这个方法去重了?
  //   .forEach(function(d, i) {
  //     regions[d] = nestByRegionId[i].values // 总觉得这逻辑不对啊
  //   })
  // console.log(d3.map(data, d => d.regionId)) // 结果有点意外
  // console.log(d3.map(data, d => d.regionId).keys()) // ["1", "5", "9" ...]
  // console.log(regions) // {1: [...], 5: [...]}
  // const regionIds = Object.keys(regions)
  const regionIds = nestByRegionId.map(item => item.key)
  nestByRegionId.forEach(item => {
    regions[item.key] = {
      data: item.values,
      enabled: true
    }
  })

  // path 生成器
  const lineGenerator = d3
    .line()
    .x(d => x(d.date))
    .y(d => y(d.percent))

  function drawLines(enabledRegionIds) {
    const paths = svg.selectAll('.line').data(enabledRegionIds)
    paths.exit().remove()
    paths
      .enter()
      .append('path')
      .merge(paths) // ??
      .attr('class', 'line')
      .attr('id', regionId => `region-${regionId}`)
      .attr('d', regionId => lineGenerator(regions[regionId].data))
      .style('stroke', regionId => colorScale(regionId))
  }
  drawLines(regionIds)

  /////////////////////////////////////
  // step 3: add legend
  const regionsNamesById = {}
  nestByRegionId.forEach(item => {
    regionsNamesById[item.key] = item.values[0].regionName
  }) // [{1: 'Ryazan Oblast': 5: 'Vladimir Oblast', ...}]

  const legendContainer = d3.select('.legend')
  const legends = legendContainer
    .append('svg')
    .attr('width', 150)
    .attr('height', 353)
    .selectAll('g')
    .data(regionIds)
    .enter()
    .append('g')
    .attr('class', 'legend-item')
    .attr('transform', (_, idx) => `translate(0, ${idx * 20})`)
    .on('click', clickLegendHandler)

  legends
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 12)
    .attr('height', 12)
    .style('fill', regionId => colorScale(regionId))
    .select(function() {
      return this.parentNode
    }) // 切换目标
    .append('text')
    .attr('x', 20)
    .attr('y', 10)
    .text(regionId => regionsNamesById[regionId])
    .attr('class', 'textselected')
    .style('text-anchor', 'start')
    .style('font-size', 12)

  function clickLegendHandler(regionId, _idx) {
    regions[regionId].enabled = !regions[regionId].enabled
    reDrawChart()
  }

  function reDrawChart() {
    const enabledRegionIds = regionIds.filter(
      regionId => regions[regionId].enabled
    )

    drawLines(enabledRegionIds)

    legends.each(function(regionId) {
      const isEnabled = enabledRegionIds.indexOf(regionId) >= 0
      d3.select(this).classed('disabled', !isEnabled)
    })
  }

  ///////////////////////////////////
  // step 3 - 2: add extra options
  const extraOptionsContainer = legendContainer
    .append('div')
    .attr('class', 'extra-options-container')
  extraOptionsContainer
    .append('div')
    .attr('class', 'hide-all-option')
    .text('hide all')
    .on('click', function() {
      regionIds.forEach(regionId => {
        regions[regionId].enabled = false
      })
      reDrawChart()
    })
  extraOptionsContainer
    .append('div')
    .attr('class', 'show-all-option')
    .text('show all')
    .on('click', function() {
      regionIds.forEach(regionId => {
        regions[regionId].enabled = true
      })
      reDrawChart()
    })
}
