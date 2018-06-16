const Solid = require('../Solid.js')
const PlayerRenderer = require('../renderer/PlayerRenderer.js')
const PlayerProperty = require('./PlayerProperty.js')

class Player extends Solid {
  constructor (name = 'Player', health = 100, property = new PlayerProperty()) {
    super(new PlayerRenderer())

    this.name = name
    this.health = health
    this.property = property
  }
}

module.exports = Player