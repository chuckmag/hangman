import { Component, OnInit } from '@angular/core';

import { HangmanGameState } from './hangmanGameState';
import { HangmanService } from './hangmanService/hangman.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HangmanService]
})
export class AppComponent implements OnInit {
  title = 'Hang Man!';
  hangmanGameState: HangmanGameState;

  constructor(private hangmanService: HangmanService) {
    this.hangmanGameState = new HangmanGameState();
  }

  getHangmanGameState(): void {

    this.hangmanService.getHangManGameState()
      .then(hangmanGameState => this.hangmanGameState = hangmanGameState);
  }

  ngOnInit(): void {
    this.getHangmanGameState();
  }
}
