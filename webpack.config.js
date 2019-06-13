module.exports = {
  devServer: {
    stats: "errors-only",

    // parse host and port from env to allow customization
    // `open` param opens the page in a browser
    host: process.env.HOST,
    port: process.env.PORT,
    open: true,
    overlay: true,
    historyApiFallback: true,
    constentBase: "static",
  },
}
