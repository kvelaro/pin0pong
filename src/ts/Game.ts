import Paddle from "./Paddle";
import Ball from "./Ball";
import Input from "./Input";
import GameObject from "./interfaces/GameObject";

export default class Game {
    private readonly ctx: CanvasRenderingContext2D
    private gameWidth: number
    private gameHeight: number
    private gameObjects: Array<GameObject>
    private ball: Ball
    private paddle: Paddle

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
        this.paddle = new Paddle(this)
        this.ball = new Ball(this)

        this.gameObjects = [
            this.ball,
            this.paddle
        ]

        let input = new Input(this.paddle)
    }

    public update(deltaTime: number) {
        this.gameObjects.forEach((object) => object.update(deltaTime))
    }

    public draw() {
        this.gameObjects.forEach((object) => object.draw())
    }
}