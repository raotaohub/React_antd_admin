/*
 * @Author: raotaohub
 * @Date: 2021-02-19 23:30:17
 * @LastEditTime: 2021-05-04 12:24:30
 * @LastEditors: raotaohub
 * @FilePath: \react_admin_client_ts\src\routes\index.ts
 * @Description: Edit......
 */
import React from 'react'

const Login = React.lazy(() => import('../page/Login/login'))
const Admin = React.lazy(() => import('../page/Admin/admin'))
const NotFound = React.lazy(() => import('../page/NotFound/notFound'))
const ErrorPage = React.lazy(() => import('../page/ErrorPage/errorPage'))

const Index = React.lazy(() => import('../page/index'))

/**
 * @description: exact  - 属性为true时路径中的hash值必须和path完全一致才渲染对应的组件,如果为false则'/'也可以匹配'/xxx'
 * @description: strick - 属性
 */

const routes = [
  {
    path: '/login',
    exact: true,
    strict: true,
    component: Login,
  },
  {
    path: '/404',
    exact: true,
    strict: true,
    component: NotFound,
  },
  {
    path: '/500',
    exact: true,
    strict: true,
    component: ErrorPage,
  },
  {
    path: '/',
    component: Index,
    exact: false,
    routes: [
      {
        path: '/',
        exact: true,
        strict: true,
        component: Admin,
      },
      {
        path: '/dashboard/userData',
        exact: true,
        strict: true,
        component: React.lazy(
          () => import('../page/Admin/Dashboard/UserData/UserData')
        ),
      },
      {
        path: '/dashboard/userRate',
        exact: true,
        strict: true,
        component: React.lazy(
          () => import('../page/Admin/Dashboard/UserRate/UserRate')
        ),
      },
      {
        name: '用户设置',
        path: '/systemSettings/user-setting',
        key: 10,
        icon: '',
        exact: true,
        strict: true,
        component: React.lazy(
          () => import('../page/Admin/UserSetting/userSetting')
        ),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['user', 'admin'],
        },
      },
      {
        name: '权限设置',
        path: '/systemSettings/auth-setting',
        key: 11,
        icon: '',
        exact: true,
        strict: true,
        component: React.lazy(
          () => import('../page/Admin/AuthSetting/authSetting')
        ),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['admin'],
        },
      },
      {
        name: '天气',
        path: '/other/theWeather',
        key: 0,
        icon: '',
        exact: true,
        strict: true,
        component: React.lazy(
          () => import('../page/Admin/UserSetting/userSetting')
        ),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['user', 'admin'],
        },
      },
      {
        name: '群发',
        path: '/other/group',
        key: 1,
        icon: '',
        exact: true,
        strict: true,
        component: React.lazy(
          () => import('../page/Admin/AuthSetting/authSetting')
        ),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['admin'],
        },
      },
    ],
  },
]

export default routes
