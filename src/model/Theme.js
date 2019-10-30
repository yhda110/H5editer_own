export default class Theme {
  constructor (theme = {}) {
    this.id = theme.id
    this.title = theme.name || '测试'
    this.description = theme.description || '描述'
    this.pages = theme.pages || []
    this.type = theme.type || 'h5'
    this.canvasHeight = theme.canvasHeight || 504
  }
}
