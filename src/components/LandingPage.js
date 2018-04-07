import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class LandingPage extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">Hang-inThere-man</h1>
            </header>
            <h2 className="App-intro">A game and a suggestion for Codaisseur students</h2>
            <Link to={ `/hangman/game` }><h3>Begin</h3></Link>
        </div>
    )
  }
}

export default LandingPage;
