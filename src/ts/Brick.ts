import Position from "./interfaces/Position";
import Speed from "./interfaces/Speed";
import Size from "./interfaces/Size";
import Game from "./Game";
import GameObject from "./interfaces/GameObject";

export default class Brick implements GameObject {
    private game: Game
    private image: CanvasImageSource
    public size: Size = { width: 52, height: 30 }
    private position: Position

    constructor(game: Game, position: Position) {
        this.game = game
        this.image = <CanvasImageSource>document.getElementById('brick')
        this.position  = position
    }

    draw() {
        this.game.context().drawImage(this.image, this.position.x, this.position.y, this.size.width, this.size.height)
    }

    update(dt:number) {

    }
}