import { Component, OnInit, Optional } from '@angular/core';

import { HangmanGameState } from './hangmanGameState';
import { HangmanService } from './hangmanService/hangman.service';

import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HangmanService]
})
export class AppComponent implements OnInit {
  title = 'Hang Man!';
  hangmanGameState: HangmanGameState;

  constructor(private hangmanService: HangmanService, private _dialog: MdDialog) {
    this.hangmanGameState = new HangmanGameState();
  }

  ngOnInit(): void {
    this.getHangmanGameState();
  }

  setHangmanGameState(hangmanGameState: HangmanGameState): void {
    this.hangmanGameState = hangmanGameState;
    console.log(hangmanGameState);

    if (hangmanGameState.gameOver && hangmanGameState.incorrectGuessCount < 10) {
      let dialogRef = this._dialog.open(WinContent);
      dialogRef.afterClosed().subscribe(startNewGame => {
        if (!startNewGame) {
          return;
        }
        this.startNewHangmanGame();
      });
    } else if (hangmanGameState.gameOver && hangmanGameState.incorrectGuessCount >= 10) {
      let dialogRef = this._dialog.open(LoseContent);
      dialogRef.afterClosed().subscribe(startNewGame => {
        if (!startNewGame) {
          return;
        }
        this.startNewHangmanGame();
      });
    }
  }

  startNewHangmanGame(): void {
    this.hangmanService.startHangmanGameState()
      .then(hangmanGameState => {
        this.setHangmanGameState(hangmanGameState)
      });
  }

  getHangmanGameState(): void {
    this.hangmanService.getHangManGameState()
      .then(hangmanGameState => {
        this.setHangmanGameState(hangmanGameState);
      });
  }

  handleHangmanGameStateUpdateEvent(arg) {
    this.hangmanService.makeGuess(arg)
        .then(hangmanGameState => {
          this.setHangmanGameState(hangmanGameState);
      });
  }
}

@Component({
  template: `
    <h1>You won!</h1>
    <p>
      Click the button below to start a new game.
    </p>
    <p> <button md-raised-button color="primary" (click)="dialogRef.close(true)">Start new Game.</button> </p>
  `,
})
export class WinContent {
  constructor(@Optional() public dialogRef: MdDialogRef<WinContent>) { }
}


@Component({
  template: `
    <h1>OH NO! You lost.</h1>
    <p>
      Click the button below to start a new game.
    </p>
    <p> <button md-raised-button color="primary" (click)="dialogRef.close(true)">Start new Game.</button> </p>
  `,
})
export class LoseContent {
  constructor(@Optional() public dialogRef: MdDialogRef<WinContent>) { }
}
