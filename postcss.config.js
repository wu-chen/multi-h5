const pxtoviewport = require('postcss-px-to-viewport')
const postcssSvg = require('postcss-write-svg')

module.exports = {
  plugins: [
    postcssSvg(),
    pxtoviewport({
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数
      propList: ['*'],
      viewportUnit: 'vw', // 指定需要转换成的视窗单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，
      mediaQuery: false, // 允许在媒体查询中转换`px`
      replace: true, // 是否直接更换属性值，而不添加备用属性
      exclude: [], // 忽略某些文件夹下的文件或特定文件
      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 568, // 横屏时使用的视口宽度
      // 该项仅在使用 Circle 组件时需要
      // 原因参见 https://github.com/youzan/vant/issues/1948
      selectorBlackList: ['van-circle__layer', 'van', 'main-memberPay', 'saolei', 'text-box'] // 指定不转换为视窗单位的类，可以自定义
    })
  ]
}
