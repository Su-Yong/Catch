class RenderManager {
  constructor () {
    this.canvas
    this.ctx

    this.data
  }

  init (canvas) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
  }

  update (map) {
    this.data = map
  }

  render () {

  }
}

module.exports = RenderManager