# 动画

- Canvas 动画
- CSS 动画
- SVG 动画

相关的库：

- anmiate.css
- GSAP (GreenSock Animation Platform)：TweenMax, TimelineMax, TweenLite, TimelineLite
- anime.js

动画，其实所有平台的动画 API 都大致相同，设置动画的起点和终点状态，包括位置 (translateX/Y)，大小 (scale)、透明度 (opacity)、颜色 (color)、旋转 (rotate) 等等，再设置动画执行的时间长度、延迟时间、动动曲线，及动画执行的次数及是否反转等。中间的变换过程有默认的插值算法 (android 平台可以自己重写插值算法替代默认的插值算法)。

Canvas 动画是通过 requestAnimationFrame(handler) API 不断的重绘实现。

CSS 动画通过 transition 及 animation 和 keyframe/transform 实现。animate.css 帮助定义了很多常用的 keyframe，仅此而已，方便了使用。

SVG 动画可以借助 CSS 动画以及 SMIL 动画实现，以及 js 库 GSAP 和 anime.js。

GSAP 和 anime.js 比较类似，都是通过 js 来修改目标的 style 从而实现动画，底层应该也是借助 requestAnimationFrame(handler) 这个 API，所有通过 js 来实现动画的库，应该都是通过这个 API 直接修改目标的 css style 实现的，而不会去用 setTimeout 这个 API。
