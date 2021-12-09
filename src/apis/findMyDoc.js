import requests from '@/utils/requrst.js'
// 获取用户状态
export const findMyDocApi = function () {
  return requests.post('/api/docs/findMyDoc')
}
