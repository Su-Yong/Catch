const client = require('./Client.js')

global.Client = new client()

window.onload = () => {
  Client.init()
}