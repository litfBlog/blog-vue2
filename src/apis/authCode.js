import requests from '@/utils/requrst.js'
// 获取用户状态
export const authCodeApi = function () {
  return requests.post('/api/authCode')
}
