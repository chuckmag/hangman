import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'letter-guess',
  templateUrl: './letter-guess.component.html',
  styleUrls: ['./letter-guess.component.css']
})

export class LetterGuessComponent {
  @Input() guesses: string = "";
  guessesin: string = "";
  @Output() makeGuessEvent: EventEmitter<string> = new EventEmitter();
  ALPHABET: string = "abcdefghijklmnopqrstuvwxyz";

  constructor() {
    this.guesses = "";
  }

  onLetterSelect(letter: string): void {
    console.log(letter);
    this.guesses += letter;
    this.makeGuessEvent.next(letter);
  };
}
