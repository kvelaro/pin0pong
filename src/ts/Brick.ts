import Position from "./interfaces/Position";
import Size from "./interfaces/Size";
import Game from "./Game";
import GameObject from "./interfaces/GameObject";
import {CollisionDetection} from "./CollisionDetection";

export default class Brick implements GameObject {
    private game: Game
    private image: CanvasImageSource
    public size: Size = { width: 52, height: 30 }
    public position: Position
    public delete: Boolean

    constructor(game: Game, position: Position) {
        this.game = game
        this.image = <CanvasImageSource>document.getElementById('brick')
        this.position  = position
        this.delete = false
    }

    draw() {
        this.game.context().drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height)
    }

    update(dt:number) {
        if(CollisionDetection(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y
            this.delete = true
        }
    }
}