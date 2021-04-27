//------------------- 引入库
import React, { ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
//-------------------
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  StockOutlined,
} from '@ant-design/icons';

import adminRoutes from '../../routes/adminRoutes/index';

//------------------- 引入样式
import './index.less';
import reactLogo from '../../assets/logo192.png';
//------------------- antd组件解构
const { Sider } = Layout;
const { SubMenu } = Menu;

function LayoutSideBar(props: any): ReactElement {
  const { collapsed, refresh } = props;

  useEffect(() => {
    console.log(adminRoutes);

    return () => {};
  }, []);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      id="g-layout-sider"
    >
      <div onClick={refresh} className="logo-wrapper">
        {/* <img className="img" src={reactLogo} alt="logo" /> */}
        <span className={collapsed ? ' hide' : 'title'}>
          <UserOutlined></UserOutlined> 疙瘩后台
        </span>
      </div>

      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        {adminRoutes.map(item => {
          if (item) {
            return (
              <SubMenu key={item.key} title={item.name}>
                {item.children &&
                  item.children.map(child => {
                    return (
                      <Menu.Item key={child.key}>
                        <Link to={child.path}> {child.name}</Link>
                      </Menu.Item>
                    );
                  })}
              </SubMenu>
            );
          }
          return null;
        })}
      </Menu>
    </Sider>
  );
}

export default React.memo(LayoutSideBar);
