import React from 'react';

const adminRoutes = [
  {
    name: '仪表盘',
    path: '/admin/dashboard',
    key: 0,
    exact: false,
    icon: '',
    component: React.lazy(() => import('../../page/Admin/Dashboard/dashboard')),
    meta: {
      needLoginAuth: true,
      rolesAuth: ['user', 'admin'],
    },
    children: [
      {
        name: '用户数据',
        path: '/admin/dashboard/userData',
        key: 0,
        icon: '',
        exact: false,
        component: React.lazy(
          () => import('../../page/Admin/UserSetting/userSetting')
        ),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['user', 'admin'],
        },
      },
      {
        name: '付费转化率',
        path: '/admin/dashboard/userRate',
        key: 1,
        icon: '',
        exact: false,
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
    name: '系统设置',
    path: '/',
    key: 1,
    component: React.lazy(
      () => import('../../page/Admin/UserSetting/userSetting')
    ),
    icon: '',
    exact: false,
    meta: {
      needLoginAuth: true,
      rolesAuth: ['user', 'admin'],
    },
    children: [
      {
        name: '用户设置',
        path: '/admin/user-setting',
        key: 0,
        icon: '',
        exact: false,
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
        path: '/admin/auth-setting',
        key: 1,
        icon: '',
        exact: false,
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
    path: '/admin/other',
    icon: '',
    exact: false,
    key: 2,
    component: React.lazy(() => import('../../page/Admin/Other/other')),
    meta: {
      needLoginAuth: true,
      rolesAuth: ['user', 'admin'],
    },
    children: [
      {
        name: '天气',
        path: '/admin/other/theWeather',
        key: 0,
        icon: '',
        exact: false,
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
        path: '/admin/other/group',
        key: 1,
        icon: '',
        exact: false,
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
];

export default adminRoutes;
