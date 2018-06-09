const Screen = require('../Screen.js')
const ScreenType = require('../ScreenType.js')
const InputBinder = require('../InputBinder.js')

const RenderManager = require('../../object/RenderManager.js')

const html = ''

class GameScreen extends Screen {
  constructor () {
    const inputBinder = new InputBinder()
    inputBinder.setKeyDownListener(event => {
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

    super('game', ScreenType.BASE, inputBinder)

    this.renderManager = new RenderManager()
  }

  init () {
    this.renderManager.init(document.getElementById('canvas'))
  }
  
  start () {
    this.run = () => {
      // this.renderManager.update()
      this.renderManager.render()

      requestAnimationFrame(this.run)
    }

    requestAnimationFrame(this.run)
  }
}

module.exports = GameScreen