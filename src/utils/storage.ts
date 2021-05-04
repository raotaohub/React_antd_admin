/**
 * 利用localStorage 来保存用户登录和退出的信息
 * */

export const getUser = (userName: string) => {
  const data: string | null = localStorage.getItem(userName)
  try {
    return JSON.parse(typeof data === 'string' ? data : '')
  } catch (e) {
    return data
  }
}

export const setUser = (userName: string, userVal: any) => {
  if (typeof userVal === 'object' && userVal !== null) {
    userVal = JSON.stringify(userVal)
  }
  window.localStorage.setItem(userName, userVal)
}

export const RemoveUser = (userName: string) => {
  window.localStorage.removeItem(userName)
}
