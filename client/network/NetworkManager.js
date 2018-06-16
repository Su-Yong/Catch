const LoginManager = require('./LoginManager.js')
const PlayerJoinManager = require('./PlayerJoinManager.js')
const GameStateManager = require('./GameStateManager.js')


class NetworkManager {
  constructor (socketServer) {
    this.socketServer = socketServer

    this.loginManager = new LoginManager(this.socketServer)
    this.playerJoinManager = new PlayerJoinManager(this.socketServer)
    this.gameStateManager = new GameStateManager(this.socketServer)
  }
}

module.exports = NetworkManager