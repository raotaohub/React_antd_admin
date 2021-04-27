/*
 * @Author: raotaohub
 * @Date: 2021-02-19 23:30:17
 * @LastEditTime: 2021-04-27 22:39:09
 * @LastEditors: raotaohub
 * @FilePath: \react_admin_client_ts\src\routes\index.ts
 * @Description: Edit......
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import adminRoutes from './adminRoutes/index';

const Login = React.lazy(() => import('../page/Login/login'));
const Admin = React.lazy(() => import('../page/Admin/admin'));
const NotFound = React.lazy(() => import('../page/NotFound/notFound'));
const ErrorPage = React.lazy(() => import('../page/ErrorPage/errorPage'));

const routes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/',
    component: Admin,
    routes: adminRoutes,
  },
  {
    path: '/404',
    exact: true,
    component: NotFound,
  },
  {
    path: '/500',
    exact: true,
    component: ErrorPage,
  },
];

export default routes;
