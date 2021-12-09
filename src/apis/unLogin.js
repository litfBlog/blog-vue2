import requests from '@/utils/requrst.js'
// 获取用户状态
export const unLoginApi = function () {
  return requests.post('/api/user/login/unlogin')
}
