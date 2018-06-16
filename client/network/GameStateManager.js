const Protocol = require('../../Protocol.js')

class GameStateManager {
  constructor (socket) {
    this.socket = socket

    this.socket.on(Protocol.MAP_SYNC, data => {
      
    })
  }

  addPlayer (player) {
    this.socket.emit(Protocol.ADD_PLAYER, {
      name: player.name,
      health: player.health,
      x: player.x,
      y: player.y,
      property: player.property
    })
  }
}

module.exports = GameStateManager