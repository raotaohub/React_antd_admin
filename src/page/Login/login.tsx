/*
 * @Author: raotaohub
 * @Date: 2021-02-19 20:44:27
 * @LastEditTime: 2021-02-20 16:10:19
 * @LastEditors: raotaohub
 * @FilePath: \react_admin_client_ts\src\page\Login\Login.tsx
 * @Description: Edit......
 */
import React from "react";
import "./login.less";
import logo from "./images/logo.png";
import NormalLoginForm from "./Form";

function Login(props: any) {
  const {history} = props
  return (
      <div className="login">
        <div className="login_wrapper">
          <div className="login_header">
            <img src={logo} alt="logo"/>
            <h1>疙瘩后台管理系统：React_Admin_Ts</h1>
          </div>
          <div className="login_form">
            <NormalLoginForm history={history}/>
          </div>
        </div>
      </div>
  );
}

export default React.memo(Login);


