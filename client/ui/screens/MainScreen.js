const Screen = require('../Screen.js')
const ScreenType = require('../ScreenType.js')

const html = (
'<div style="">' +
  '<div class="input-provider" style="width: 30vw; ">' + 
    '<input id="name" style="font-size: 20px;"></input>' +
    '<div id="register" class="flat-button" style="float: right;">GO</div>' +
  '</div>' +
'</div>'
)

class MainScreen extends Screen {
  constructor () {
    super('main', ScreenType.BASE, html)
  }
}

module.exports = MainScreen