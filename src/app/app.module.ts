import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent, WinContent, LoseContent } from './app.component';
import { HiddenWordComponent } from './hiddenWord/hidden-word.component';
import { LetterGuessComponent } from './letterGuess/letter-guess.component';
import { IncorrectGuessesComponent } from './incorrectGuesses/incorrect-guesses.component';

import { IHangmanService } from './hangmanService/iHangman.service';
import { HangmanService } from './hangmanService/hangman.service';
import { MockHangmanService } from './hangmanService/mockHangman.service';

var providers = [];
var imports = [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ];
function enableProd(enable) {
    if (enable) {
        providers.push({ provide: 'IHangmanService', useClass: HangmanService });
    } else {
        providers.push({ provide: 'IHangmanService', useClass: MockHangmanService });
        //imports.push(InMemoryWebApiModule.forRoot(InMemoryDataService));
    }
}
enableProd(true);


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
  imports: imports,
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
