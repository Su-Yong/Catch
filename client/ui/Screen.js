const ScreenType = require('./ScreenType.js')
const InputBinder = require('./InputBinder.js')

class Screen {
  constructor (name, type = ScreenType.STACK, html = '', inputBinder = new InputBinder()) {
    this.name = name
    this.type = type

    this.html = html
    this.inputBinder = inputBinder
  }
}

module.exports = Screen