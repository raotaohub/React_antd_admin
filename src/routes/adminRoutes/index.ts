import React from 'react'

const adminMenu = [
  {
    name: '仪表盘',
    path: '/dashboard',
    key: 1,
    exact: true,
    icon: '',
    meta: {
      needLoginAuth: true,
      rolesAuth: ['user', 'admin'],
    },
    routes: [
      {
        name: '用户数据',
        path: '/dashboard/userData',
        key: 11,
        icon: '',
        exact: true,
        component: React.lazy(
          () => import('../../page/Admin/Dashboard/UserData/UserData')
        ),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['user', 'admin'],
        },
      },
      {
        name: '付费转化率',
        path: '/dashboard/userRate',
        key: 12,
        icon: '',
        exact: true,
        component: React.lazy(
          () => import('../../page/Admin/Dashboard/UserRate/UserRate')
        ),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['admin'],
        },
      },
    ],
  },
  {
    name: '系统设置',
    path: '/systemSettings',
    key: 2,
    component: React.lazy(
      () => import('../../page/Admin/UserSetting/userSetting')
    ),
    icon: '',
    exact: true,
    // strict:true,
    meta: {
      needLoginAuth: true,
      rolesAuth: ['user', 'admin'],
    },
    routes: [
      {
        name: '用户设置',
        path: '/systemSettings/user-setting',
        key: 21,
        icon: '',
        exact: true,
        // strict:true,

        component: React.lazy(
          () => import('../../page/Admin/UserSetting/userSetting')
        ),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['user', 'admin'],
        },
      },
      {
        name: '权限设置',
        path: '/systemSettings/auth-setting',
        key: 22,
        icon: '',
        exact: true,
        // strict:true,
        component: React.lazy(
          () => import('../../page/Admin/AuthSetting/authSetting')
        ),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['admin'],
        },
      },
    ],
  },
  {
    name: '其他',
    path: '/other',
    icon: '',
    exact: true,
    key: 3,
    component: React.lazy(() => import('../../page/Admin/Other/other')),
    meta: {
      needLoginAuth: true,
      rolesAuth: ['user', 'admin'],
    },
    routes: [
      {
        name: '天气',
        path: '/other/theWeather',
        key: 31,
        icon: '',
        exact: true,
        component: React.lazy(
          () => import('../../page/Admin/UserSetting/userSetting')
        ),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['user', 'admin'],
        },
      },
      {
        name: '群发',
        path: '/other/group',
        key: 32,
        icon: '',
        exact: true,
        component: React.lazy(
          () => import('../../page/Admin/AuthSetting/authSetting')
        ),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['admin'],
        },
      },
    ],
  },
]

export default adminMenu
