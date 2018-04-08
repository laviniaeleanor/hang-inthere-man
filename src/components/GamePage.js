import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import WordToGuess from '../containers/WordToGuess'
import SendBox from '../containers/SendBox'
import Counter from '../containers/Counter'
import {newGuess} from '../actions/game'

class GamePage extends Component {
    newGuess = (product) => {
    this.props.newGuess(product)
  }


  render() {
    return (
        <div className="App">
            <Link to={ `/hangman` }><header className="App-header">
            <h1 className="App-title">Hang-inThere-man</h1>
            </header></Link>
            <Counter />
            <WordToGuess />
            <SendBox onSubmit={this.newGuess}/>
        </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		wordToGuess: state.wordToGuess,
        guesses: state.guesses
	}
}

export default connect(mapStateToProps, {newGuess})(GamePage)
