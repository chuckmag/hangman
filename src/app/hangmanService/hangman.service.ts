import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { HangmanGameState } from '../hangmanGameState';
import { IHangmanService } from './iHangman.service';
import { RANDOM_WORDS } from './random-words'; 

const INCORRECT_GUESS_LIMIT: number = 10;

@Injectable()
export class HangmanService implements IHangmanService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    private hangmanGameStateUrl = '/api/hangmanGameState';
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    startHangmanGameState() : Promise<HangmanGameState> {
        return this.http.get(this.hangmanGameStateUrl).toPromise()
            .then(response => response.json().data as HangmanGameState)
            .catch(this.handleError);
    }

    getHangManGameState(id: string) : Promise<HangmanGameState> {

        if (!id) {
            return Promise.reject("id must be valid");
        }

        const url = this.hangmanGameStateUrl + '/' + id;
        return this.http.get(url).toPromise()
            .then(response => response.json().data as HangmanGameState)
            .catch(this.handleError);
    }

    makeGuess(id: string, guess: string) : Promise<HangmanGameState> {
        const url = this.hangmanGameStateUrl + '/' + id;
        return this.http.put(url, JSON.stringify(guess), {headers: this.headers})
            .toPromise()
            .then(response => response.json().data as HangmanGameState)
            .catch(this.handleError);
    }
}