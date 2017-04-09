import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, WinContent, LoseContent } from './app.component';
import { HiddenWordComponent } from './hiddenWord/hidden-word.component';
import { LetterGuessComponent } from './letterGuess/letter-guess.component';
import { IncorrectGuessesComponent } from './incorrectGuesses/incorrect-guesses.component';

@NgModule({
  declarations: [
    AppComponent,
    HiddenWordComponent,
    LetterGuessComponent,
    IncorrectGuessesComponent,
    WinContent,
    LoseContent
  ],
  entryComponents: [
    WinContent,
    LoseContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
