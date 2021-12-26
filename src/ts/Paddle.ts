import Position from "./interfaces/Position";
import Game from "./Game";
import GameObject from "./interfaces/GameObject";
import Size from "./interfaces/Size";

export default class Paddle implements GameObject {
    private readonly ctx: CanvasRenderingContext2D
    private color: string = '#0f0'
    private speed: number = 0
    private maxSpeed: number = 70
    private gameWidth: number
    private gameHeight: number
    public position: Position
    public size: Size
    public delete: Boolean

    constructor(gameObj: Game) {
        this.ctx = gameObj.context()
        this.size = {
            width: 150,
            height: 30
        }
        this.gameWidth = gameObj.width()
        this.gameHeight = gameObj.height()

        this.position = {
            x: this.gameWidth / 2 - this.size.width / 2,
            y: this.gameHeight - (this.size.height + 10)
        }
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
    }

    update(dt:number) {
        this.position.x += this.speed / dt

        if(this.position.x <= 0) {
            this.position.x = 0
        }
        if(this.position.x + this.size.width >= this.gameWidth) {
            this.position.x = this.gameWidth - this.size.width
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