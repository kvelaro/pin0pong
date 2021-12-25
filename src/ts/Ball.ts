import Position from "./interfaces/Position";
import Speed from "./interfaces/Speed";
import Size from "./interfaces/Size";
import Game from "./Game";
import GameObject from "./interfaces/GameObject";

export default class Ball implements GameObject{
    private game: Game
    private image: CanvasImageSource
    private size: Size
    private position: Position
    private speed: Speed
    constructor(game: Game) {
        this.game = game
        this.image = <CanvasImageSource>document.getElementById('ball')
        this.size = { width: 20, height: 20 }
        this.position  = { x: 10, y: 10 }
        this.speed = { x: 2, y: 2 }
    }

    draw() {
        this.game.context().drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height)
    }

    update(dt:number) {
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        if(this.position.x + this.size.width > this.game.width() || this.position.x < 0) {
            this.speed.x = -this.speed.x
        }

        if(this.position.y + this.size.height > this.game.height() || this.position.y < 0) {
            this.speed.y = -this.speed.y
        }

        let bottomOfBall = this.position.y + this.size.height
        let topOfPaddle = this.game.paddle.position.y
        let leftSideOfPaddle = this.game.paddle.position.x
        let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.size.width

        if(
            bottomOfBall >= topOfPaddle &&
            this.position.x >= leftSideOfPaddle &&
            this.position.x <= rightSideOfPaddle
        ) {
            this.speed.y = -this.speed.y
        }
    }
}