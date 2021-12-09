import requests from '@/utils/requrst.js'
// 发布文章
// (type, title, info, content, docConfig[, _id])
// type : add or edit or save
export const docPushApi = (type, title, info, content, docConfig, _id) => {
  let url = ''
  if (type === 'add') {
    url = '/api/docs/add'
  } else if (type === 'edit') {
    url = '/api/docs/edit'
  } else if (type === 'save') {
    url = 'save'
  } else {
    throw new Error('unkown type')
  }
  return requests.post(url, {
    title, info, content, docConfig, _id
  })
}

export const docEditApi = (title, info, content, docConfig, _id) => {
  return requests.post('/api/docs/edit', {
    title, info, content, docConfig, _id
  })
}
