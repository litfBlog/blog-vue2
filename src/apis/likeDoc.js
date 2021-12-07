import requests from '@/utils/requrst.js'
// 获取用户状态
export const likeApi = function (_id) {
  return requests.post('/api/docs/likeDoc/like', {
    _id
  })
}
export const unLikeApi = function (_id) {
  return requests.post('/api/docs/likeDoc/unlike', {
    _id
  })
}
export const getLikeApi = function (_id) {
  return requests.post('/api/docs/likeDoc/get', {
    _id
  })
}
