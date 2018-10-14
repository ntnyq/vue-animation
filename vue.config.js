module.exports = {

  baseUrl: './',

  css: {
    loaderOptions: {
      sass: {
        // data: '@import "@/scss/core/style";'
      }
    }
  },

  devServer: {
    open: true
  },

  chainWebpack: config => {

    config.resolve.extensions // Add resolve postfix
      .store.add('.scss');
  }
};
