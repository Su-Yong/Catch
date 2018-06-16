const Protocol = require('../../Protocol.js')
const Logger = require('../Logger.js')

class GameStateManager {
  constructor () {

  }

  listen (socket) {
    socket.on(Protocol.ADD_PLAYER, data => {
      
    })
  }
}

module.exports = GameStateManager