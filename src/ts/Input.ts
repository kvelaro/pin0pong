import Paddle from "./Paddle"

export default class Input {
    constructor(paddle: Paddle) {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    paddle.moveLeft()
                    break;
                case 'ArrowRight':
                    paddle.moveRight()
                    break;
            }
        })

        document.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    paddle.stop()
                    break;
                case 'ArrowRight':
                    paddle.stop()
                    break;
            }
        })
    }
}