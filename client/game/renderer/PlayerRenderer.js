const Renderer = require('./Renderer.js')

class PlayerRenderer extends Renderer {
  constructor () {}

  draw (canvas) {
    super.setStyle('color', '#607D8B')
    super.setStyle('lineWidth', '6')
    super.setStyle('strokeColor', '#455A64')

    super.drawArc(50)
  }
}

module.exports = PlayerRenderer