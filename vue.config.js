const path = require('path')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDev ? '/' : './',
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 144
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('pages', resolve('src/pages'))
      .set('utils', resolve('src/utils'))
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use(['pug-plain-loader'])
      .loader('pug-plain-loader')
      .end()
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/serve': {
        target: 'https://api.biexchange.shop/api/1.0/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/serve': ''
        }
      }
    }
  }
}

function resolve (dir) {
  return path.resolve(__dirname, dir)
}
