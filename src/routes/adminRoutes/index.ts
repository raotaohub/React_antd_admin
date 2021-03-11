import React from "react";

const adminRoutes = [
  {
    name: 'dashboard',
    path: '/admin/dashboard',
    exact: false,
    icon: '',
    component: React.lazy(() => import('../../page/Admin/Dashboard/dashboard')),
    meta: {
      needLoginAuth: true,
      rolesAuth: ['user', 'admin']
    },
    children: []
  },
  {
    name: '系统设置',
    path: '/',
    component: React.lazy(() => import('../../page/Admin/UserSetting/userSetting')),
    icon: '',
    exact: false,
    meta: {
      needLoginAuth: true,
      rolesAuth: ['user', 'admin']
    },
    children: [
      {
        name: '用户设置',
        path: '/admin/user-setting',
        icon: '',
        exact: false,
        component: React.lazy(() => import('../../page/Admin/UserSetting/userSetting')),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['user', 'admin']
        },
      },
      {
        name: '权限设置',
        path: '/admin/auth-setting',
        icon: '',
        exact: false,
        component: React.lazy(() => import('../../page/Admin/AuthSetting/authSetting')),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['admin']
        },
      },
    ],
  },
  {
    name: '其他',
    path: '/admin/other',
    icon: '',
    exact: false,
    component: React.lazy(() => import('../../page/Admin/Other/other')),
    meta: {
      needLoginAuth: true,
      rolesAuth: ['user', 'admin']
    },
    children: []
  },

]

export default adminRoutes
