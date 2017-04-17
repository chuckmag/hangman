webpackJsonp([1,4],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "md-sidenav-layout.m2app-dark {\r\n  background: black;\r\n}\r\n\r\n.app-content {\r\n  padding: 20px;\r\n}\r\n\r\n.mat-card {\r\n  margin: 20px;\r\n}\r\n\r\n.app-sidenav {\r\n  padding: 10px;\r\n  min-width: 100px;\r\n}\r\n\r\n.app-content md-checkbox {\r\n  margin: 10px;\r\n}\r\n\r\n.app-toolbar-filler {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.app-toolbar-menu {\r\n  padding: 0 14px 0 14px;\r\n  color: white;\r\n}\r\n\r\n.app-icon-button {\r\n  box-shadow: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  -webkit-filter: none;\r\n          filter: none;\r\n  font-weight: normal;\r\n  height: auto;\r\n  line-height: inherit;\r\n  margin: 0;\r\n  min-width: 0;\r\n  padding: 0;\r\n  text-align: left;\r\n  text-decoration: none;\r\n}\r\n\r\n.app-action {\r\n  display: inline-block;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.app-spinner {\r\n  height: 30px;\r\n  width: 30px;\r\n  display: inline-block;\r\n}\r\n\r\n.app-input-icon {\r\n  font-size: 16px;\r\n}\r\n\r\n.app-list {\r\n  border: 1px solid rgba(0,0,0,0.12);\r\n  width: 350px;\r\n  margin: 20px;\r\n}\r\n\r\n.app-progress {\r\n  margin: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".mat-card {\r\n  margin: 20px;\r\n}\r\n\r\n.word {\r\n    letter-spacing: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".mat-card {\r\n  margin: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".mat-card {\r\n  margin: 20px;\r\n}\r\n\r\nbutton {\r\n    margin: 3px;\r\n}\r\n\r\ndiv {\r\n    display: inline-block\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\n    <i class=\"material-icons app-toolbar-menu\">menu</i>\n  </button>\n\n  \n  {{title}}\n\n  <span class=\"app-toolbar-filler\"></span>\n</md-toolbar>\n<div class=\"app-content\">\n  <incorrect-guesses [incorrectGuesses]=\"hangmanGameState.incorrectGuesses\"\n    [incorrectGuessCount]=\"hangmanGameState.incorrectGuessCount\"></incorrect-guesses>\n  <hidden-word [word]=\"hangmanGameState.hiddenWord\"></hidden-word>\n  <letter-guess [guesses]=\"hangmanGameState.guesses\" [makingGuess]=\"makingGuess\" (makeGuessEvent)=\"handleHangmanGameStateUpdateEvent($event)\" ></letter-guess>\n</div>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <h1 class=\"word\">\r\n    {{word}}\r\n  </h1>\r\n</md-card>\r\n"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  <div [ngSwitch]=\"incorrectGuessCount\">\r\n    <img *ngSwitchCase=\"0\" src=\"./assets/hangman0.png\" >\r\n    <img *ngSwitchCase=\"1\" src=\"./assets/hangman1.png\" >\r\n    <img *ngSwitchCase=\"2\" src=\"./assets/hangman2.png\" >\r\n    <img *ngSwitchCase=\"3\" src=\"./assets/hangman3.png\" >\r\n    <img *ngSwitchCase=\"4\" src=\"./assets/hangman4.png\" >\r\n    <img *ngSwitchCase=\"5\" src=\"./assets/hangman5.png\" >\r\n    <img *ngSwitchCase=\"6\" src=\"./assets/hangman6.png\" >\r\n    <img *ngSwitchCase=\"7\" src=\"./assets/hangman7.png\" >\r\n    <img *ngSwitchCase=\"8\" src=\"./assets/hangman8.png\" >\r\n    <img *ngSwitchCase=\"9\" src=\"./assets/hangman9.png\" >\r\n    <img *ngSwitchCase=\"10\" src=\"./assets/hangman10.png\" >\r\n    <img *ngSwitchDefault src=\"./assets/hangman10.png\" >\r\n  </div>\r\n  \r\n  <div>\r\n    <h1>Incorrect Guesses : {{incorrectGuesses}}\r\n    </h1>\r\n  </div>\r\n</md-card>\r\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"'undefined' !== typeof guesses\">\r\n  <h1>Guesses : {{guesses}}</h1>\r\n  \r\n  <div *ngFor=\"let letter of ALPHABET.split('')\">\r\n    <button *ngIf=\"guesses?.indexOf(letter) === -1; else elseBlock\"  \r\n    (click)=\"onLetterSelect(letter)\"\r\n    md-raised-button color=\"primary\">{{letter}}\r\n    </button>\r\n    <ng-template #elseBlock>\r\n      <button md-raised-button color=\"accent\">{{letter}}\r\n      </button>\r\n    </ng-template>\r\n  </div>\r\n</md-card>\r\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HangmanService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var INCORRECT_GUESS_LIMIT = 10;
var HangmanService = (function () {
    function HangmanService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.hangmanGameStateUrl = '/api/hangmanGameState';
    }
    HangmanService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HangmanService.prototype.startHangmanGameState = function () {
        return this.http.get(this.hangmanGameStateUrl).toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HangmanService.prototype.getHangManGameState = function (id) {
        if (!id) {
            return Promise.reject("id must be valid");
        }
        var url = this.hangmanGameStateUrl + '/' + id;
        return this.http.get(url).toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HangmanService.prototype.makeGuess = function (id, guess) {
        var url = this.hangmanGameStateUrl + '/' + id;
        return this.http.put(url, JSON.stringify({ guess: guess }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    return HangmanService;
}());
HangmanService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HangmanService);

var _a;
//# sourceMappingURL=hangman.service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 83;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(99);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hangmanGameState__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hangmanService_hangman_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WinContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoseContent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



// Can not get the dependency injector to work the way 
// I would like, going to table that
//import { IHangmanService } from './hangmanService/iHangman.service';

var AppComponent = (function () {
    function AppComponent(hangmanService, _dialog, _snackbar) {
        this.hangmanService = hangmanService;
        this._dialog = _dialog;
        this._snackbar = _snackbar;
        this.title = 'Hang Man!';
        this.snackBarShown = false;
        this.makingGuess = false;
        this.hangmanGameState = new __WEBPACK_IMPORTED_MODULE_1__hangmanGameState__["a" /* HangmanGameState */]();
        if (window.localStorage && localStorage.hangmanGameState) {
            this.hangmanGameState = JSON.parse(localStorage.getItem("hangmanGameState"));
        }
        else {
            this.hangmanGameState = new __WEBPACK_IMPORTED_MODULE_1__hangmanGameState__["a" /* HangmanGameState */]();
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getHangmanGameState();
    };
    AppComponent.prototype.showSnackbar = function (message) {
        var _this = this;
        var snackBarRef = this._snackbar.open(message, 'Start New Game!');
        this.snackBarShown = true;
        snackBarRef.onAction().subscribe(function () {
            _this.snackBarShown = false;
            _this.startNewHangmanGame();
        });
    };
    AppComponent.prototype.setHangmanGameState = function (hangmanGameState) {
        var _this = this;
        this.hangmanGameState = hangmanGameState;
        if (window.localStorage) {
            localStorage.setItem('hangmanGameState', JSON.stringify(hangmanGameState));
        }
        console.log(hangmanGameState);
        if (this.snackBarShown) {
            return;
        }
        if (hangmanGameState.gameOver && hangmanGameState.incorrectGuessCount < 10) {
            var dialogRef = this._dialog.open(WinContent);
            dialogRef.afterClosed().subscribe(function (startNewGame) {
                if (!startNewGame) {
                    _this.showSnackbar("WOW SUCH WORD SKILLZ!");
                    return;
                }
                _this.startNewHangmanGame();
            });
        }
        else if (hangmanGameState.gameOver && hangmanGameState.incorrectGuessCount >= 10) {
            var dialogRef = this._dialog.open(LoseContent);
            dialogRef.afterClosed().subscribe(function (startNewGame) {
                if (!startNewGame) {
                    _this.showSnackbar("Try again?");
                    return;
                }
                _this.startNewHangmanGame();
            });
        }
    };
    AppComponent.prototype.startNewHangmanGame = function () {
        var _this = this;
        this.hangmanService.startHangmanGameState()
            .then(function (hangmanGameState) {
            _this.setHangmanGameState(hangmanGameState);
        });
    };
    AppComponent.prototype.getHangmanGameState = function () {
        var _this = this;
        if (!this.hangmanGameState._id) {
            this.startNewHangmanGame();
            return;
        }
        this.hangmanService.getHangManGameState(this.hangmanGameState._id)
            .then(function (hangmanGameState) {
            _this.setHangmanGameState(hangmanGameState);
        });
    };
    AppComponent.prototype.handleHangmanGameStateUpdateEvent = function (arg) {
        var _this = this;
        this.makingGuess = true;
        this.hangmanService.makeGuess(this.hangmanGameState._id, arg)
            .then(function (hangmanGameState) {
            _this.makingGuess = false;
            _this.setHangmanGameState(hangmanGameState);
        })
            .catch(function (error) {
            _this.makingGuess = false;
            _this.setHangmanGameState(_this.hangmanGameState);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(159),
        styles: [__webpack_require__(153)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__hangmanService_hangman_service__["a" /* HangmanService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__hangmanService_hangman_service__["a" /* HangmanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__hangmanService_hangman_service__["a" /* HangmanService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdSnackBar */]) === "function" && _c || Object])
], AppComponent);

var WinContent = (function () {
    function WinContent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return WinContent;
}());
WinContent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: "\n    <h1>You won!</h1>\n    <p>\n      Click the button below to start a new game.\n    </p>\n    <p> <button md-raised-button color=\"primary\" (click)=\"dialogRef.close(true)\">Start new Game.</button> </p>\n  ",
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogRef */]) === "function" && _d || Object])
], WinContent);

var LoseContent = (function () {
    function LoseContent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return LoseContent;
}());
LoseContent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: "\n    <h1>OH NO! You lost.</h1>\n    <p>\n      Click the button below to start a new game, or click of this dialog to continue guessing.\n    </p>\n    <p> <button md-raised-button color=\"primary\" (click)=\"dialogRef.close(true)\">Start new Game.</button> </p>\n  ",
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogRef */]) === "function" && _e || Object])
], LoseContent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hiddenWord_hidden_word_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__letterGuess_letter_guess_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__incorrectGuesses_incorrect_guesses_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hangmanService_hangman_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hangmanService_mockHangman_service__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var providers = [];
var imports = [
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */]
];
function enableProd(enable) {
    if (enable) {
        providers.push({ provide: 'IHangmanService', useClass: __WEBPACK_IMPORTED_MODULE_11__hangmanService_hangman_service__["a" /* HangmanService */] });
    }
    else {
        providers.push({ provide: 'IHangmanService', useClass: __WEBPACK_IMPORTED_MODULE_12__hangmanService_mockHangman_service__["a" /* MockHangmanService */] });
        //imports.push(InMemoryWebApiModule.forRoot(InMemoryDataService));
    }
}
enableProd(true);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__hiddenWord_hidden_word_component__["a" /* HiddenWordComponent */],
            __WEBPACK_IMPORTED_MODULE_9__letterGuess_letter_guess_component__["a" /* LetterGuessComponent */],
            __WEBPACK_IMPORTED_MODULE_10__incorrectGuesses_incorrect_guesses_component__["a" /* IncorrectGuessesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* WinContent */],
            __WEBPACK_IMPORTED_MODULE_7__app_component__["c" /* LoseContent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* WinContent */],
            __WEBPACK_IMPORTED_MODULE_7__app_component__["c" /* LoseContent */]
        ],
        imports: imports,
        providers: providers,
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HangmanGameState; });
var HangmanGameState = (function () {
    function HangmanGameState() {
    }
    return HangmanGameState;
}());

//# sourceMappingURL=hangmanGameState.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__random_words__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockHangmanService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var INCORRECT_GUESS_LIMIT = 10;
var MockHangmanService = (function () {
    function MockHangmanService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.wordsUrl = 'api/words';
        this.hangmanGameStateUrl = 'api/hangmanGameStates';
    }
    MockHangmanService.prototype.getRandomWord = function () {
        var randomWord = __WEBPACK_IMPORTED_MODULE_3__random_words__["a" /* RANDOM_WORDS */][Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_3__random_words__["a" /* RANDOM_WORDS */].length)];
        return Promise.resolve(randomWord);
        // const url = this.wordsUrl + '/' + randomIndex;
        // return this.http.get(url).toPromise()
        //     .then(response => response.json().data as string)
        //     .catch(this.handleError);
    };
    MockHangmanService.prototype.initialHangmanGameState = function () {
        var _this = this;
        return this.getRandomWord().then(function (secretWord) {
            return { hiddenWord: secretWord.replace(/([a-z])/g, '_'),
                guesses: '',
                incorrectGuesses: '',
                incorrectGuessCount: 0,
                gameOver: false,
                secretWord: secretWord
            };
        }).then(function (hangmanGameState) {
            return _this.http
                .post(_this.hangmanGameStateUrl, JSON.stringify(hangmanGameState), { headers: _this.headers })
                .toPromise()
                .then(function (res) { return _this.maskSecretWord(res.json().data); })
                .catch(_this.handleError);
        });
    };
    MockHangmanService.prototype.maskSecretWord = function (hangmanGameState) {
        hangmanGameState.secretWord = "";
        return hangmanGameState;
    };
    MockHangmanService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MockHangmanService.prototype.startHangmanGameState = function () {
        return this.initialHangmanGameState();
    };
    MockHangmanService.prototype.getHangManGameState = function (id) {
        if (!id) {
            return this.startHangmanGameState();
        }
        var url = this.hangmanGameStateUrl + '/' + id;
        return this.http.get(url).toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    MockHangmanService.prototype.makeGuess = function (id, guess) {
        var _this = this;
        return this.getHangManGameState(id).then(function (hangmanGameState) {
            //all this will be handled on the node.js server but for now it is here.
            hangmanGameState.guesses += guess;
            hangmanGameState.incorrectGuesses += hangmanGameState.secretWord.indexOf(guess) === -1 ? guess : '';
            hangmanGameState.incorrectGuessCount += hangmanGameState.secretWord.indexOf(guess) === -1 ? 1 : 0;
            var hiddenWord = '';
            for (var i = 0; i < hangmanGameState.secretWord.length; i++) {
                if (hangmanGameState.guesses.indexOf(hangmanGameState.secretWord[i]) === -1) {
                    hiddenWord += '_';
                }
                else {
                    hiddenWord += hangmanGameState.secretWord[i];
                }
            }
            hangmanGameState.gameOver = hangmanGameState.incorrectGuessCount
                >= INCORRECT_GUESS_LIMIT || hiddenWord.indexOf('_') === -1;
            hangmanGameState.hiddenWord = hiddenWord;
            var url = _this.hangmanGameStateUrl + '/' + hangmanGameState._id;
            return _this.http.put(url, JSON.stringify(hangmanGameState), { headers: _this.headers })
                .toPromise()
                .then(function () { return _this.maskSecretWord(hangmanGameState); })
                .catch(_this.handleError);
        });
    };
    return MockHangmanService;
}());
MockHangmanService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MockHangmanService);

var _a;
//# sourceMappingURL=mockHangman.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RANDOM_WORDS; });
var RANDOM_WORDS = [
    'plantation',
    'curtain',
    'billowy',
    'balance',
    'available',
    'shape',
    'nervous',
    'ear',
    'irritating',
    'pinch',
    'smile',
    'advice',
    'wash',
    'vase',
    'parched',
    'rice',
    'death',
    'train',
    'hop',
    'quixotic',
    'innate',
    'fascinated',
    'pathetic',
    'direful',
    'steadfast',
    'canvas',
    'driving',
    'sticks',
    'bathe',
    'satisfy',
    'open',
    'wave',
    'quickest',
    'sassy',
    'shame',
    'kettle',
    'crazy',
    'flock',
    'number',
    'dog',
    'comb',
    'abhorrent',
    'face',
    'smash',
    'past',
    'protest',
    'appliance',
    'obey',
    'lick',
    'alert',
    'gullible',
    'dislike',
    'lewd',
    'impolite',
    'upbeat',
    'baseball',
    'wrap',
    'ball',
    'divergent',
    'art',
    'spark',
    'tomatoes',
    'spell',
    'battle',
    'tearful',
    'current',
    'envious',
    'feeble',
    'ghost',
    'frightening',
    'befitting',
    'expand',
    'drain',
    'thought',
    'tumble',
    'powerful',
    'fair',
    'vegetable',
    'slip',
    'gun',
    'key',
    'trick',
    'cellar',
    'degree',
    'opposite',
    'young',
    'chin',
    'slippery',
    'hulking',
    'military',
    'head',
    'defiant',
    'bumpy',
    'remember',
    'madly',
    'greasy',
    'prepare',
    'geese',
    'spoil',
    'lethal',
    'loutish',
    'charge',
    'green',
    'political',
    'thing',
    'dance',
    'alleged',
    'nebulous',
    'bike',
    'damp',
    'calculator',
    'willing',
    'sad',
    'bag',
    'excited',
    'note',
    'divide',
    'coil',
    'damaging',
    'pedal',
    'ultra',
    'snobbish',
    'bear',
    'live',
    'wistful',
    'brave',
    'admit',
    'gabby',
    'incredible',
    'use',
    'bleach',
    'bang',
    'regret',
    'courageous',
    'ground',
    'fish',
    'visit',
    'provide',
    'reflective',
    'offbeat',
    'oatmeal',
    'tire',
    'spiders',
    'meddle',
    'brass',
    'clean',
    'field',
    'precede',
    'jumbled',
    'pigs',
    'undress',
    'concentrate',
    'accept',
    'trees',
    'end',
    'anxious',
    'repulsive',
    'grandiose',
    'frequent',
    'subsequent',
    'fireman',
    'distance',
    'brake',
    'stamp',
    'learn',
    'shrill',
    'stupid',
    'joke',
    'dinosaurs',
    'shirt',
    'pick',
    'spray',
    'pause',
    'lie',
    'perform',
    'rural',
    'unnatural',
    'taste',
    'skirt',
    'compare',
    'bad',
    'drag',
    'bell',
    'whirl',
    'aloof',
    'bashful',
    'measure',
    'reflect',
    'aggressive',
    'vagabond',
    'listen',
    'determined',
    'rock',
    'tasteful',
    'wilderness',
    'stormy',
    'obeisant',
    'existence',
    'introduce',
    'brick',
    'daughter',
    'corn',
    'immense',
    'doctor',
    'manage',
    'smooth',
    'strengthen',
    'kittens',
    'abaft',
    'wise',
    'mean',
    'handsome',
    'mate',
    'box',
    'close',
    'enter',
    'pot',
    'wink',
    'error',
    'wiggly',
    'women',
    'head',
    'scrub',
    'lovely',
    'cats',
    'pump',
    'invincible',
    'chase',
    'cloistered',
    'room',
    'reward',
    'sponge',
    'mark',
    'annoyed',
    'value',
    'dynamic',
    'tame',
    'steel',
    'cumbersome',
    'sneeze',
    'enchanted',
    'touch',
    'leather',
    'fallacious',
    'yummy',
    'consider',
    'dime',
    'melted',
    'hideous',
    'hellish',
    'push',
    'snails',
    'truthful',
    'pale',
    'disturbed',
    'stare',
    'look',
    'detail',
    'smile',
    'guide',
    'good',
    'jealous',
    'thoughtful',
    'nifty',
    'sore',
    'slope',
    'baby',
    'escape',
    'dream',
    'mailbox',
    'whistle',
    'innocent',
    'melodic',
    'horse',
    'save',
    'flowery',
    'pin',
    'fanatical',
    'breathe',
    'power',
    'scattered',
    'barbarous',
    'cloth',
    'vengeful',
    'penitent',
    'drown',
    'erratic',
    'accurate',
    'spooky',
    'imported',
    'jobless',
    'real',
    'instrument',
    'work',
    'interest',
    'swim',
    'property',
    'threatening',
    'effect',
    'marble',
    'moan',
    'luxuriant',
    'queue',
    'thrill',
    'turn',
    'authority',
    'dirt',
    'frog',
    'poised',
    'queen',
    'return',
    'analyse',
    'guiltless',
    'company',
    'judge',
    'shock',
    'cautious',
    'rest',
    'highpitched',
    'toothsome',
    'beg',
    'team',
    'legs',
    'vulgar',
    'sack',
    'solid',
    'enthusiastic',
    'grease',
    'moor',
    'ill',
    'yoke',
    'punishment',
    'hammer',
    'frail',
    'wiry',
    'imminent',
    'hand',
    'label',
    'quilt',
    'hover',
    'punish',
    'bucket',
    'question',
    'ripe',
    'crash',
    'six',
    'coordinated',
    'juicy',
    'hapless',
    'exotic',
    'appreciate',
    'judge',
    'man',
    'steam',
    'range',
    'acidic',
    'raspy',
    'nest',
    'uninterested',
    'foolish',
    'smiling',
    'yak',
    'pricey',
    'husky',
    'turn',
    'umbrella',
    'obedient',
    'remind',
    'move',
    'sink',
    'bells',
    'old',
    'hook',
    'swing',
    'orange',
    'filthy',
    'pull',
    'steer',
    'wakeful',
    'wipe',
    'reign',
    'magnificent',
    'flower',
    'aspiring',
    'sisters',
    'annoy',
    'meek',
    'seat',
    'new',
    'meat',
    'charming',
    'veil',
    'boorish',
    'crown',
    'test',
    'low',
    'plastic',
    'delightful',
    'rabbit',
    'slow',
    'pocket',
    'obese',
    'arm',
    'control',
    'warn',
    'mute',
    'ordinary',
    'jeans',
    'believe',
    'pat',
    'general',
    'stove',
    'share',
    'inconclusive',
    'partner',
    'fancy',
    'truculent',
    'misty',
    'yarn',
    'machine',
    'false',
    'big',
    'smell',
    'education',
    'front',
    'mouth',
    'irritate',
    'jail',
    'trick',
    'hate',
    'flawless',
    'seal',
    'abrupt',
    'witty',
    'craven',
    'file',
    'tub',
    'adorable',
    'silk',
    'striped',
    'glass',
    'owe',
    'fire',
    'neat',
    'quince',
    'quirky',
    'floor',
    'black',
    'important',
    'snakes',
    'jagged',
    'sister',
    'sign',
    'heartbreaking',
    'occur',
    'dependent',
    'pastoral',
    'actor',
    'lyrical',
    'poke',
    'separate',
    'cool',
    'water',
    'kindly',
    'energetic',
    'applaud',
    'carry',
    'scold',
    'expect',
    'shock',
    'taboo',
    'xray',
    'radiate',
    'accidental',
    'ship',
    'twist',
    'coach',
    'lunchroom',
    'broken',
    'nappy',
    'mist',
    'farflung',
    'correct',
    'vigorous',
    'milk',
    'quizzical',
    'mother',
    'automatic',
    'picture',
    'crowded',
    'cows',
    'muscle',
    'haunt',
    'tawdry',
    'copper',
    'helpful',
    'whisper',
    'wail',
    'cover',
    'elite',
    'profuse',
    'cause',
    'butter',
    'acid',
    'idea',
    'juvenile',
    'quarrelsome',
    'pleasure',
    'watch',
    'mom',
    'marry',
    'voice',
    'fine',
    'adjoining',
    'adaptable',
    'trust',
    'interesting',
    'sofa',
    'abrasive',
    'steady',
    'caption',
    'peel',
    'disagree',
    'bustling',
    'aboriginal',
    'language',
    'compete',
    'cherry',
    'gainful',
    'juggle',
    'cute',
    'suppose',
    'jelly',
    'extend',
    'weight',
    'press',
    'adjustment',
    'foot',
    'scientific',
    'wicked',
    'unique',
    'cart',
    'capricious',
    'wool',
    'joyous',
    'average',
    'lush',
    'measly',
    'tug',
    'dusty',
    'perpetual',
    'idiotic',
    'unwritten',
    'hypnotic',
    'deer',
    'step',
    'absurd',
    'subdued',
    'feigned',
    'thank',
    'improve',
    'nation',
    'bone',
    'disastrous',
    'magical',
    'punch',
    'beds',
    'high',
    'record',
    'peace',
    'refuse',
    'smoggy',
    'lettuce',
    'trucks',
    'nose',
    'left',
    'kaput',
    'cactus',
    'puzzled',
    'deranged',
    'writing',
    'explain',
    'square',
    'wanting',
    'ossified',
    'synonymous',
    'float',
    'adhesive',
    'mere',
    'bridge',
    'cream',
    'discussion',
    'attack',
    'miniature',
    'grotesque',
    'shiny',
    'slow',
    'limit',
    'judicious',
    'boundary',
    'slap',
    'succinct',
    'add',
    'sheet',
    'yielding',
    'invent',
    'humorous',
    'savory',
    'married',
    'efficacious',
    'page',
    'slave',
    'tap',
    'bore',
    'meeting',
    'aromatic',
    'absent',
    'fax',
    'colour',
    'swanky',
    'tense',
    'temper',
    'letter',
    'advise',
    'yellow',
    'trouble',
    'hat',
    'loss',
    'massive',
    'interrupt',
    'connection',
    'servant',
    'abortive',
    'kiss',
    'minute',
    'muddle',
    'loud',
    'bed',
    'nosy',
    'long',
    'violent',
    'respect',
    'structure',
    'common',
    'shave',
    'sophisticated',
    'distribution',
    'gifted',
    'lake',
    'wrestle',
    'clumsy',
    'boiling',
    'special',
    'squealing',
    'tender',
    'imaginary',
    'acoustics',
    'tin',
    'aquatic',
    'belief',
    'breath',
    'exuberant',
    'flap',
    'grandfather',
    'rot',
    'branch',
    'temporary',
    'object',
    'grip',
    'offer',
    'clever',
    'suit',
    'abusive',
    'beam',
    'overflow',
    'mitten',
    'icy',
    'lumber',
    'ice',
    'match',
    'cast',
    'trot',
    'nostalgic',
    'salty',
    'legal',
    'sturdy',
    'part',
    'reach',
    'memorise',
    'hilarious',
    'worried',
    'theory',
    'boy',
    'didactic',
    'quicksand',
    'useful',
    'rat',
    'hissing',
    'unarmed',
    'love',
    'sugar',
    'challenge',
    'frightened',
    'tart',
    'rhythm',
    'plastic',
    'aboard',
    'crawl',
    'venomous',
    'market',
    'talk',
    'unlock',
    'amusement',
    'lying',
    'cause',
    'domineering',
    'size',
    'panoramic',
    'statuesque',
    'zoom',
    'wellmade',
    'battle',
    'jumpy',
    'rain',
    'alive',
    'highfalutin',
    'second',
    'report',
    'spot',
    'cagey',
    'tiny',
    'wooden',
    'lowly',
    'exciting',
    'pointless',
    'childlike',
    'puncture',
    'scatter',
    'shade',
    'polish',
    'welcome',
    'book',
    'low',
    'underwear',
    'nippy',
    'need',
    'license',
    'please',
    'grieving',
    'roasted',
    'support',
    'afford',
    'marked',
    'forgetful',
    'morning',
    'ceaseless',
    'clap',
    'glorious',
    'club',
    'flavor',
    'tranquil',
    'outstanding',
    'eggnog',
    'receptive',
    'humdrum',
    'cheese',
    'zip',
    'want',
    'motion',
    'cuddly',
    'swift',
    'rabid',
    'reason',
    'truck',
    'calendar',
    'self',
    'volatile',
    'detect',
    'bury',
    'group',
    'wall',
    'elated',
    'face',
    'stone',
    'design',
    'found',
    'bikes',
    'treat',
    'burly',
    'rustic',
    'bushes',
    'sordid',
    'helpless',
    'whimsical',
    'muddled',
    'sigh',
    'shelf',
    'magic',
    'pie',
    'calculate',
    'plants',
    'kneel',
    'fearless',
    'halting',
    'crayon',
    'pollution',
    'strange',
    'fat',
    'cracker',
    'economic',
    'thunder',
    'purple',
    'start',
    'pickle',
    'ticket',
    'curvy',
    'wheel',
    'tested',
    'song',
    'paste',
    'stereotyped',
    'teenytiny',
    'beginner',
    'wary',
    'natural',
    'stiff',
    'brawny',
    'shrug',
    'prose',
    'odd',
    'day',
    'borrow',
    'bath',
    'rule',
    'supreme',
    'tramp',
    'stitch',
    'intelligent',
    'insurance',
    'defective',
    'surprise',
    'snow',
    'holiday',
    'cemetery',
    'experience',
    'watch',
    'awful',
    'fold',
    'worry',
    'ignorant',
    'brief',
    'collect',
    'produce',
    'sleet',
    'possible',
    'curl',
    'attempt',
    'flippant',
    'chicken',
    'loving',
    'organic',
    'bake',
    'nonchalant',
    'van',
    'grin',
    'liquid',
    'reply',
    'nutritious',
    'pan',
    'twist',
    'oafish',
    'consist',
    'travel',
    'program',
    'book',
    'freezing',
    'cold',
    'bright',
    'giraffe',
    'lock',
    'rain',
    'many',
    'side',
    'itch',
    'request',
    'attractive',
    'colossal',
    'chew',
    'unequaled',
    'word',
    'phone',
    'soak',
    'attract',
    'careful',
    'heavy',
    'calm',
    'stretch',
    'flower',
    'list',
    'dust',
    'weather',
    'middle',
    'dust',
    'eggs',
    'white',
    'useless',
    'yell',
    'detailed',
    'elegant',
    'heal',
    'deserted',
    'obsequious',
    'zipper',
    'empty',
    'hallowed',
    'cheat',
    'trade',
    'mammoth',
    'fragile',
    'release',
    'request',
    'glue',
    'nail',
    'minister',
    'letters',
    'separate',
    'hammer',
    'godly',
    'pear',
    'chance',
    'dashing',
    'five',
    'damage',
    'approve',
    'decorate',
    'shivering',
    'coil',
    'lamentable',
    'closed',
    'serve',
    'dazzling',
    'shop',
    'end',
    'careless',
    'lunch',
    'kill',
    'ducks',
    'spiteful',
    'airplane',
    'rigid',
    'terrible',
    'overt',
    'decide',
    'towering',
    'awesome',
    'parsimonious',
    'delight',
    'creator',
    'amuck',
    'health',
    'glossy',
    'draconian',
    'decisive',
    'boast',
    'blueeyed',
    'vague',
    'story',
    'interest',
    'holistic',
    'spurious',
    'omniscient',
    'gate',
    'aback',
    'beautiful',
    'capable',
    'gruesome',
    'disgusting',
    'square',
    'spotty',
    'milk',
    'snotty',
    'bright',
    'sudden',
    'realise',
    'earthquake',
    'oil',
    'basin',
    'texture',
    'number',
    'early',
    'home',
    'salt',
    'itchy',
    'clear',
    'industry',
    'waste',
    'abnormal',
    'quaint',
    'violet',
    'fretful',
    'flood',
    'fix',
    'large',
    'afternoon',
    'flow',
    'paint',
    'quarter',
    'pop',
    'dry',
    'weary',
    'apparel',
    'frighten',
    'gleaming',
    'handy',
    'scale',
    'tacit',
    'mourn',
    'unpack',
    'visitor',
    'brash',
    'hook',
    'healthy',
    'straight',
    'tooth',
    'bubble',
    'homeless',
    'impulse',
    'ritzy',
    'pig',
    'order',
    'obsolete',
    'precious',
    'hill',
    'toad',
    'cooing',
    'same',
    'cub',
    'month',
    'church',
    'box',
    'camp',
    'ratty',
    'railway',
    'tasteless',
    'full',
    'shake',
    'raise',
    'pest',
    'jam',
    'meaty',
    'sun',
    'stop',
    'lackadaisical',
    'selfish',
    'resolute',
    'park',
    'icky',
    'changeable',
    'doll',
    'walk',
    'uttermost',
    'bruise',
    'belligerent',
    'road',
    'needy',
    'ambiguous',
    'committee',
    'woman',
    'lean',
    'condition',
    'war',
    'tough',
    'exultant',
    'paltry',
    'overjoyed',
    'hateful',
    'earthy',
    'verdant',
    'elderly',
    'nondescript',
    'unit',
    'greedy',
    'cover',
    'hysterical',
    'arithmetic',
    'evanescent',
    'representative',
    'work',
    'fruit',
    'carpenter',
    'industrious',
    'uppity',
    'cut',
    'trite',
    'powder',
    'alluring',
    'wreck',
    'lucky',
    'frantic',
    'stale',
    'ahead',
    'delicious',
    'delicate',
    'transport',
    'permit',
    'confuse',
    'hole',
    'toy',
    'deserve',
    'planes',
    'super',
    'permissible',
    'dirty',
    'sulky',
    'agreeable',
    'scrape',
    'stamp',
    'dolls',
    'spot',
    'harmony',
    'evasive',
    'groan',
    'heat',
    'throat',
    'drawer',
    'rare',
    'pizzas',
    'unhealthy',
    'harmonious',
    'earsplitting',
    'small',
    'dull',
    'psychotic',
    'crow',
    'plant',
    'name',
    'terrify',
    'pour',
    'reading',
    'show',
    'soft',
    'hurt',
    'identify',
    'ignore',
    'alcoholic',
    'follow',
    'connect',
    'table',
    'grumpy',
    'subtract',
    'doubt',
    'saw',
    'messy',
    'even',
    'delirious',
    'best',
    'materialistic',
    'honorable',
    'things',
    'angle',
    'workable',
    'talk',
    'few',
    'unfasten',
    'entertaining',
    'mellow',
    'giants',
    'conscious',
    'petite',
    'carriage',
    'fire',
    'creature',
    'gorgeous',
    'action',
    'clear',
    'sort',
    'known',
    'try',
    'wrong',
    'material',
    'painstaking',
    'food',
    'equable',
    'waste',
    'play',
    'cultured',
    'gigantic',
    'warm',
    'male',
    'suspend',
    'rub',
    'buzz',
    'mushy',
    'bit',
    'example',
    'price',
    'friendly',
    'rinse',
    'office',
    'basketball',
    'comfortable',
    'wish',
    'ubiquitous',
    'shelter',
    'enormous',
    'tick',
    'order',
    'recognise',
    'thumb',
    'house',
    'half',
    'supply',
    'trousers',
    'birthday',
    'vivacious',
    'grandmother',
    'thinkable',
    'sock',
    'tacky',
    'unbiased',
    'fang',
    'neck',
    'dam',
    'cooperative',
    'incandescent',
    'tiger',
    'obscene',
    'feeling',
    'alike',
    'clean',
    'ugly',
    'plausible',
    'furtive',
    'wave',
    'seemly',
    'pipe',
    'pass',
    'agreement',
    'vessel',
    'secret',
    'understood',
    'ambitious',
    'roll',
    'thankful',
    'wealthy',
    'gusty',
    'romantic',
    'teeny',
    'giant',
    'flash',
    'zinc',
    'depressed',
    'paper',
    'intend',
    'right',
    'simple',
    'desire',
    'jail',
    'wealth',
    'scared',
    'offer',
    'history',
    'hurry',
    'defeated',
    'amused',
    'absorbing',
    'zealous',
    'wet',
    'scratch',
    'confess',
    'uptight',
    'incompetent',
    'sloppy',
    'smash',
    'desk',
    'outgoing',
    'icicle',
    'destroy',
    'red',
    'sore',
    'straw',
    'mint',
    'guitar',
    'attend',
    'proud',
    'purpose',
    'point',
    'attraction',
    'happen',
    'previous',
    'squalid',
    'whine',
    'deadpan',
    'monkey',
    'zany',
    'hand',
    'ethereal',
    'popcorn',
    'hope',
    'modern',
    'panicky',
    'four',
    'crime',
    'mice',
    'crooked',
    'rambunctious',
    'channel',
    'aberrant',
    'glow',
    'coat',
    'aunt',
    'drum',
    'annoying',
    'ashamed',
    'ludicrous',
    'wonderful',
    'hug',
    'car',
    'abounding',
    'country',
    'questionable',
    'enjoy',
    'abundant',
    'plain',
    'habitual',
    'empty',
    'robust',
    'sincere',
    'cable',
    'wind',
    'nerve',
    'physical',
    'practise',
    'classy',
    'stick',
    'disillusioned',
    'damaged',
    'plant',
    'noxious',
    'babies',
    'voyage',
    'pump',
    'cluttered',
    'wacky',
    'plough',
    'friction',
    'grass',
    'crack',
    'toes',
    'electric',
    'brother',
    'point',
    'library',
    'huge',
    'fear',
    'lonely',
    'deceive',
    'drop',
    'prickly',
    'expert',
    'squeeze',
    'sack',
    'macho',
    'coast',
    'store',
    'care',
    'blink',
    'racial',
    'regret',
    'acceptable',
    'peck',
    'pail',
    'distinct',
    'count',
    'volleyball',
    'crowd',
    'frame',
    'watery',
    'locket',
    'suit',
    'reduce',
    'stem',
    'debt',
    'stocking',
    'beef',
    'loose',
    'overrated',
    'addicted',
    'offend',
    'yam',
    'card',
    'sidewalk',
    'sin',
    'busy',
    'finicky',
    'eager',
    'puffy',
    'fail',
    'ladybug',
    'mighty',
    'utter',
    'redundant',
    'easy',
    'hydrant',
    'airport',
    'cushion',
    'excuse',
    'like',
    'name',
    'familiar',
    'clam',
    'rate',
    'act',
    'eminent',
    'kick',
    'trail',
    'nasty',
    'fuzzy',
    'encouraging',
    'complete',
    'amuse',
    'quill',
    'blade',
    'payment',
    'dogs',
    'languid',
    'playground',
    'type',
    'advertisement',
    'oldfashioned',
    'remarkable',
    'flashy',
    'creepy',
    'trouble',
    'bow',
    'hanging',
    'selection',
    'window',
    'clover',
    'endurable',
    'amount',
    'placid',
    'run',
    'plot',
    'illegal',
    'vanish',
    'arrest',
    'lively',
    'great',
    'smelly',
    'adamant',
    'auspicious',
    'hum',
    'blackandwhite',
    'last',
    'waggish',
    'search',
    'petite',
    'depend',
    'engine',
    'wrathful',
    'rhetorical',
    'iron',
    'form',
    'roomy',
    'discreet',
    'sparkle',
    'science',
    'sneaky',
    'reminiscent',
    'crack',
    'shaggy',
    'untidy',
    'whip',
    'guttural',
    'imperfect',
    'goofy',
    'moldy',
    'beneficial',
    'utopian',
    'better',
    'building',
    'soap',
    'mature',
    'position',
    'harm',
    'man',
    'thaw',
    'recess',
    'agree',
    'cannon',
    'business',
    'slim',
    'vacuous',
    'taste',
    'educate',
    'bat',
    'phobic',
    'like',
    'brown',
    'curved',
    'obtain',
    'bedroom',
    'maniacal',
    'handsomely',
    'stretch',
    'standing',
    'hate',
    'sea',
    'mine',
    'land',
    'dear',
    'shocking',
    'claim',
    'chickens',
    'extrasmall',
    'miss',
    'handle',
    'productive',
    'zebra',
    'invite',
    'yard',
    'place',
    'cup',
    'unknown',
    'bouncy',
    'bump',
    'zesty',
    'sneeze',
    'rod',
    'marvelous',
    'vacation',
    'nimble',
    'route',
    'quiet',
    'colorful',
    'squeamish',
    'drink',
    'labored',
    'own',
    'trains',
    'scrawny',
    'slip',
    'look',
    'psychedelic',
    'paddle',
    'curly',
    'funny',
    'furry',
    'mind',
    'untidy',
    'clip',
    'zippy',
    'fence',
    'sign',
    'parallel',
    'hard',
    'sense',
    'rightful',
    'money',
    'snake',
    'little',
    'question',
    'cattle',
    'impartial',
    'premium',
    'fade',
    'instinctive',
    'writer',
    'thirsty',
    'fog',
    'lace',
    'cure',
    'jog',
    'steep',
    'film',
    'increase',
    'tired',
    'tow',
    'nice',
    'riddle',
    'decorous',
    'prevent',
    'interfere',
    'next',
    'tangy',
    'squash',
    'woebegone',
    'heavenly',
    'stimulating',
    'fluttering',
    'brainy',
    'shoes',
    'quack',
    'smoke',
    'destruction',
    'ruddy',
    'harsh',
    'tendency',
    'wasteful',
    'hospital',
    'accessible',
    'waves',
    'tall',
    'nod',
    'telling',
    'cave',
    'condemned',
    'ray',
    'confused',
    'probable',
    'army',
    'cowardly',
    'hot',
    'bite',
    'cruel',
    'bloody',
    'record',
    'silent',
    'tiresome',
    'flame',
    'notebook',
    'pray',
    'trace',
    'living',
    'join',
    'ski',
    'hope',
    'station',
    'apparatus',
    'skillful',
    'heap',
    'knit',
    'songs',
    'bomb',
    'cent',
    'repeat',
    'describe',
    'continue',
    'voiceless',
    'embarrass',
    'disappear',
    'view',
    'abandoned',
    'invention',
    'wrist',
    'party',
    'check',
    'tremble',
    'scary',
    'top',
    'metal',
    'plane',
    'first',
    'treatment',
    'undesirable',
    'efficient',
    'long',
    'drunk',
    'star',
    'answer',
    'mine',
    'unite',
    'eyes',
    'gather',
    'mend',
    'approval',
    'elbow',
    'stranger',
    'valuable',
    'preach',
    'growth',
    'complain',
    'amusing',
    'tedious',
    'lavish',
    'surprise',
    'royal',
    'whispering',
    'strip',
    'cabbage',
    'tax',
    'turkey',
    'caring',
    'glistening',
    'tease',
    'trashy',
    'sail',
    'gaudy',
    'note',
    'embarrassed',
    'late',
    'wire',
    'fetch',
    'thread',
    'join',
    'bolt',
    'branch',
    'copy',
    'friends',
    'secretive',
    'shoe',
    'daily',
    'cobweb',
    'telephone',
    'unbecoming',
    'futuristic',
    'warm',
    'part',
    'descriptive',
    'event',
    'love',
    'irate',
    'dead',
    'direction',
    'possess',
    'acoustic',
    'hurried',
    'regular',
    'bare',
    'horrible',
    'boring',
    'curve',
    'plate',
    'shut',
    'year',
    'wash',
    'functional',
    'finger',
    'mug',
    'heat',
    'flowers',
    'sweet',
    'round',
    'snatch',
    'birds',
    'minor',
    'hour',
    'glib',
    'system',
    'shop',
    'week',
    'touch',
    'debonair',
    'fasten',
    'mass',
    'obtainable',
    'pancake',
    'nauseating',
    'snow',
    'tree',
    'adventurous',
    'peep',
    'announce',
    'apologise',
    'fast',
    'impress',
    'sable',
    'school',
    'selective',
    'festive',
    'wild',
    'fairies',
    'squeak',
    'present',
    'kindhearted',
    'faulty',
    'chief',
    'decay',
    'help',
    'form',
    'expansion',
    'sail',
    'gratis',
    'scene',
    'shade',
    'abject',
    'encourage',
    'gaping',
    'mask',
    'welltodo',
    'mysterious',
    'famous',
    'north',
    'reject',
    'start',
    'grape',
    'level',
    'tent',
    'mark',
    'insidious',
    'bubble',
    'grade',
    'dysfunctional',
    'deep',
    'stream',
    'surround',
    'fowl',
    'reaction',
    'spark',
    'harass',
    'calculating',
    'knife',
    'ready',
    'used',
    'thundering',
    'passenger',
    'flight',
    'contain',
    'wholesale',
    'boot',
    'sip',
    'grate',
    'ugliest',
    'seed',
    'fry',
    'hesitant',
    'oranges',
    'teeth',
    'hospitable',
    'chalk',
    'substantial',
    'vein',
    'double',
    'string',
    'abiding',
    'plant',
    'whole',
    'quartz',
    'volcano',
    'nine',
    'successful',
    'sticky',
    'stage',
    'digestion',
    'momentous',
    'needless',
    'unable',
    'disgusted',
    'statement',
    'wrench',
    'dispensable',
    'tongue',
    'dapper',
    'smell',
    'street',
    'reproduce',
    'crabby',
    'wait',
    'stomach',
    'gamy',
    'obnoxious',
    'knowledge',
    'educated',
    'blushing',
    'bewildered',
    'ask',
    'eatable',
    'illfated',
    'overwrought',
    'rhyme',
    'change',
    'back',
    'signal',
    'spring',
    'superficial',
    'lacking',
    'giddy',
    'rely',
    'perfect',
    'cough',
    'cough',
    'place',
    'superb',
    'motionless',
    'rainy',
    'argument',
    'teaching',
    'juice',
    'pleasant',
    'faint',
    'shiver',
    'tame',
    'squirrel',
    'quiet',
    'stir',
    'oven',
    'spotless',
    'screeching',
    'guarantee',
    'hang',
    'dress',
    'naive',
    'greet',
    'behavior',
    'rub',
    'null',
    'profit',
    'exchange',
    'discovery',
    'bomb',
    'quiver',
    'lip',
    'eye',
    'youthful',
    'pumped',
    'jump',
    'scarecrow',
    'hair',
    'milky',
    'ragged',
    'grubby',
    'wander',
    'kitty',
    'chunky',
    'tidy',
    'relieved',
    'succeed',
    'kind',
    'brake',
    'race',
    'worm',
    'government',
    'devilish',
    'present',
    'hushed',
    'ten',
    'jolly',
    'wren',
    'inexpensive',
    'friend',
    'mountainous',
    'awake',
    'farm',
    'gaze',
    'acrid',
    'repair',
    'bounce',
    'attach',
    'tricky',
    'terrific',
    'limping',
    'rapid',
    'versed',
    'tasty',
    'animal',
    'brush',
    'children',
    'weigh',
    'haircut',
    'broad',
    'tenuous',
    'furniture',
    'satisfying',
    'protect',
    'sweltering',
    'mess up',
    'bottle',
    'wandering',
    'certain',
    'call',
    'alert',
    'excellent',
    'step',
    'uneven',
    'command',
    'uncle',
    'spoon',
    'tight',
    'bored',
    'majestic',
    'complete',
    'melt',
    'breakable',
    'glamorous',
    'meal',
    'hardtofind',
    'hobbies',
    'lamp',
    'promise',
    'light',
    'son',
    'risk',
    'finger',
    'sand',
    'doubtful',
    'yawn',
    'angry',
    'grab',
    'hungry',
    'aware',
    'noiseless',
    'cross',
    'knowing',
    'rebel',
    'pretend',
    'lopsided',
    'rings',
    'fluffy',
    'enchanting',
    'soda',
    'coach',
    'whistle',
    'force',
    'suffer',
    'use',
    'bulb',
    'mountain',
    'cycle',
    'settle',
    'somber',
    'unaccountable',
    'town',
    'honey',
    'toothpaste',
    'rejoice',
    'sprout',
    'frame',
    'homely',
    'abstracted',
    'cook',
    'level',
    'sparkling',
    'fear',
    'ruthless',
    'tangible',
    'graceful',
    'parcel',
    'lame',
    'dress',
    'bawdy',
    'safe',
    'stingy',
    'eight',
    'fall',
    'purring',
    'vast',
    'axiomatic',
    'staking',
    'rescue',
    'hose',
    'laughable',
    'division',
    'possessive',
    'hollow',
    'chivalrous',
    'person',
    'flag',
    'cherries',
    'periodic',
    'fly',
    'bee',
    'future',
    'tie',
    'ad hoc',
    'cow',
    'ancient',
    'sick',
    'murky',
    'cars',
    'robin',
    'historical',
    'pet',
    'screw',
    'knee',
    'amazing',
    'pushy',
    'credit',
    'books',
    'chemical',
    'title',
    'sniff',
    'prick',
    'border',
    'hands',
    'rule',
    'fixed',
    'stain',
    'fearful',
    'skate',
    'spicy',
    'scare',
    'far',
    'allow',
    'play',
    'upset',
    'remove',
    'retire',
    'optimal',
    'trip',
    'scarce',
    'shy',
    'likeable',
    'chubby',
    'scarf',
    'sheep',
    'cake',
    'jaded',
    'screw',
    'fumbling',
    'whip',
    'verse',
    'earth',
    'employ',
    'basket',
    'scintillating',
    'different',
    'poor',
    'ruin',
    'houses',
    'unsuitable',
    'noisy',
    'blot',
    'soup',
    'roof',
    'berserk',
    'worthless',
    'expensive',
    'wide',
    'macabre',
    'porter',
    'recondite',
    'bless',
    'tank',
    'inform',
    'society',
    'men',
    'blow',
    'can',
    'victorious',
    'unsightly',
    'birth',
    'aftermath',
    'afterthought',
    'trade',
    'discover',
    'activity',
    'grain',
    'drop',
    'produce',
    'scream',
    'chop',
    'belong',
    'spare',
    'trap',
    'near',
    'cheap',
    'assorted',
    'necessary',
    'foregoing',
    'scorch',
    'scandalous',
    'squeal',
    'air',
    'spiky',
    'arrogant',
    'attack',
    'woozy',
    'arch',
    'island',
    'crook',
    'spiritual',
    'foamy',
    'responsible',
    'scent',
    'disarm',
    'gentle',
    'uncovered',
    'learned',
    'cat',
    'circle',
    'mix',
    'account',
    'symptomatic',
    'demonic',
    'jewel',
    'wideeyed',
    'instruct',
    'wish',
    'rush',
    'winter',
    'grateful',
    'diligent',
    'typical',
    'store',
    'testy',
    'clammy',
    'fantastic',
    'match',
    'illustrious',
    'guess',
    'internal',
    'knotty',
    'grouchy',
    'ink',
    'wound',
    'orange',
    'chilly',
    'resonant',
    'coherent',
    'jazzy',
    'fuel',
    'silly',
    'oceanic',
    'crib',
    'dizzy',
    'disagreeable',
    'launch',
    'test',
    'kick',
    'protective',
    'switch',
    'pack',
    'base',
    'delay',
    'last',
    'move',
    'outrageous',
    'short',
    'insect',
    'malicious',
    'appear',
    'communicate',
    'moaning',
    'fierce',
    'influence',
    'bait',
    'overconfident',
    'maddening',
    'harbor',
    'competition',
    'time',
    'soggy',
    'suggestion',
    'seashore',
    'groovy',
    'vest',
    'tremendous',
    'narrow',
    'examine',
    'tightfisted',
    'bizarre',
    'happy',
    'literate',
    'sky',
    'exclusive',
    'wry',
    'garrulous',
    'curious',
    'thick',
    'illinformed',
    'dry',
    'crate',
    'strong',
    'jellyfish',
    'rake',
    'relax',
    'unruly',
    'apathetic',
    'daffy',
    'boat',
    'stop',
    'boundless',
    'true',
    'addition',
    'skip',
    'toys',
    'public',
    'puzzling',
    'fold',
    'stew',
    'march',
    'pretty',
    'blood',
    'torpid',
    'tickle',
    'wine',
    'summer',
    'arrange',
    'care',
    'horn',
    'desert',
    'longterm',
    'choke',
    'shaky',
    'combative',
    'painful',
    'wax',
    'spiffy',
    'one',
    'able',
    'time',
    'sleep',
    'spectacular',
    'snore',
    'lazy',
    'edge',
    'stitch',
    'silky',
    'numberless',
    'train',
    'increase',
    'rabbits',
    'flimsy',
    'tempt',
    'sour',
    'grey',
    'burst',
    'silver',
    'lively',
    'hunt',
    'rampant',
    'unadvised',
    'zoo',
    'hot',
    'exist',
    'various',
    'change',
    'line',
    'lumpy',
    'flat',
    'sleepy',
    'blush',
    'zephyr',
    'knock',
    'dangerous',
    'coal',
    'nonstop',
    'receipt',
    'stroke',
    'inquisitive',
    'notice',
    'admire',
    'fact',
    'strap',
    'land',
    'observe',
    'rough',
    'comparison',
    'ablaze',
    'shallow',
    'substance',
    'bitesized',
    'development',
    'voracious',
    'concerned',
    'suggest',
    'humor',
    'pink',
    'fabulous',
    'memory',
    'jam',
    'gold',
    'board',
    'wriggle',
    'merciful',
    'erect',
    'fool',
    'peaceful',
    'pencil',
    'tip',
    'magenta',
    'balance',
    'celery',
    'fortunate',
    'silent',
    'elastic',
    'multiply',
    'puny',
    'decision',
    'normal',
    'slimy',
    'carve',
    'cheer',
    'sound',
    'cheerful',
    'prefer',
    'scissors',
    'kiss',
    'wobble',
    'burn',
    'explode',
    'medical',
    'ocean',
    'tan',
    'wood',
    'imagine',
    'laugh',
    'two',
    'ajar',
    'tour',
    'unusual',
    'replace',
    'sedate',
    'unkempt',
    'spotted',
    'develop',
    'miscreant',
    'open',
    'soothe',
    'deeply',
    'plan',
    'flaky',
    'horses',
    'deafening',
    'dinner',
    'murder',
    'poison',
    'tense',
    'badge',
    'throne',
    'onerous',
    'laugh',
    'bitter',
    'trip',
    'thoughtless',
    'guarded',
    'collar',
    'bent',
    'spill',
    'third',
    'achiever',
    'rude',
    'inject',
    'ring',
    'grip',
    'anger',
    'entertain',
    'zonked',
    'waiting',
    'income',
    'religion',
    'governor',
    'jar',
    'sound',
    'disapprove',
    'simplistic',
    'equal',
    'skin',
    'territory',
    'post',
    'wonder',
    'guide',
    'spy',
    'exercise',
    'secondhand',
    'print',
    'frogs',
    'earn',
    'bird',
    'moon',
    'plug',
    'dramatic',
    'need',
    'fancy',
    'three',
    'flagrant',
    'behave',
    'mindless',
    'weak',
    'roll',
    'toe',
    'class',
    'crush',
    'polite',
    'skinny',
    'drain',
    'pen',
    'pine',
    'therapeutic',
    'infamous',
    'afraid',
    'astonishing',
    'twig',
    'suck',
    'door',
    'breezy',
    'elfin',
    'excite',
    'troubled',
    'cynical',
    'lock',
    'rainstorm',
    'mundane',
    'suspect',
    'injure',
    'free',
    'receive',
    'spade',
    'fresh',
    'back',
    'dad',
    'thin',
    'cakes',
    'thirsty',
    'space',
    'rich',
    'remain',
    'naughty',
    'mixed',
    'private',
    'dusty',
    'jump',
    'picayune',
    'windy',
    'leg',
    'berry',
    'oval',
    'ants',
    'nest',
    'pets',
    'level',
    'cap',
    'drip',
    'absorbed',
    'faithful',
    'callous',
    'blind',
    'potato',
    'transport',
    'girls',
    'abashed',
    'camp',
    'preserve',
    'lighten',
    'support',
    'needle',
    'laborer',
    'neighborly',
    'faded',
    'root',
    'load',
    'wing',
    'loaf',
    'measure',
    'guard',
    'warlike',
    'keen',
    'alarm',
    'matter',
    'difficult',
    'talented',
    'splendid',
    'longing',
    'avoid',
    'dare',
    'flesh',
    'water',
    'unequal',
    'makeshift',
    'dreary',
    'righteous',
    'night',
    'animated',
    'deliver',
    'chess',
    'concern',
    'wretched',
    'duck',
    'bead',
    'fertile',
    'smoke',
    'boil',
    'serious',
    'ban',
    'curve',
    'river',
    'linen',
    'actually',
    'observant',
    'numerous',
    'heady',
    'maid',
    'stupendous',
    'complex',
    'button',
    'argue',
    'donkey',
    'sweater',
    'secretary',
    'tray',
    'smart',
    'girl',
    'knot',
    'blue',
    'dark',
    'arrive',
    'stuff',
    'impossible',
    'rock',
    'agonizing',
    'fork',
    'downtown',
    'push',
    'womanly',
    'knowledgeable',
    'piquant',
    'rifle',
    'noise',
    'knot',
    'way',
    'glove',
    'gray',
    'plucky',
    'unused',
    'relation',
    'include',
    'fit',
    'pies',
    'cute',
    'egg',
    'cloudy',
    'rose',
    'observation',
    'fill',
    'snail',
    'rob',
    'pull',
    'female',
    'drab',
    'scribble',
    'quick',
    'dock',
    'stay',
    'rail',
    'nutty',
    'nut',
    'unwieldy',
    'walk',
    'color',
    'cry',
    'camera',
    'tail',
    'jittery',
    'toothbrush',
    'extralarge',
    'force',
    'rotten',
    'hall',
    'sharp',
    'bat'
];
//# sourceMappingURL=random-words.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiddenWordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HiddenWordComponent = (function () {
    function HiddenWordComponent() {
    }
    return HiddenWordComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], HiddenWordComponent.prototype, "word", void 0);
HiddenWordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'hidden-word',
        template: __webpack_require__(160),
        styles: [__webpack_require__(154)]
    })
], HiddenWordComponent);

//# sourceMappingURL=hidden-word.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncorrectGuessesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncorrectGuessesComponent = (function () {
    function IncorrectGuessesComponent() {
        this.incorrectGuesses = '';
        this.incorrectGuessCount = 0;
    }
    return IncorrectGuessesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], IncorrectGuessesComponent.prototype, "incorrectGuesses", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Number)
], IncorrectGuessesComponent.prototype, "incorrectGuessCount", void 0);
IncorrectGuessesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'incorrect-guesses',
        template: __webpack_require__(161),
        styles: [__webpack_require__(155)]
    })
], IncorrectGuessesComponent);

//# sourceMappingURL=incorrect-guesses.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterGuessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LetterGuessComponent = (function () {
    function LetterGuessComponent() {
        this.guesses = "";
        this.makingGuess = false;
        this.makeGuessEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.ALPHABET = "abcdefghijklmnopqrstuvwxyz";
        this.guesses = "";
    }
    LetterGuessComponent.prototype.onLetterSelect = function (letter) {
        if (this.makingGuess) {
            return;
        }
        console.log(letter);
        this.guesses += letter;
        this.makeGuessEvent.next(letter);
    };
    ;
    return LetterGuessComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], LetterGuessComponent.prototype, "guesses", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Boolean)
], LetterGuessComponent.prototype, "makingGuess", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _a || Object)
], LetterGuessComponent.prototype, "makeGuessEvent", void 0);
LetterGuessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'letter-guess',
        template: __webpack_require__(162),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [])
], LetterGuessComponent);

var _a;
//# sourceMappingURL=letter-guess.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.bundle.js.map