/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-15 21:21:43
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-15 21:56:26
 * @FilePath: /mobx/project/myapp/craco.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// webpack configuration

const path=require('path')
module.exports={
  webpack:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  }
}