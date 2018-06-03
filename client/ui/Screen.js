const ScreenType = require('./ScreenType.js')
const InputBinder = require('./InputBinder.js')

class Screen {
  constructor (name, type = ScreenType.STACK, html = '', inputBinder = new InputBinder()) {
    this.name = name
    this.type = type

    this.html = html
    this.inputBinder = inputBinder

    this.data
  }

  init () {}

  syncData (data) {
    this.data = data
  }
}

module.exports = Screen