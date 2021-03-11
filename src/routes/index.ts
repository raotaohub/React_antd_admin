/*
 * @Author: raotaohub
 * @Date: 2021-02-19 23:30:17
 * @LastEditTime: 2021-02-20 00:36:34
 * @LastEditors: raotaohub
 * @FilePath: \react_admin_client_ts\src\routes\index.js
 * @Description: Edit......
 */
import React from "react";
import {Redirect} from "react-router-dom";

const Login = React.lazy(() => import("../page/Login/login"))
const Admin = React.lazy(() => import("../page/Admin/admin"))
const NotFound = React.lazy(() => import('../page/NotFound/notFound'))
const ErrorPage = React.lazy(() => import('../page/ErrorPage/errorPage'))

const routes = [

  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Admin,
    routes:[]
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/500',
    component: ErrorPage
  }
];

export default routes;
