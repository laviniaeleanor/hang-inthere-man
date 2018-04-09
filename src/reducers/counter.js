import { NEW_GUESS } from '../actions/game'

export default (state = 6, action) => {
  switch (action.type) {
    case NEW_GUESS :
        state -= 1
        if (state === 0) return 'Game Over'
        return state


    default :
      return state

}
}
