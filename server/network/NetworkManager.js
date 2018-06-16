const LoginManager = require('./LoginManager.js')
const GameStateManager = require('./GameStateManager.js')

class NetworkManager {
  constructor (socketServer) {
    this.socketServer = socketServer

    this.loginManager = new LoginManager()
    this.gameStateManager = new GameStateManager()
  
    this.socketServer.on('connection', socket => {
      this.loginManager.listen(socket)
      this.gameStateManager.listen(socket)
    })
  }
}

module.exports = NetworkManager