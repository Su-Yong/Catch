const Client = require('./Client.js')

const client = new Client()
window.onload = () => {
  client.init()
}