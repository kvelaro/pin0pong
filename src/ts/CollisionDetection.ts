import Ball from "./Ball";
import GameObject from "./interfaces/GameObject";

export function CollisionDetection(ball: Ball, gameObj: GameObject) {
    let bottomOfBall = ball.position.y + ball.size.height
    let topOfBall = ball.position.y

    let topOfObject = gameObj.position.y
    let leftSideOfObject = gameObj.position.x
    let rightSideOfObject = gameObj.position.x + gameObj.size.width
    let bottomOfObject = gameObj.position.y + gameObj.size.height

    if(
        bottomOfBall >= topOfObject &&
        topOfBall <= bottomOfObject &&
        ball.position.x >= leftSideOfObject &&
        ball.position.x + ball.size.width <= rightSideOfObject
    ) {
        return true
    }
    return false
}