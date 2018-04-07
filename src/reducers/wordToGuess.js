import { NEW_GUESS } from '../actions/game'
import { showGuess } from '../lib/game'
// import guesses from './guesses'

const wordBank = ["pig", "cat", "hotel", "game", "hangman", "banana", "sos"]
const guesses = []
const word = wordBank[Math.floor(Math.random() * wordBank.length)]
const initialState = showGuess(word, guesses)

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_GUESS :
      return state = showGuess(word, guesses.payload)

    default :
      return state

}
}
