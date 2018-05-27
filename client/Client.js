const NetworkManager = require('./network/NetworkManager.js')

class Client {
  constructor () {
    this.networkManager = new NetworkManager(io())
  }

  init () {
    this.networkManager.getLoginManager().register('test')
  }
}

module.exports = Client