const Direction = {
  N: 0b0001,
  E: 0b0010,
  W: 0b0100,
  S: 0b1000
}

class Game {
  constructor (width = 10, height = 10) {
    this.width = width
    this.height = height
    
    this.players = []
    this.maze = []
    this.bombs = []
  }

  generateMaze () {
    for (let i = 0; i <= this.height * 2; i++) {
      this.maze[i] = []
      for (let j = 0; j <= this.width * 2; j++) {
        this.maze[i][j] = 2
      }
    }
    
    const branching = (x, y) => {
      if (this.maze[x * 2][y * 2] !== 2) {
        return
      }

      const r = Math.ceil(Math.random() * 15)
      if (y < this.height) {
        if (r & Direction.N) {
          branching(x, y + 1)

          this.maze[x * 2][y * 2 + 1] = 0
        } else {
          this.maze[x * 2][y * 2 + 1] = 1
        }
      }
      if (x < this.width) {
        if (r & Direction.E) {
          branching(x + 1, y)

          this.maze[x * 2 + 1][y * 2] = 0
        } else {
          this.maze[x * 2 + 1][y * 2] = 1
        }
      }
      if (x > 0) {
        if (r & Direction.W) {
          branching(x - 1, y)

          this.maze[x * 2 - 1][y * 2] = 0
        } else {
          this.maze[x * 2 - 1][y * 2] = 1
        }
      }
      if (y > 0) {
        if (r & Direction.S) {
          branching(x, y - 1)

          this.maze[x * 2][y * 2 - 1] = 0
        } else {
          this.maze[x * 2][y * 2 - 1] = 1
        }
      }

      this.maze[x * 2][y * 2] = 0
    }

    const rx = Math.floor(Math.random() * this.width)
    const ry = Math.floor(Math.random() * this.height)
    branching(rx, ry)

    this.maze = this.maze.map(arr => {
      arr = arr.map(item => {
        return (item > 0) ? 1 : 0
      })

      return arr
    })

    console.log(this.maze)
  }

  addPlayer (player) {
    this.players.push(player)
    Client.networkManager.gameStateManager.addPlayer(player)
  }
}

module.exports = Game