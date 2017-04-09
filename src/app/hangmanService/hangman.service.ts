import { Injectable } from '@angular/core';
import { HangmanGameState } from '../hangmanGameState';
import { RANDOM_WORDS } from './random-words'; 

const INCORRECT_GUESS_LIMIT: number = 10;
@Injectable()
export class HangmanService {
    secretWord: string  ;
    hangManGameState: HangmanGameState;

    constructor() {
        this.hangManGameState = this.initialHangmentGameState();
    }

    private getRandomWord(): string {
        return RANDOM_WORDS[Math.floor(Math.random()*RANDOM_WORDS.length)];
    }

    private initialHangmentGameState() : HangmanGameState {
        this.secretWord = this.getRandomWord();
        return { hiddenWord: this.secretWord.replace(/([a-z])/g, '_'),
            guesses: '',
            incorrectGuesses: '',
            sessionId: '1',
            incorrectGuessCount: 0,
            gameOver: false
        };
    }

    startHangmanGameState() : Promise<HangmanGameState> {
        this.hangManGameState = this.initialHangmentGameState();
        return Promise.resolve(this.hangManGameState);
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

        this.hangManGameState.gameOver = this.hangManGameState.incorrectGuessCount 
            >= INCORRECT_GUESS_LIMIT || hiddenWord.indexOf('_') === -1;
        
        this.hangManGameState.hiddenWord = hiddenWord;
        return Promise.resolve(this.hangManGameState);
    }
}