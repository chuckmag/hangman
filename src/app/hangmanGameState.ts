export class HangmanGameState {
    _id: string;
    hiddenWord: string;
    guesses: string;
    incorrectGuesses: string;
    incorrectGuessCount: number;
    gameOver: boolean;
    secretWord: string;
}