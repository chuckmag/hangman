import { Injectable } from '@angular/core';
import { HangmanGameState } from '../hangmanGameState';

@Injectable()
export class HangmanService {
    getHangManGameState() : Promise<HangmanGameState> {
        return Promise.resolve({hiddenWord: '_ _ _ _ _', guesses: 'adfjurl' });
    }
}