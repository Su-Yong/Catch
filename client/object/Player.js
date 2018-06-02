const Solid = require('./Solid.js')
const PlayerRenderer = require('./renderer/PlayerRenderer.js')

class Player extends Solid {
  constructor () {
    super(new PlayerRenderer())
  }
}

module.exports = Player