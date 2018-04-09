import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class SendBox extends PureComponent {
    constructor(props){
        super(props);
        this.state = {value: ""}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    newGuess(guesses) {
        this.props.dispatch({type: "NEW_GUESS", payload: this.state.value})
    }

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
		return (
            <div>
			<form className = "SendBoxForm" onSubmit={this.handleSubmit}>
				<div>
					<h2>Choose a letter</h2>
					<input name="guesses" value={this.state.guesses} type ="text" id="guesses" maxLength="1" onChange={this.handleChange}/>
				</div>

				<button id = "goButton" type="submit">Go!</button>
			</form>
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
