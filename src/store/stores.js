/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-16 11:50:54
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-16 12:03:50
 * @FilePath: /mobx/project/myapp/src/store/stores.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// unify
import React from "react"
import LoginStore from "./login.store"

class RootStore{
  constructor(){
    this.loginStore=new LoginStore()
  }
}

const rootStore=new RootStore()
const context=React.createContext(rootStore)
const useStore=()=>{
  React.useContext(context)
}

// export {useStore}
export default useStore