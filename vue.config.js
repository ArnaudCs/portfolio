const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Arnaudcs.github.io/'
    : '/',
  transpileDependencies: true,

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
  },

  pluginOptions: {
    vuetify: {
      // options pour Vuetify
    },
  },
})