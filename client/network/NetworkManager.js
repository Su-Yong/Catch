const LoginManager = require('./LoginManager.js')

class NetworkManager {
  constructor (socketServer) {
    this.socketServer = socketServer

    this.loginManager = new LoginManager(this.socketServer)
  }

  getLoginManager () {
    return this.loginManager
  }
}

module.exports = NetworkManager