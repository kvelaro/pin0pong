import Game from "./Game";

export default class Input {

    constructor(game: Game) {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    game.paddle.moveLeft()
                    break;
                case 'ArrowRight':
                    game.paddle.moveRight()
                    break;
                case 'Escape':
                    game.toggle()
                    break;
            }
        })

        document.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    game.paddle.stop()
                    break;
                case 'ArrowRight':
                    game.paddle.stop()
                    break;
            }
        })
    }
}