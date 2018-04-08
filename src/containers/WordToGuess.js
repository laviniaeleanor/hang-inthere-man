import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

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

function mapStateToProps(state) {
    return {wordToGuess: state.wordToGuess}
}

export default connect(mapStateToProps)(WordToGuess)
