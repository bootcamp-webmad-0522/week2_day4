const canvasApp = {
    name: 'Basic canvas application',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    description: 'Canvas app for basic shapes drawing',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimensions(canvasId)
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },
    drawRectangle() {
        this.ctx.fillRect(this.canvasSize.w / 2 - 250, this.canvasSize.h / 2 - 250, 500, 500)

        this.ctx.fillStyle = 'red'                      // color relleno
        this.ctx.fillRect(this.canvasSize.w / 2 - 150, this.canvasSize.h / 2 - 150, 300, 100)

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w / 2 - 50, this.canvasSize.h / 2 - 50, 100, 10)
    },
    drawOutlinedRectangle() {
        this.ctx.strokeStyle = 'red'                    // color borde
        this.ctx.lineWidth = 10                         // ancho borde
        this.ctx.strokeRect(100, 100, 500, 500)

        this.ctx.strokeStyle = 'blue'                    // color borde
        this.ctx.lineWidth = 100                         // ancho borde
        this.ctx.strokeRect(this.canvasSize.w / 2, 0, this.canvasSize.w / 2, this.canvasSize.h)
    },
    drawRegularLines() {
        this.ctx.beginPath()
        this.ctx.moveTo(100, 100)
        this.ctx.lineTo(500, 500)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = 'yellow'

        this.ctx.beginPath()
        this.ctx.moveTo(600, 0)
        this.ctx.lineTo(300, 900)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawDashedLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'grey'

        this.ctx.beginPath()
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(600, 0)
        this.ctx.lineTo(600, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawText(text) {
        this.ctx.font = '50px arial'
        this.ctx.fillText(text, 100, 100)
    },
    drawArc() {
        this.ctx.strokeStyle = 'green'
        this.ctx.lineWidth = 60
        this.ctx.fillStyle = 'red'
        this.ctx.arc(500, 200, 300, 0, Math.PI)
        this.ctx.stroke()
        this.ctx.fill()
    }
}