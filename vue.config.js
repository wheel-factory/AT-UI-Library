module.exports = {
  outputDir: 'docs',
  pages: {
    examples: {
      entry: 'examples/main.js',
      template: 'examples/index.html',
      filename: 'index.html',
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/AT-UI-Library/' : '/',
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('js')
  //     .include
  //     .add('/packages')
  //     .end()
  //     .use('babel')
  //     .loader('babel-loader')
  //     .tap((options) => options);
  // },
  configureWebpack: {
    devtool: 'source-map',
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/../components/styles/_variables.scss';
          @import '@/../components/styles/_mixins.scss';
        `,
      },
    },
  },
};
