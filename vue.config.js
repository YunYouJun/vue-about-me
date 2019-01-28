module.exports = {
  css: { 
    extract: false 
  },
  pages: {
    index: {
      entry: 'example/index.js',
      template: 'example/index.html',
      filename: 'index.html',
      title: 'Vue-About-Me',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-about-me/'
    : '/'
}