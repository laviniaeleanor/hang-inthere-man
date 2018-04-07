import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import wordToGuess from '../reducers/wordToGuess'
import { showGuess } from '../lib/game'
import guesses from '../reducers/guesses'

import React, {PureComponent} from 'react'

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
	}

	render() {
		const initialValues = this.props.initialValues || {}
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<h2>Choose a letter</h2>
					<input name="letter" id="letter" value={
						this.state.letter || initialValues.letter || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Go!</button>
			</form>
		)
	}
}

// At the bottom of the file, where you connect your component:
const mapStateToProps = ({ sendBox }) => ({ sendBox })



// Then pass it to connect:
export default connect(mapStateToProps)(SendBox)
