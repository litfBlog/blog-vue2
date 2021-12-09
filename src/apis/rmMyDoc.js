import requests from '@/utils/requrst.js'
// 获取用户状态
export const rmMyDoc = function (_id) {
  return requests.post('/api/docs/rmMyDoc', { _id })
}
