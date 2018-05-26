const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')
const socketServer = io.listen(http)
const path = require('path')

const Logger = require('./Logger.js')
const NetworkManager = require('./network/NetworkManager.js')

class Server {
  constructor () {
    this.networkManager = new NetworkManager(socketServer)
  }

  async start () {
    app.use(express.static(path.join(path.resolve(''), 'client')))

    http.listen(3000, () => {
      Logger.info('Server opened at 3000')
    })
  }

  static get version () {
    return '0.0.1'
  }

  static get versionCode () {
    return 1
  }
}

module.exports = Server