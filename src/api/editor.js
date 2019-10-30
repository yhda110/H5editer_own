import * as http from '../util/http'
// import { type } from 'os'

const getUserThemeList = () => {
  return http.get('/api/users/1/works?uid=1&pn=1&rn=100&tdsourcetag=s_pctim_aiomsg')
}
const getPageByThemeId = (id) => {
  return http.get(`/api/works/?uid=1&workId=${id}`)
}
const saveTheme = (theme) => {
  return http.post('/api/works/', themeFactory(theme))
}
const delTheme = (theme) => {
  // console.log(theme)
  return http.del('/api/works', theme)
}
const updateTheme = (theme) => {
  return http.put('/api/works/', themeFactory(theme))
}

const uploadPic = (data) => {
  return http.post('/api/upload', data)
}

const getPicListByThemeId = (_id) => {
  return http.get(`/api/upload/theme/${_id}?fileType=image`)
}

const getVideoListByThemeId = (_id) => {
  return http.get(`/api/upload/theme/${_id}?fileType=video`)
}
// 保存信息加工
const themeFactory = (data) => {
  if (typeof data.content === 'string') {
    data = JSON.parse(data.content)
  }
  // console.log('xxxxxxxxxxxxxxx', data)
  let requestData = {
    content: JSON.stringify(data),
    name: data.title,
    workId: data.id || '',
    uid: 1
  }
  return requestData
}
module.exports = {
  getUserThemeList,
  saveTheme,
  updateTheme,
  uploadPic,
  getPageByThemeId,
  getPicListByThemeId,
  delTheme,
  getVideoListByThemeId
}
