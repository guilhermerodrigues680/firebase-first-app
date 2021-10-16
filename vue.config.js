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
  },

  devServer: {
    https: true,
  },
};
