const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    module: {
      publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
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