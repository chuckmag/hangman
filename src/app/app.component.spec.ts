import { TestBed, async } from '@angular/core/testing';

import { AppComponent, WinContent, LoseContent } from './app.component';

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

import { HiddenWordComponent } from './hiddenWord/hidden-word.component';
import { LetterGuessComponent } from './letterGuess/letter-guess.component';
import { IncorrectGuessesComponent } from './incorrectGuesses/incorrect-guesses.component';
import { HangmanService } from './hangmanService/hangman.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          HiddenWordComponent,
          LetterGuessComponent,
          IncorrectGuessesComponent,
          WinContent,
          LoseContent
        ],
        imports: [
          BrowserModule,
          FormsModule,
          HttpModule,
          BrowserAnimationsModule,
          MaterialModule,
          InMemoryWebApiModule.forRoot(InMemoryDataService),
        ],
        providers: [
          HangmanService
        ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
