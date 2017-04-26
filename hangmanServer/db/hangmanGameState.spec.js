const mongooseMock = require('mongoose-mock'),
  proxyquire = require('proxyquire'),
  chai = require('chai'),
  expect = chai.expect,
  sinon = require('sinon'),
  sinonChai = require("sinon-chai")
chai.use(sinonChai)


// const hangmanGameState = require('./hangmanGameState')


describe('The Hangman Game State', function () {

    let hangmanGameState

    beforeEach(function () {
        hangmanGameState = proxyquire('./hangmanGameState', {'mongoose': mongooseMock})
    })


    it('creates an initial game state', function * () {

        const initialState = hangmanGameState.getInitialGameState()

        expect(initialState.guesses).to.eql('')
        expect(initialState.incorrectGuessCount).to.eql(0)
        expect(initialState.incorrectGuesses).to.eql('')
        expect(initialState.gameOver).to.eql(false)
    })

    it('saves an initial game state', function * () {
        var callback = sinon.spy()
        const newGameState = hangmanGameState.getNewGameState().then(callback)
        expect(newGameState.save).calledOnce
    })
    it('makes a guess', function * () {
        var callback = sinon.spy()
        let initialState = hangmanGameState.HangmanGameState.create(hangmanGameState.getInitialGameState()).then(callback)

        initialState.addGuess('a')

        expect(initialState.guesses).to.eql('a')
    })
})

