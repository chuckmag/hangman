import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { HangmanGameState } from '../hangmanGameState';
import { IHangmanService } from './iHangman.service';
import { RANDOM_WORDS } from './random-words'; 

const INCORRECT_GUESS_LIMIT: number = 10;

@Injectable()
export class MockHangmanService implements IHangmanService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    private wordsUrl = 'api/words';
    private hangmanGameStateUrl = 'api/hangmanGameStates';

    private getRandomWord(): Promise<string> {
        let randomWord = RANDOM_WORDS[Math.floor(Math.random()*RANDOM_WORDS.length)];

        return Promise.resolve(randomWord);

        // const url = this.wordsUrl + '/' + randomIndex;
        // return this.http.get(url).toPromise()
        //     .then(response => response.json().data as string)
        //     .catch(this.handleError);
    }

    private initialHangmanGameState() : Promise<HangmanGameState> {
        return this.getRandomWord().then(secretWord => {
            return { hiddenWord: secretWord.replace(/([a-z])/g, '_'),
                guesses: '',
                incorrectGuesses: '',
                incorrectGuessCount: 0,
                gameOver: false,
                secretWord: secretWord
            } as HangmanGameState
        }).then(hangmanGameState => 
            this.http
                .post(this.hangmanGameStateUrl, JSON.stringify(hangmanGameState), {headers: this.headers})
                .toPromise()
                .then(res => this.maskSecretWord(res.json().data))
                .catch(this.handleError)
        );
    }

    private maskSecretWord(hangmanGameState: HangmanGameState) : HangmanGameState {
        hangmanGameState.secretWord = "";
        return hangmanGameState;
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    startHangmanGameState() : Promise<HangmanGameState> {
        return this.initialHangmanGameState();
    }

    getHangManGameState(id: string) : Promise<HangmanGameState> {

        if (!id) {
            return this.startHangmanGameState();
        }

        const url = this.hangmanGameStateUrl + '/' + id;
        return this.http.get(url).toPromise()
            .then(response => response.json().data as HangmanGameState)
            .catch(this.handleError);
    }

    makeGuess(id: string, guess: string) : Promise<HangmanGameState> {

        return this.getHangManGameState(id).then(hangmanGameState => {
            
            //all this will be handled on the node.js server but for now it is here.
            
            hangmanGameState.guesses += guess;
        
            hangmanGameState.incorrectGuesses += hangmanGameState.secretWord.indexOf(guess) === -1 ? guess : '';
            hangmanGameState.incorrectGuessCount += hangmanGameState.secretWord.indexOf(guess) === -1 ? 1 : 0;

            let hiddenWord = '';
            for (let i = 0; i < hangmanGameState.secretWord.length; i++) {
                if (hangmanGameState.guesses.indexOf(hangmanGameState.secretWord[i]) === -1) {
                    hiddenWord += '_';
                } else {
                    hiddenWord += hangmanGameState.secretWord[i];
                }
            }

            hangmanGameState.gameOver = hangmanGameState.incorrectGuessCount 
                >= INCORRECT_GUESS_LIMIT || hiddenWord.indexOf('_') === -1;
            
            hangmanGameState.hiddenWord = hiddenWord;

            const url = this.hangmanGameStateUrl + '/' + hangmanGameState._id;
            return this.http.put(url, JSON.stringify(hangmanGameState), {headers: this.headers})
                .toPromise()
                .then(() => this.maskSecretWord(hangmanGameState))
                .catch(this.handleError);
        });
    }
}