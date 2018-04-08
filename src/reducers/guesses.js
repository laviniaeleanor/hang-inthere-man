import { NEW_GUESS } from '../actions/game'

const initialGuesses = []

export default (state = initialGuesses, action) => {
  switch (action) {
    case NEW_GUESS :
        return [...state, action.payload.guesses]


    default :
      return state
  }
}
