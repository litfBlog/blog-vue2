import requests from '@/utils/requrst.js'
// 获取用户状态
export const findDocApi = function (num, page) {
  return requests.post('/api/docs/find', {
    num,
    page
  })
}
