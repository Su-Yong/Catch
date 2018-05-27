const ScreenType = require('./ScreenType.js')
const InputBinder = require('./InputBinder.js')

class Screen {
  constructor (name, type = ScreenType.STACK) {
    this.name = name
    this.type = type

    this.inputBinder = new InputBinder()
  }

  init () {
    
  }
}

module.exports = Screen