import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import { showGuess } from '../lib/game'


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
			<form className = "SendBox" onSubmit={this.handleSubmit}>
				<div>
					<h2>Choose a letter</h2>
					<input name="letter" id="letter" maxLength="1" value={
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
