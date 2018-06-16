class Game {
  constructor (width = 10, height = 10) {
    this.width = width
    this.height = height
    
    this.players = []
    this.maze = []
    this.bombs = []
  }
}

module.exports = Game