import { Component, OnInit, Optional } from '@angular/core';
import { } from '@angular/'

import { HangmanGameState } from './hangmanGameState';
import { HangmanService } from './hangmanService/hangman.service';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HangmanService]
})
export class AppComponent implements OnInit {
  title = 'Hang Man!';
  hangmanGameState: HangmanGameState;
  snackBarShown: boolean = false;
  makingGuess: boolean = false;

  constructor(private hangmanService: HangmanService,
    private _dialog: MdDialog,
    private _snackbar: MdSnackBar) {
    this.hangmanGameState = new HangmanGameState();

    // if (window.localStorage && localStorage.hangmanGameState) {
    //   this.hangmanGameState = JSON.parse(localStorage.getItem("hangmanGameState")) as HangmanGameState;
    // }
    // else {
    //   this.hangmanGameState = new HangmanGameState();
    // }
  }

  ngOnInit(): void {
    this.getHangmanGameState();
  }
  
  showSnackbar(message: string) {
    let snackBarRef = this._snackbar.open(message, 'Start New Game!');
    this.snackBarShown = true;
    snackBarRef.onAction().subscribe(() => {
      this.snackBarShown = false;
      this.startNewHangmanGame();
    });
  }

  setHangmanGameState(hangmanGameState: HangmanGameState): void {
    this.hangmanGameState = hangmanGameState;

    // if (window.localStorage) {
    //   localStorage.setItem('hangmanGameState', JSON.stringify(hangmanGameState));
    // }

    console.log(hangmanGameState);

    if (this.snackBarShown) {
      return;
    }

    if (hangmanGameState.gameOver && hangmanGameState.incorrectGuessCount < 10) {
      let dialogRef = this._dialog.open(WinContent);
      dialogRef.afterClosed().subscribe(startNewGame => {
        if (!startNewGame) {
          this.showSnackbar("WOW SUCH WORD SKILLZ!");
          return;
        }
        this.startNewHangmanGame();
      });
    } else if (hangmanGameState.gameOver && hangmanGameState.incorrectGuessCount >= 10) {
      let dialogRef = this._dialog.open(LoseContent);
      dialogRef.afterClosed().subscribe(startNewGame => {
        if (!startNewGame) {
          this.showSnackbar("Try again?");
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
    this.hangmanService.getHangManGameState(this.hangmanGameState.id)
      .then(hangmanGameState => {
        this.setHangmanGameState(hangmanGameState);
      });
  }

  handleHangmanGameStateUpdateEvent(arg) {
    this.makingGuess = true;
    this.hangmanService.makeGuess(this.hangmanGameState, arg)
        .then(hangmanGameState => {
          this.makingGuess = false;
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
      Click the button below to start a new game, or click of this dialog to continue guessing.
    </p>
    <p> <button md-raised-button color="primary" (click)="dialogRef.close(true)">Start new Game.</button> </p>
  `,
})
export class LoseContent {
  constructor(@Optional() public dialogRef: MdDialogRef<WinContent>) { }
}
