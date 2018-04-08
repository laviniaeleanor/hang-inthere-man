import { NEW_GUESS } from '../actions/game'
import { wrongGuessCount } from '../lib/game'

export default (state = 6, action) => {
  switch (action.type) {
    case NEW_GUESS :
        // const newState = wrongGuessCount(state.word, state.guesses)
        // return newState

    default :
      return state

}
}
