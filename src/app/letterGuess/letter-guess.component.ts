import { Component, Input } from '@angular/core';


@Component({
  selector: 'letter-guess',
  templateUrl: './letter-guess.component.html',
  styleUrls: ['./letter-guess.component.css']
})

export class LetterGuessComponent {
  @Input() guesses: string;
  ALPHABET: string = "abcdefghijklmnopqrstuvwxyz";
  onLetterSelect(letter: string): void {

      console.log(letter);
  };
}
