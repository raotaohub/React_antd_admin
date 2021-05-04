import React, { useEffect } from 'react'
import './UserData.less'

const UserData = () => {
  useEffect(() => {
    alert('用户数据')
  }, [])

  return (
    <div id='userData'>
      <h1>用户数据</h1>
    </div>
  )
}

export default UserData
