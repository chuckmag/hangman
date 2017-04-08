import { Component, Input } from '@angular/core';

@Component({
  selector: 'incorrect-guesses',
  templateUrl: './incorrect-guesses.component.html',
  styleUrls: ['./incorrect-guesses.component.css']
})

export class IncorrectGuessesComponent {
  @Input() incorrectGuesses: string = '';
  @Input() incorrectGuessCount: number = 0; 
}
