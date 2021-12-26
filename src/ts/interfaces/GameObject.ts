import Position from "./Position";
import Size from "./Size";

export default interface GameObject {

    position: Position

    size: Size

    delete: Boolean

    update(deltatime:number):void

    draw():void
}