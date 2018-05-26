const Protocol = require('./Protocol.js')

class LoginManager {
  constructor () {

  }

  listen (socket) {
    socket.on(Protocol.LOGIN, data => {

    })
  }
}

module.exports = LoginManager