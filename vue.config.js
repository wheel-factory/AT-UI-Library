module.exports = {
  outputDir: 'dist',
  pages: {
    examples: {
      entry: 'src/examples/main.js',
      template: 'src/examples/index.html',
      filename: 'index.html',
    },
  },
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
