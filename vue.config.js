const path = require('path')
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "assets": "@/assets",
  //       "common": "@/common",
  //       "common": "@/common",
  //       "components": "@/components",
  //       "views": "@/views",
  //     }
  //   }
  // },

  // 添加别名
  chainWebpack: config => config.resolve.alias
    .set("vue$", "vue/dist/vue.esm.js")
    .set("@", resolve("src"))
    .set("@assets", resolve("src/assets"))
    .set("@components", resolve("src/components"))
    .set("@mixins", resolve("src/mixins"))
    .set("@router", resolve("src/router"))
    .set("@store", resolve("src/store"))
    .set("@utils", resolve("src/utils"))
    .set("@views", resolve("src/views"))
    .set("@network", resolve("src/network"))


}
