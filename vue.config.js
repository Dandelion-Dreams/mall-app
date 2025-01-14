const { defineConfig } = require('@vue/cli-service');
const px2rem = require('postcss-px2rem');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            px2rem({
              remUnit: 37.5,
            }),
          ],
        },
      },
    },
  },
});
