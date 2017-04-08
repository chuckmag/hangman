import { Injectable } from '@angular/core';
import { HangmanGameState } from '../hangmanGameState';

@Injectable()
export class HangmanService {
    secretWord: string;
    hangManGameState: HangmanGameState = this.initialHangmentGameState();

    private initialHangmentGameState() : HangmanGameState {
        this.secretWord = 'build';
        return { hiddenWord: this.secretWord.replace(/([a-z])/g, '_'),
            guesses: '',
            incorrectGuesses: '',
            sessionId: '1',
            incorrectGuessCount: 0 };
    }

    getHangManGameState() : Promise<HangmanGameState> {
        return Promise.resolve(this.hangManGameState);
    }
    makeGuess(guess: string) : Promise<HangmanGameState> {
        this.hangManGameState.guesses += guess;
        
        this.hangManGameState.incorrectGuesses += this.secretWord.indexOf(guess) === -1 ? guess : '';
        this.hangManGameState.incorrectGuessCount += this.secretWord.indexOf(guess) === -1 ? 1 : 0;

        let hiddenWord = '';
        for (let i = 0; i < this.secretWord.length; i++) {
            if (this.hangManGameState.guesses.indexOf(this.secretWord[i]) === -1) {
                hiddenWord += '_';
            } else {
                hiddenWord += this.secretWord[i];
            }
        }

        let re = new RegExp("!([" + this.hangManGameState.guesses + "])", "g");
        this.hangManGameState.hiddenWord = hiddenWord;
        return Promise.resolve(this.hangManGameState);
    }
}