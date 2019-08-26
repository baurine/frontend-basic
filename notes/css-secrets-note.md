# 《CSS 揭秘》 (CSS Secrets 2016) 笔记

## 第一章 - 引言

从 css3 开始拆成模块：

- CSS 语法(http://w3.org/TR/css-syntax-3)
- CSS 层叠与继承(http://w3.org/TR/css-cascade-3)
- CSS 颜色(http://w3.org/TR/css3-color)
- 选择符(http://w3.org/TR/selectors)
- CSS 背景与边框(http://w3.org/TR/css3-background) 
- CSS 值与单位(http://w3.org/TR/css-values-3)
- CSS 文本排版(http://w3.org/TR/css-text-3)
- CSS 文本装饰效果(http://w3.org/TR/css-text-decor-3)
- CSS 字体(http://w3.org/TR/css3-fonts)
- CSS 基本 UI 特性(http://w3.org/TR/css3-ui)

从 css3 开始才有的新模块：

- CSS 变形(http://w3.org/TR/css-transforms-1)
- 图像混合效果(http://w3.org/TR/compositing-1) 
- 滤镜效果(http://w3.org/TR/filter-effects-1)
- CSS 遮罩(http://w3.org/TR/css-masking-1)
- CSS 伸缩盒布局(http://w3.org/TR/css-flexbox-1) 
- CSS 网格布局(http://w3.org/TR/css-grid-1)

> 最近，浏览器厂商已经很少以前缀的方式来实验性地实现新特性了。(really?)

currentColor，与当前 color 相同的值。

继承 inherit。

关于响应式的一些建议，可以帮助避免媒体查询：

- 使用百分比替代固定长度
- 需要在较大分辨率下获得固定宽度时，使用 max-width 而不是 width
- 为 img/video 等替换元素设置一个 "max-width: 100%;"
- ...

## 第 2 章 - 背景与边框

### 1 半透明边框

background 默认会延伸到 border 区域，使用 "background-clip: padding-box;" 会把背景裁剪在 padding-box 内。

### 2 多重边框

box-shadow 可以有多个值，用逗号分隔。

...剩余内容略，此书是一些技巧的总结，遇到需求时再回头看吧。比如 "自定义复选框"，"打字动画"...
