import axios from '@/axios_util'
const request = axios.instance
import qs from 'qs'
// 登录方法
export function typeList (data) {
  return request({
    url: '/user/complaint/type_list',
    method: 'post',
    data: qs.stringify(data)
  })
}