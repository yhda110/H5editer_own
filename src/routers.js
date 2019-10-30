export default [{
  path: '/',
  name: 'index',
  // component: require('./views/h5editor/themeList.vue')
  component: require('./views/spaeditor/themeList.vue')
}, {
  path: '/h5editor',
  name: 'h5editor',
  component: require('./views/h5editor/index.vue')
}, {
  path: '/spaeditor',
  name: 'spaeditor',
  component: require('./views/spaeditor/index.vue')
}, {
  path: '/themeList',
  name: 'themeList',
  component: require('./views/h5editor/themeList.vue')
}, {
  path: '/spaList',
  name: 'spaList',
  component: require('./views/spaeditor/themeList.vue')
}]
