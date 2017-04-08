import { Component, Input, Output, EventEmitter } from '@angular/core';

import { HangmanGameState } from '../hangmanGameState';
import { HangmanService } from '../hangmanService/hangman.service';


@Component({
  selector: 'letter-guess',
  templateUrl: './letter-guess.component.html',
  styleUrls: ['./letter-guess.component.css'],
  providers: [HangmanService]
})

export class LetterGuessComponent {
  @Input() guesses: string = "";
  @Output() makeGuessEvent: EventEmitter<HangmanGameState> = new EventEmitter();
  ALPHABET: string = " abcdefghijklmnopqrstuvwxyz";

  constructor(private hangmanService: HangmanService) {
    this.guesses = "";
  }

  onLetterSelect(letter: string): void {

      console.log(letter);
      this.guesses += letter;
      this.hangmanService.makeGuess(letter)
        .then(hangmanGameState => {
        this.guesses = hangmanGameState.guesses;
        this.makeGuessEvent.next(hangmanGameState);
        console.log(hangmanGameState.hiddenWord);
        console.log(hangmanGameState.incorrectGuessCount);
    });
  };
}
