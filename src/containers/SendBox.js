import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class SendBox extends PureComponent {
    state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })

    console.log(this.state.guesses)
  }

	render() {
		return (
            <div>
			<form className = "SendBox" onSubmit={this.handleSubmit}>
				<div>
					<h2>Choose a letter</h2>
					<input name="guesses" value={this.state.guesses} type ="text" id="guesses" maxLength="1" onChange={this.handleChange}/>
				</div>

				<button id = "goButton" type="submit">Go!</button>
			</form>
            <h2>Your guess was: {this.props.wordToGuess}</h2>
            </div>
		)
	}
}

function mapStateToProps(state) {
    return {
        guesses: state.guesses
    }
}

export default connect(mapStateToProps)(SendBox)
