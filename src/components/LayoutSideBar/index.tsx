//------------------- 引入库
import React, {ReactElement} from "react";
//-------------------
import {Layout, Menu} from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  StockOutlined,
} from '@ant-design/icons';

//------------------- 引入样式
import './index.less'
import reactLogo from "../../assets/logo192.png";
//------------------- antd组件解构
const {Sider} = Layout;
const {SubMenu,} = Menu

function LayoutSideBar(props: any): ReactElement {

  const {collapsed, refresh} = props
  return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div onClick={refresh} className="logo-wrapper">
          <img className='img' src={reactLogo} alt='logo'/>
          <span className={collapsed ? 'title hide' : 'title'}>React-疙瘩Admin</span>
        </div>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu key='6' title="Home" icon={<StockOutlined/>}>
            <Menu.Item key="7">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="1" icon={<UserOutlined/>}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined/>}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UploadOutlined/>}>
            nav 4
          </Menu.Item>
          <Menu.Item key="5" icon={<UploadOutlined/>}>
            nav 5
          </Menu.Item>
        </Menu>
      </Sider>
  )
}

export default React.memo(LayoutSideBar)
