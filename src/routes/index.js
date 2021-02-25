/*
 * @Author: raotaohub
 * @Date: 2021-02-19 23:30:17
 * @LastEditTime: 2021-02-20 00:36:34
 * @LastEditors: raotaohub
 * @FilePath: \react_admin_client_ts\src\routes\index.js
 * @Description: Edit......
 */
// import { lazy } from "react";
import { Redirect } from "react-router-dom";

import Admin from "../page/admin/admin";
import Login from "../page/login/login";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={"/login"} />,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/admin",
    component: Admin,
  },
];

export default routes;
