const Protocol = require('../../Protocol.js')
const Logger = require('../Logger.js')

class JoinGameManager {
  constructor () {

  }

  listen (socket) {
    socket.on(Protocol.JOIN_GAME, () => {
      let i

      Server.games.map((item, index) => {
        i = (i.value > item.players) ? {
          key: index,
          value: item.players
        } : i
      })

      Server.networkManager.gameStateManager.update(Server.games[i.key])
    })
  }
}

module.exports = JoinGameManager