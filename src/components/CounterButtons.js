import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

class CounterButtons extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.increase()  }>Increase</button>
        <button onClick={() => this.props.decrease()  }>Decrease</button>

      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    decrease: () => dispatch(decrement()),
    increase: () => dispatch(increment()),
  };
};

export default connect(null,mapDispatchToProps)(CounterButtons);
