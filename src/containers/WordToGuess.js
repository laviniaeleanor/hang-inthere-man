import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import initialState from '../reducers/wordToGuess'
// import { showGuess } from '../lib/game'
// import guesses from '../reducers/guesses'



export class WordToGuess extends PureComponent {

    render() {
    return (
      <div className="WordToGuess">
        <div>
        <h2>Guess the word:</h2>
        <h2>{this.props.wordToGuess}</h2>
        </div>
      </div>
    )
  }
}

// At the bottom of the file, where you connect your component:
function mapStateToProps(state) {
    return {wordToGuess: state.wordToGuess}
}


// Then pass it to connect:
export default connect(mapStateToProps)(WordToGuess)
