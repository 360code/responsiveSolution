###响应式解决方案-行业兴趣小组
==================
​
####思路：
-----------------

1> 对不支持mediequery的浏览器的兼容处理。

  a.初次访问，通过js判断浏览器是否支持mediequery，如果不支持的话则判断窗口尺寸，然后根据当前990-1190-1390的3种尺寸标准，在HTML标签上写入区别当前尺寸的class，同时写入当前匹配屏幕尺寸值的cookie。

  b.再次访问，后台通过读取cookie，获取到用户浏览器当前尺寸，在HTML标签上设置对应的class。 通过样式继承，实现适合当前浏览器的页面渲染。

​  c.再次访问并且用户尺寸发生变化，即（用户多窗口打开页面，各窗口尺寸不一致，导致cookie值与当前窗口尺寸不一致）。JS通过cookie值与当前的HTML标签class进行对比，如果不一致，则js按当前屏幕尺寸更新页面html标签class，同时更新cookie值。

​2>更好的兼容响应式设计。

  合适的栅格系统+后台编译css，支持页面的响应式。

​3>页面上由于尺寸太小导致隐藏的内容处理。

  对于页面内容，比较重要的信息，比如offer楼层，隐藏掉的元素通过js添加交互效果、“显示更多”的点击区块进行切换，详见demo：http://ali-062323w.hz.ali.com/media/demo1.htm。

​  

####细节：  
-----------------
  (1)如何编写兼容浏览器的css。    
  通过less预编译css，统一写法风格，降低门槛和维护成本。       
  命名规范：990 1190 1390三个尺寸对应：max1024 max1280 max1440      
  详见：https://gist.github.com/swaydeng/6265843    
  (2)如何判断浏览器是否兼容mediaquery   
  采用modernizr.js对页面是否支持mediaquery进行判断，并在html标签上打上标签。感兴趣的同学可以移步：https://github.com/360code/modernizr 这里有详细的源码分析。   
  (3)media-queries.js 或 respond.js 对比分析    
  respond.js：快速、轻量，用于为 IE6-8 以及其它不支持 CSS3 Media Queries 的浏览器提供媒体查询的 min-width 和 max-width 特性,支持跨域；css3-mediaqueries.js：对CSS3 Media Queries属性的支持比较全面。    
  我们的建议：考虑到目前我们主要是用于PC端屏幕尺寸990-1190-1390响应，并且基于正常真实用户在打开页面以后很少去缩放窗口尺寸，IE6-8版本浏览器仅用于初始化的显示状态，不做缩放下的resize事件。故果断放弃了对不支持mediequery浏览器的过度处理，只做临界点的处理。当然某些特殊页面，也可以考虑用这种现成方案来达到效果。    
  (4)服务端如何“打标”   
  基于node模块实现。详见：https://github.com/360code/responsiveSolution/blob/master/webResponse.js    
​  (5)中文站浏览器相关数据    
 科普:IE6-8占比达到51.24%，呈逐步下降的趋势。排名靠前的浏览器尺寸为：1366*768 1440*900 1024*768 1280*800。详细数据：http://idata.alibaba-inc.com/links/bieeDetailLinks.htm?id=5661&type=0&code=R    

Demo预览地址猛戳：http://ali-062323w.hz.ali.com/media/demo1.htm   




