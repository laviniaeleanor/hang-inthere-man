import * as request from 'superagent'
// import { newWord } from '../lib/game'

const baseUrl = 'http://localhost:4001'

export const NEW_GUESS = 'NEW_GUESS'

export const newGuess = (letter) => (dispatch) => {
  request
    .get(`${baseUrl}/game`)
    .then(response => dispatch({
      type: NEW_GUESS,
      payload: response.body
    }))
    .catch(err => alert(err))
}
