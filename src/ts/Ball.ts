import Position from "./interfaces/Position";
import Speed from "./interfaces/Speed";
import Size from "./interfaces/Size";

export default class Ball {
    private ctx: CanvasRenderingContext2D
    private gameWidth: number
    private gameHeight: number
    private image: CanvasImageSource
    private size: Size
    private position: Position
    private speed: Speed
    constructor(ctx: CanvasRenderingContext2D, gameWidth:number, gameHeight:number) {
        this.ctx = ctx
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.image = <CanvasImageSource>document.getElementById('ball')
        this.size = { width: 20, height: 20 }
        this.position  = { x: 10, y: 10 }
        this.speed = { x: 2, y: 2 }
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height)
    }

    update(dt:number) {
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        if(this.position.x + this.size.width > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x
        }

        if(this.position.y + this.size.height > this.gameHeight || this.position.y < 0) {
            this.speed.y = -this.speed.y
        }


    }
}