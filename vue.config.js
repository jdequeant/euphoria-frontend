const BundleAnalyzerPlugin = require('vue-cli-plugin-webpack-bundle-analyzer')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => options)
      .end()
      .rule('babel')
      .test(/\.js?$/)
      .use('babel-loader')
        .loader('babel-loader')
      .end()
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  devServer: {
    watchOptions: {
      poll: true
    }
  },
  publicPath: './'
};
