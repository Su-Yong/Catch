class RenderManager {
  constructor () {
    this.canvas
    this.ctx

    this.game
  }

  init (canvas) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
  }

  update (game) {
    this.game = game
  }

  render (x, y, width, height) {
    const wu = width / 2
    const hu = height / 2


  }
}

module.exports = RenderManager