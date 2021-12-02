import requests from '@/utils/requrst.js'
// 获取用户状态
export const searchApi = function (key) {
  return requests.post('/api/docs/search', {
    // 请求参数
    key
  })
}
