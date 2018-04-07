import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import WordToGuess from '../containers/WordToGuess'
import SendBox from '../containers/SendBox'
import Counter from '../containers/Counter'

class LandingPage extends Component {
  render() {
    return (
        <div className="App">
            <Link to={ `/hangman` }><header className="App-header">
            <h1 className="App-title">Hang-inThere-man</h1>
            </header></Link>
        </div>
    )
  }
}

export default LandingPage;
