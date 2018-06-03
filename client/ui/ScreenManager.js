const ScreenType = require('./ScreenType.js')

class ScreenManager {
  constructor () {
    this.screens = []
    this.screenStack = []
    
    this._element = null
  }

  init () {
    this._element = document.getElementById('screen-provider')
  }

  getAllScreens () {
    return this.screens
  }

  register (screen) {
    this.screens.push(screen)
  }

  pushScreen (name, data) {
    for (const screen of this.screens) {
      if (screen.name === name) {
        if (screen.type === ScreenType.BASE) {
          this.screenStack = [screen]
        } else {
          this.screenStack.push(screen)
        }

        this._element.innerHTML = screen.html
        screen.syncData(data)
        screen.init()
      }
    }
  }

  popScreen (name) {
    for (const screen of this.screens) {
      if (screen.name === name) {
        if (screen.type === ScreenType.STACK) {
          this.screenStack.pop(screen)

          this._element = this.screenStack[this.screenStack - 1].html
        }
      }
    }
  }
}

module.exports = ScreenManager