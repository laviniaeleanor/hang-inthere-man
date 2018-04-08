export const NEW_GUESS = 'NEW_GUESS'

export const newGuess = (guesses) => {
  // const state = getState()
  return {
      type: NEW_GUESS,
      payload: guesses,
  }}
