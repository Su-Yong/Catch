const server = require('./server/Server.js')
global.Server = new server()
global.Server.start()