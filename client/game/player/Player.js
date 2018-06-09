const Solid = require('../Solid.js')
const PlayerRenderer = require('../renderer/PlayerRenderer.js')

class Player extends Solid {
  constructor (health = 100, ) {
    super(new PlayerRenderer())

    this.health = health
  }
}

module.exports = Player