const NetworkManager = require('./network/NetworkManager.js')

const ScreenManager = require('./ui/ScreenManager.js')
const GameScreen = require('./ui/screens/GameScreen.js')
const MainScreen = require('./ui/screens/MainScreen.js')

const RenderManager = require('./object/RenderManager.js')

class Client {
  constructor () {
    this.networkManager = new NetworkManager(io())
    this.screenManager = new ScreenManager()
    this.renderManager = new RenderManager()
  }

  init () {
    this.screenManager.init()
    
    this.screenManager.register(new MainScreen())
    this.screenManager.register(new GameScreen())

    this.screenManager.pushScreen('main')
  }
}

module.exports = Client