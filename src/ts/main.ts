import Input from "./Input";
import Paddle from './Paddle'
import Ball from './Ball'

let canvas = <HTMLCanvasElement>document.getElementById('gameScreen')
let ctx = canvas.getContext('2d')

const GAME_WIDTH = 800
const GAME_HEIGHT = 600


let paddle = new Paddle(ctx, GAME_WIDTH, GAME_HEIGHT)
let ball = new Ball(ctx, GAME_WIDTH, GAME_HEIGHT)

let input = new Input(paddle)

let lastTime = 0

function gameLoop(timestamp: number) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp
    ctx.clearRect(0 ,0, GAME_WIDTH, GAME_HEIGHT)

    paddle.update(deltaTime)
    paddle.draw()

    ball.update(deltaTime)
    ball.draw()


    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)