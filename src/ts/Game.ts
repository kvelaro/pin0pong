import GameObject from "./interfaces/GameObject";
import Paddle from "./Paddle";
import Ball from "./Ball";
import Input from "./Input";
import Level from "./Level";

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {
    private readonly ctx: CanvasRenderingContext2D
    private gameWidth: number
    private gameHeight: number
    private gameObjects: Array<GameObject>
    public ball: Ball
    public paddle: Paddle
    public delete: Boolean
    public gameState: number

    constructor(ctx: CanvasRenderingContext2D, gameWidth:number, gameHeight: number) {
        this.ctx = ctx
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
    }

    public context() {
        return this.ctx
    }

    public width() {
        return this.gameWidth
    }

    public height() {
        return this.gameHeight
    }

    public start() {
        this.gameState = GAMESTATE.RUNNING
        this.paddle = new Paddle(this)
        this.ball = new Ball(this)

        let level = new Level(this)

        this.gameObjects = [
            this.paddle,
            this.ball,
            ...level.buildLevel(1)
        ]

        let input = new Input(this)
    }

    public update(deltaTime: number) {
        if(this.gameState == GAMESTATE.RUNNING) {
            this.gameObjects.forEach((object) => object.update(deltaTime))
            this.gameObjects = this.gameObjects.filter((object) => { return !object.delete})
        }
    }

    public draw() {
        this.gameObjects.forEach((object) => object.draw())
    }

    public toggle() {
        if(this.gameState == GAMESTATE.RUNNING) {
            this.gameState = GAMESTATE.PAUSED
        }
        else {
            this.gameState = GAMESTATE.RUNNING
        }
    }
}