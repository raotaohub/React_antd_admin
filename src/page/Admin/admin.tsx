/*
 * @Author: raotaohub
 * @Date: 2021-02-19 20:44:47
 * @LastEditTime: 2021-04-27 23:33:48
 * @LastEditors: raotaohub
 * @FilePath: \react_admin_client_ts\src\page\Admin\admin.tsx
 * @Description: Edit......
 */
//------------------- 引入库
import React, { ReactElement, useState } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
//------------------- 引入antd
import { Layout, Menu } from 'antd';

//------------------- 引入样式
import './admin.less';

//------------------- 引入公共组件
import LayoutHeader from '../../components/LayoutHeader';
import LayoutContent from '../../components/LayoutContent';
import LayoutSideBar from '../../components/LayoutSideBar';

function Admin(props: any): ReactElement {
  const [collapsed, setCollapsed] = React.useState(false);
  const { route } = props;
  let history = useHistory();
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const refresh = () => {
    history.replace('/admin');
  };
  return (
    <div id="admin">
      <Layout style={{ height: '100%', width: '100%' }}>
        <LayoutSideBar
          toggle={toggle}
          collapsed={collapsed}
          refresh={refresh}
        />
        <Layout className="site-layout">
          <LayoutHeader toggle={toggle} collapsed={collapsed}>
            ♥♥♥疙瘩的后台管理页~
          </LayoutHeader>

          <LayoutContent style={{}}>
            <Switch>{renderRoutes(route.routes)}</Switch>
          </LayoutContent>
        </Layout>
      </Layout>
    </div>
  );
}

export default Admin;
