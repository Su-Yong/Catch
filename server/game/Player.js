const Solid = require('./Solid.js')

class Player extends Solid {
  constructor (x, y, name, health, property) {
    super(x, y)

    this.name = name
    this.health = health
    this.property = property
  }
}

module.exports = Player