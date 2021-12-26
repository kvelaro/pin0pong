import Position from "./interfaces/Position";
import Speed from "./interfaces/Speed";
import Size from "./interfaces/Size";
import Game from "./Game";
import GameObject from "./interfaces/GameObject";
import {CollisionDetection} from "./CollisionDetection";

export default class Live implements GameObject{
    private game: Game
    private image: CanvasImageSource
    public size: Size
    public position: Position
    public speed: Speed
    public delete: Boolean
    public remain: number
    constructor(game: Game) {
        this.game = game
        this.image = <CanvasImageSource>document.getElementById('heart')
        this.size = { width: 40, height: 40 }
        this.position  = { x: 30 , y: 30 }
        this.speed = { x: 0, y: 0 }
        this.remain = 10
    }

    draw() {
        this.game.context().drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height)

        this.game.context().fillStyle = '#000'
        this.game.context().font = '25px Arial'

        this.game.context().fillText(<string>(<unknown> this.remain), this.position.x + this.size.width, this.position.y + this.size.height / 2)
    }

    update(dt:number) {

    }
}