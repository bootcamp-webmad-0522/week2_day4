const canvasApp = {
    name: 'Basic canvas application',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    description: 'Canvas app for basic shapes controlling',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    dromedaries: [],
    framesIndex: 0,             // ayudita para obstáculos
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimensions(canvasId)
        this.createAll()
        this.drawAll()
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },
    createAll() {
        this.dromedaries.push(
            new Dromedary(this.ctx, 10, 10, 200, 8, this.canvasSize),
            new Dromedary(this.ctx, 10, 500, 200, 10, this.canvasSize),
            new Dromedary(this.ctx, 10, 200, 100, 15, this.canvasSize),
            new Dromedary(this.ctx, 10, 600, 100, 18, this.canvasSize),
            new Dromedary(this.ctx, 10, 400, 300, 20, this.canvasSize)
        )
    },
    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.dromedaries.forEach(elm => elm.draw())

            this.framesIndex++
            if (this.framesIndex % 50 === 0) {
                this.generateObstacle()
            }
        }, 50)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    generateObstacle() {
        console.warn('AQUI DEBERÍAS GENERAR UN OBSTÁCULO')
    }
}