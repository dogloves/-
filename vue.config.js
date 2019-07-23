module.exports = {
  baseUrl: './',
  devServer: {
    port: 8000, // 端口号
    open: true, // 是否自动打开
    host: '0.0.0.0',
    disableHostCheck: true
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.180.81:30003',
    //     changeOrigin: true,
    //     ws: false,
    //     pathRewrite: {
    //       '^/api': '/api'
    //     }
    //   }
    // }
  }
}
