/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-15 18:22:51
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-15 22:35:33
 * @FilePath: /mobx/project/myapp/src/pages/login/login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Card } from "antd"
import logo from '../../assets/bg.jpg'
import './style.scss'
function Login(){
  return (
    <div className="login">
      <Card className="login-container">
        {/* <img className="login-logo" src={logo} alt=''></img> */}
      </Card>
    </div>
  )
}

export default Login