import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'letter-guess',
  templateUrl: './letter-guess.component.html',
  styleUrls: ['./letter-guess.component.css']
})

export class LetterGuessComponent {
  @Input() guesses: string = "";
  @Input() makingGuess: boolean = false;

  @Output() makeGuessEvent: EventEmitter<string> = new EventEmitter();
  ALPHABET: string = "abcdefghijklmnopqrstuvwxyz";

  constructor() {
    this.guesses = "";
  }

  onLetterSelect(letter: string): void {
      if (this.makingGuess) {
          return;
      }
    console.log(letter);
    this.guesses += letter;
    this.makeGuessEvent.next(letter);
  };
}
