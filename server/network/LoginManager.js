const Protocol = require('../../Protocol.js')
const Logger = require('../Logger.js')

class LoginManager {
  constructor () {

  }

  listen (socket) {
    socket.on(Protocol.LOGIN, data => {
      const address = socket.request.connection._peername.address
      const port = socket.request.connection._peername.port

      Logger.info('login ' + data.name + ' at [' + address + ':' + port + ']')
    })
  }
}

module.exports = LoginManager