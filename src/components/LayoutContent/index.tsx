//------------------- 引入库
import React, {ReactElement,} from "react";
//-------------------
import {Layout} from 'antd';


//------------------- 引入样式
import './index.less'
//------------------- antd组件解构
const {Content} = Layout;

function LayoutContent(): ReactElement {

  return (
      <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}>
      </Content>
  )
}

export default React.memo(LayoutContent)
