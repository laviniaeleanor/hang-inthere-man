import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
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

// At the bottom of the file, where you connect your component:
const mapStateToProps = ({ counter }) => ({ counter })



// Then pass it to connect:
export default connect(mapStateToProps)(Counter)
