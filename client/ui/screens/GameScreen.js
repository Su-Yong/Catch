const Screen = require('../Screen.js')
const ScreenType = require('../ScreenType.js')
const InputBinder = require('../InputBinder.js')

const RenderManager = require('../../game/RenderManager.js')
const Game = require('../../game/Game.js')
const Game = require('../../game/player/Player.js')

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
    this.game = new Game()
  }

  init () {
    this.renderManager.init(document.getElementById('canvas'))
  }
  
  prepare () {
    this.game.generateMaze()

    const player = new Player()
    player.x = Math.floor(Math.random() * this.game.width)
    player.y = Math.floor(Math.random() * this.game.height)
  }

  start () {
    this.run = () => {
      this.renderManager.update({
        map: this.game.maze,
        bombs: this.game.bombs,
        players: this.game.players
      })
      this.renderManager.render()

      requestAnimationFrame(this.run)
    }

    requestAnimationFrame(this.run)
  }
}

module.exports = GameScreen