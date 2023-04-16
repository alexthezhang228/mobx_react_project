/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-16 10:29:43
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-16 10:38:04
 * @FilePath: /mobx/project/myapp/src/utilities/http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Encapsulation->Instantiation->request&&response->export

import axios from "axios";

const http=axios.create({
  baseURL:'http://geek.itheima.net/v1_0',
  timeout: 5000
})

// request
http.interceptors.request.use((config)=>{
  return config
},(error)=>{
  return Promise.reject(error)
})

// response

http.interceptors.response.use((response)=> {
  return response
}, (error)=> {
  return Promise.reject(error)
})

export { http }