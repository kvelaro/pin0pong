import Brick from "./Brick";
import Game from "./Game";

export default class Level {
    private readonly LEVEL1:{[index: string]: any} = [
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ],
        [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
    ]

    private game: Game;
    constructor(game: Game) {
        this.game = game
    }

    buildLevel(level: number):Array<Brick> {
        let bricks:Array<Brick> = []
        let lvl = `LEVEL1`
        this['LEVEL1'].forEach((row: Array<number>, rowIdx: number) => {
            row.forEach((value: number, valueIdx: number) => {
                if(value == 1) {
                    let brick = new Brick(this.game, { x: valueIdx * 52, y: rowIdx * 30 + 50 })
                    bricks.push(brick)
                }
            })
        })
        return bricks
    }
}