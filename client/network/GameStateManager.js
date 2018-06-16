const Protocol = require('../../Protocol.js')

class GameStateManager {
  constructor (socket) {
    this.socket = socket

    this.socket.on(Protocol.MAP_SYNC, data => {
      
    })
  }

  register (name) {
    this.socket.emit(Protocol.LOGIN, {
      name: name
    })
  }
}

module.exports = GameStateManager