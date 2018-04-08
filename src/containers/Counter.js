import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class Counter extends PureComponent {


  render() {
    return (
      <div className="Counter">
        <h2>Guesses left</h2>
        <h2>{this.props.counter}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Counter)
