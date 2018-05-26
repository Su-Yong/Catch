const LoginManager = require('./LoginManager.js')

class NetworkManager {
  constructor (socketServer) {
    this.socketServer = socketServer

    this.loginManager = new LoginManager()
  
    this.socketServer.on('connection', socket => {
      this.loginManager.listen(socket)
    })
  }
}

module.exports = NetworkManager