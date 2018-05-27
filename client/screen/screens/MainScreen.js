const Screen = require('../Screen.js')
const ScreenType = require('../ScreenType.js')

class MainScreen extends Screen {
  constructor () {
    super('main', ScreenType.BASE)
  }

  init () {
    this.inputBinder.setKeyDownListener(event => {
      switch (String.fromCharCode(event.keyCode)) {
        case 'w': case 'W':
          
          break
        case 'a': case 'A':
          
          break
        case 's': case 'S':
            
          break
        case 'd': case 'D':
              
          break
      }
    })
  }
}

module.exports = MainScreen