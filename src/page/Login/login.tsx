/*
 * @Author: raotaohub
 * @Date: 2021-02-19 20:44:27
 * @LastEditTime: 2021-05-03 15:39:47
 * @LastEditors: raotaohub
 * @FilePath: \react_admin_client_ts\src\page\Login\login.tsx
 * @Description: Edit......
 */
import React, { useEffect } from 'react';
import './login.less';
import logo from './images/logo.png';
import NormalLoginForm from './Form';
import { getUser } from '../../utils/storage';

function Login(props: any) {
  const { history } = props;

  useEffect(() => {
    let current = true;

    if (current && getUser('admin')) history.replace('/');

    return () => {
      current = false;
    };
  }, [history]);

  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_header">
          <img src={logo} alt="logo" />
          <h1>疙瘩后台管理系统：React_Admin_Ts</h1>
        </div>
        <div className="login_form">
          <NormalLoginForm history={history} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Login);
