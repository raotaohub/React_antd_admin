import axios from "axios"
import {message} from "antd";

/** 提示消息 **/
const error = () => {
  message.error('网络异常');
};

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let ajaxPromise

    if (type === 'GET') {
      ajaxPromise = axios.get(url, {params: data})
    } else {
      ajaxPromise = axios.post(url, data)
    }

    ajaxPromise.then(res => {
      resolve(res.data)
    }).catch(e => {
      error(e)
    })

  })
}
