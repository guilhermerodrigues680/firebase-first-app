module.exports = {
  publicPath: "",
  productionSourceMap: false, // desabilita source maps para esconder dados do firebase

  chainWebpack: (config) => {
    // vue inspect --plugin html
    // Alterar titulo do html
    config.plugin("html").tap((args) => {
      args[0].title = "Firebase Webapp";
      return args;
    });

    // https://cli.vuejs.org/guide/webpack.html#chaining-advanced
    // vue inspect > output.js
    // vue inspect --rule images
    // https://v4.webpack.js.org/loaders/url-loader/#limit
    // Desabilita a tranformação de imagens em base64 (Util para Phaser.js)
    config.module
      .rule("images")
      .use("url-loader")
      .tap((options) => {
        options.limit = false;
        return options;
      });
  },

  devServer: {
    https: true,
  },
};
