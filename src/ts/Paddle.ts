import Position from "./interfaces/Position";

export default class Paddle {
    private readonly ctx: CanvasRenderingContext2D
    private readonly width: number
    private readonly height: number
    private color: string = '#0f0'
    private speed: number = 0
    private maxSpeed: number = 70
    private gameWidth: number
    private gameHeight: number
    private position: Position

    constructor(ctx: CanvasRenderingContext2D, gameWidth:number, gameHeight:number) {
        this.ctx = ctx
        this.width = 150
        this.height = 30
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - (this.height + 10)
        }
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(dt:number) {
        this.position.x += this.speed / dt

        if(this.position.x <= 0) {
            this.position.x = 0
        }
        if(this.position.x + this.width >= this.gameWidth) {
            this.position.x = this.gameWidth - this.width
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed
    }

    moveRight() {
        this.speed = this.maxSpeed
    }

    stop() {
        this.speed = 0
    }
}