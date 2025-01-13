const { defineConfig } = require('@vue/cli-service');
const px2rem = require('postcss-px2rem');

module.exports = defineConfig({
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            px2rem({
              remUnit: 75,
            }),
          ],
        },
      },
    },
  },
});
