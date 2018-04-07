import { NEW_GUESS } from '../actions/game'
import { showGuess } from '../lib/game'

const initialGuesses = []

export default (state = initialGuesses, action) => {
  switch (action) {
    case NEW_GUESS :
      return showGuess()

    default :
      return state
  }
}
