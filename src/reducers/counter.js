import { NEW_GUESS } from '../actions/game'
import { wrongGuessCount } from '../lib/game'
// import guesses from './guesses'

export default (state = 6, action) => {
  switch (action.type) {
    // case NEW_GUESS :
    //     const newState = wrongGuessCount(this.state.word, this.state.guesses.payload)
    //     return newState

    default :
      return state

}
}
