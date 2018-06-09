const LoginManager = require('./LoginManager.js')
const PlayerJoinManager = require('./PlayerJoinManager.js')

class NetworkManager {
  constructor (socketServer) {
    this.socketServer = socketServer

    this.loginManager = new LoginManager(this.socketServer)
    this.playerJoinManager = new PlayerJoinManager(this.socketServer)
  }

  getLoginManager () {
    return this.loginManager
  }

  getPlayerJoinManager () {
    return this.playerJoinManager
  }
}

module.exports = NetworkManager