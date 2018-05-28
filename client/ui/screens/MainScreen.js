const Screen = require('../Screen.js')
const ScreenType = require('../ScreenType.js')

const html = (
'<div>' +
  '<input id="name"></input>' +
  '<button id="register">GO</button>' +
'</div>'
)

class MainScreen extends Screen {
  constructor () {
    super('main', ScreenType.BASE, html)
  }
}

module.exports = MainScreen