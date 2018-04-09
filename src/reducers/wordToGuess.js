import { NEW_GUESS } from '../actions/game'
import { showGuess } from '../lib/game'

const wordBank = ["pig", "cat", "hotel", "game", "hangman", "banana", "sos"]
let guesses = []
const word = wordBank[Math.floor(Math.random() * wordBank.length)]
const initialState = showGuess(word, guesses)

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_GUESS :
        guesses = guesses.concat(action.payload.guesses)
        const newState = showGuess(word, guesses)
        return newState

    default :
      return state

}
}
