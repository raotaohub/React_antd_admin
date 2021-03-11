/**
 * 利用localStorage 来保存用户登录和退出的信息
 * */

const getUser = (username) => {
  const data = localStorage.getItem(username)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

const RemoveUser = (username) => {
  window.localStorage.removeItem(username)
}
