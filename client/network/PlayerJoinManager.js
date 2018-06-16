const Protocol = require('../../Protocol.js')

class PlayerJoinManager {
  constructor (socket) {
    this.socket = socket
  }

  join (player) {
    this.socket.emit(Protocol.JOIN, player)
  }
}

module.exports = PlayerJoinManager