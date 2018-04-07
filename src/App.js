import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LandingPage from "./components/LandingPage.js"
import GamePage from "./components/GamePage.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/hangman" component={LandingPage} />
          <Route exact path="/hangman/game" component={GamePage} />
          <Route exact path="/" render={ () => <Redirect to="/hangman" /> } />
        </div>
      </Router>
    )
  }
}

export default App;
