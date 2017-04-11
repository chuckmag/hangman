export class HangmanGameState {
    id: number;
    hiddenWord: string;
    guesses: string;
    incorrectGuesses: string;
    incorrectGuessCount: number;
    gameOver: boolean;
    secretWord: string;
}