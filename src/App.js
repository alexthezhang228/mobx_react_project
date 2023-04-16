/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-15 17:59:25
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-15 22:07:21
 * @FilePath: /mobx/project/myapp/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {BrowserRouter,Routes,Route, Router}  from 'react-router-dom'
import Login from './pages/login/login';
// import Layout from '@/pages/layout'; does not work

import Layout from "./pages/layout/layout"
import {Button} from 'antd'
function App() {
  return (

    // set up Router
    <BrowserRouter>
      <div className="App">
        {/* <Button type='primary'>primary Button</Button> */}
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/layout' element={<Layout></Layout>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
