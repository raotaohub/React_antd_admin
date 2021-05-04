/*
 * @Author: raotaohub
 * @Date: 2021-02-19 20:44:47
 * @LastEditTime: 2021-05-04 21:58:55
 * @LastEditors: raotaohub
 * @FilePath: \react_admin_client_ts\src\page\Admin\admin.tsx
 * @Description: Edit......
 */
//------------------- 引入库
import React, { ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
//------------------- 引入状态
import { observer } from 'mobx-react'
import stepStore from '../../store/mobx/stepStore'
import store from '../../store/mobx/testStore'

//------------------- 引入antd
import { message } from 'antd'

//------------------- 引入样式
import './admin.less'

import { getUser, RemoveUser } from '../../utils/storage'

const Admin = (props: any): ReactElement => {
  const { route } = props
  console.log(route)

  let history = useHistory()

  useEffect(() => {
    let current = true
    console.warn(props)

    message.success('欢迎进入疙瘩后台')

    if (current && !getUser('admin')) history.replace('/login')

    return () => {
      current = false
      // RemoveUser('admin')
    }
  }, [history, props])

  const setCount = () => {
    return () => {
      stepStore.setCurrent(stepStore.current + 1)
    }
  }

  return (
    <>
      <div id='admin'>
        欢迎来到疙瘩后台~admin
        <div> {stepStore.current}</div>
        <button onClick={setCount()}>setCount</button>
        <div>
          <h1>About</h1>
          <div>count from main: {store.amount}</div>
          <div>price: {store.price}</div>
          <button type='button' onClick={() => store.increment()}>
            add +1
          </button>
          <button type='button' onClick={() => store.asyncAction()}>
            异步按钮
          </button>
        </div>
      </div>
    </>
  )
}
// *监听被观察的数据 !一定要执行这步
export default observer(Admin)
