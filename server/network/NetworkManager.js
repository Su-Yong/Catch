const LoginManager = require('./LoginManager.js')
const GameStateManager = require('./GameStateManager.js')
const JoinGameManager = require('./JoinGameManager.js')

class NetworkManager {
  constructor (socketServer) {
    this.socketServer = socketServer

    this.loginManager = new LoginManager()
    this.gameStateManager = new GameStateManager()
    this.joinGameManager = new JoinGameManager()
  
    this.socketServer.on('connection', socket => {
      this.loginManager.listen(socket)
      this.gameStateManager.listen(socket)
      this.joinGameManager.listen(socket)
    })
  }
}

module.exports = NetworkManager