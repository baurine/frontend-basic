# Canvas 及动画

掘金小册[《如何使用 Canvas 制作出炫酷的网页背景特效》](https://juejin.im/book/5a0ab8e2f265da43111fbab2)一书的实战。(实话说，这书写得一般... 内容与标题有点不符)

anyway，html 的 canvas 其实并不复杂，和 android / iOS 的绘图相似，其实所有 UI 的绘制都相似，类似的概念和 API，而且 html 里的 canvas API 并不多。

canvas 和 svg 的区别，两者原理和使用场景不太一样，前者是命令式绘制，后者是声明式绘制。

- [选择 Canvas 还是 SVG](https://www.yuque.com/antv/g2-docs/tutorial-renderers)

在绘制图表这个场景，选择 canvas 和 svg 都可以。在小游戏这个场景，基本只能选择 canvas。

使用 canvas 进行绘制的三步曲：

1. 绘制 path
   - beginPath / closePath
   - moveTo
   - lineTo
   - arc
   - rect
   - ...
2. 设置 style (类似 android / gdi 中设置画笔，比如 lineWith, lineCap, fillStyle, storkeStyle ...)
   - fillStyle
   - strokeStyle
   - lineWidth
   - lineCap
   - shadowColor
   - shadowBlur
   - ...
3. 描边或填充
   - fill
   - stroke
   - ...

其它：渐变 / 位移 / 变形 / 缩放 / 绘制图片 / 绘制文字 ...

上面绘制的是静态内容，如何动起来，其实很简单，就是不停的修改某些属性后重绘，使用函数 requestAnimationFrame(handler) 实现每 16ms 进行一次绘制，实现动画效果。

```javascript
function animate() {
  context.clearRect(0, 0, WIDTH, HEIGHT)
  rounds.forEach(round => round.move())
  requestAnimationFrame(animate)
}
```

和鼠标交互，通过监听 onmousemove 等事件，得到鼠标的坐标值，然后在 canvas 上相应的坐标进行绘制。

```javascript
canvas.onmousemove = function(event) {
  rounds.push({
    mouseX: event.clientX,
    mouseY: event.clientY,
    r: param.r,
    o: 1
  })
}
```

离屏渲染：先创建一个仅在内存中的 canvas 作为缓存，先提前将所有内容绘制在这个内存里的缓存 canvas 上，然后再一次性绘制到用户可见的 canvas 上，提高绘制效率，也能消除一些闪烁。(我记得 GDI 中称这个为双缓冲?)
