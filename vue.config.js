const { defineConfig } = require('@vue/cli-service')
const { VERSIONPATH, VSERSION } = require("./src/common/VERSIONPATH.js");
const glob = require('glob')
const isAmazon = process.env.isAmazon
console.log(isAmazon)
const pages = {}
// 打包压缩静态文件插件
// const CompressionWebpackPlugin = require("compression-webpack-plugin")

// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i; // 开启gzip压缩， 按需写入
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const externals = function () {
  if (IS_PROD) {
    return {
      'vue': 'Vue',
      'vue-router': 'VueRouter'
    }
  } else {
    return {}
  }
}
console.log(process.env.NODE_ENV)
glob.sync('./src/view/*/main.js').forEach(filepath => {
  const fileList = filepath.split('/')
  const fileName = fileList[fileList.length - 2]
  pages[fileName] = {
    entry: `src/view/${fileName}/main.js`,
    // 模板来源
    template: `public/index.html`,
    // 在 dist/index.html 的输出
    filename: `${fileName}.html`
  }
})
module.exports = defineConfig({
  // outputDir: "./dist" + VSERSION,
  transpileDependencies: true,
  lintOnSave: false,
  // filenameHashing: false,
  productionSourceMap: false,
  publicPath: isAmazon ? '/dist/' : '/',
  // publicPath: '/dist/',
  devServer: {
    client: {
      webSocketURL: 'ws://192.168.2.28:8080/',
    },
    proxy: {
      "/": {
        target: "https://app.yeco.live/",
        // target: "http://192.168.2.80:5800/",
        changeOrigin: true,
      },
    },
  },
  css: {
    extract: true
  },
  // chainWebpack: config => {
  //   //生产环境开启js/css压缩
  //   if (IS_PROD) {
  //     config.plugin('CompressionWebpackPlugin').use(new CompressionWebpackPlugin({
  //       test: productionGzipExtensions, // 匹配文件名
  //       threshold: 10240, // 对超过10k的数据压缩
  //       minRatio: 0.8,
  //       deleteOriginalAssets: true // 删除源文件
  //     }))
  //   }
  // },
  chainWebpack (config) {
    config.module.rule("svga")
      .test(/\.svga$/)
      .use("url-loader")
      .loader("url-loader")
    if (IS_PROD) {
      config.optimization.splitChunks({
        cacheGroups: {
          vendors: {//vendor 是导入的 npm 包
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            maxSize: 600000,
            maxInitialRequests: 20,
            priority: 2,
            reuseExistingChunk: true,
            enforce: true
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]js[\\/]/,
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|c|le)ss$/,
            chunks: 'all',
            enforce: true
          }
        }
      })
    }
  },
  configureWebpack: {
    // externals: externals(),
  },
  // chainWebpack: config => {
  //   config.output.filename('js/[name].js').end();
  //   config.output.chunkFilename('js/[name].js').end();
  //   // 修改生产配置
  //   config.plugin('extract-css').tap(args => [{
  //     filename: `css/[name].css`,
  //     chunkFilename: `css/[name].css`
  //   }])
  // },
  pages
})

