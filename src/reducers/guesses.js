import { NEW_GUESS } from '../actions/game'
// import { showGuess } from '../lib/game'

const initialGuesses = []

export default (state = initialGuesses, action) => {
  switch (action) {
    case NEW_GUESS :
      return [...state, action.payload.guesses]


    default :
      return state
  }
}

// export const add = ( state, keyword) => {
//    state.merge({filters: [].concat(state.filters, [keyword])})
// };

// export const createProduct = (product) => (dispatch, getState) => {
//   const state = getState()
//   const jwt = state.currentUser.jwt
//
//   request
//     .post(`${baseUrl}/products`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .send(product)
//     .then(response => dispatch({
//       type: ADD_PRODUCT,
//       payload: response.body
//     }))
// }
