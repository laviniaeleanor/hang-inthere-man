import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createNewGame } from '../actions/game'
import './CreateGameButton.css'

export class CreateGameButton extends PureComponent {
  static propTypes = {
    createGame: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.createNewGame(6)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="CreateGameButton"
      >
        New Game
      </button>
    )
  }
}

export default connect(null, { createGame })(CreateGameButton)
