import { HangmanGameState } from '../hangmanGameState';

export interface IHangmanService {
    startHangmanGameState() : Promise<HangmanGameState>;
    getHangManGameState(id: string) : Promise<HangmanGameState>;
    makeGuess(id: string, guess: string) : Promise<HangmanGameState>;
}