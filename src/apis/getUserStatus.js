import requests from '@/utils/requrst.js'
// 获取用户状态
export const getUserStatusApi = function () {
  return requests.post('/api/user/loginStatus', {
    // 请求参数
  })
}
