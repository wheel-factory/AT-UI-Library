module.exports = {
  outputDir: 'demo',
  pages: {
    examples: {
      entry: 'examples/main.js',
      template: 'examples/index.html',
      filename: 'index.html',
    },
  },
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
          @import '@/styles/_variables.scss';
          @import '@/styles/_mixins.scss';
        `,
      },
    },
  },
};
