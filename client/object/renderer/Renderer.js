const RendererType = require('./RendererType.js')

function styling (canvas, style) {
  canvas.strokeStyle = style.lineColor
  canvas.fillStyle = style.color
  canvas.lineWidth = style.lineWidth
}

class Renderer {
  constructor () {
    this.x = 0
    this.y = 0

    this.canvas = null
    this.style = {
      type: RendererType.Style.FILL,
      color: '#BDBDBD',
      lineColor: '#2D2D2D',
      lineWidth: 2,
    }
  }

  setCanvas (canvas) {
    this.canvas = canvas
  }

  draw () {

  }

  setStyle (key, style) {
    this.style[key] = style
  }

  drawArc (r, startAngle = 0, endAngle = 2 * Math.PI) {
    styling()
    
    this.canvas.beginPath()
    this.canvas.drawArc(this.x, this.y, r, startAngle, endAngle)

    switch (this.style.type) {
      case RendererType.Style.FILL:
        this.canvas.fill()
        break
      case RendererType.Style.STROKE:
        this.canvas.stroke()
        break
      case RendererType.Style.FILL_STROKE:
        this.canvas.fill()
        this.canvas.stroke()
        break
    }

    this.canvas.closePath()
  }
  
  drawRect (width, height) {
    styling()
    
    const w = width * 0.5
    const h = height * 0.5

    switch (this.style.type) {
      case RendererType.Style.FILL:
        this.canvas.fillRect(this.x - w, this.y -h, this.x + w, this.y + h)
        break
      case RendererType.Style.STROKE:
        this.canvas.strokeRect(this.x - w, this.y -h, this.x + w, this.y + h)
        break
      case RendererType.Style.FILL_STROKE:
        this.canvas.fillRect(this.x - w, this.y -h, this.x + w, this.y + h)
        this.canvas.strokeRect(this.x - w, this.y -h, this.x + w, this.y + h)
        break
    }
  }

  drawRoundRect (width, height, roundness) {
    styling()

    roundness = Math.min(roundness, width * 0.5, height * 0.5)

    this.canvas.beginPath()
    this.moveTo(this.x + roundness, this.y)
    this.arcTo(this.x + width, this.y, this.x + width, this.y + height, roundness)
    this.arcTo(this.x + width, this.y + height, this.x, this.y + height, roundness)
    this.arcTo(this.x, this.y + height, this.x, this.y, roundness)
    this.arcTo(this.x, this.y, this.x + width, this.y, roundness)
    this.canvas.closePath()
  }
}

module.exports = Renderer