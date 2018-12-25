import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux'
import {increment,decrement} from './actions'
const buttonStyle = {
  margin: "20px"  
}

class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="App">
         <div>
            <button style={buttonStyle} onClick={this.props.Increment}>+</button>
            <button style={buttonStyle} onClick={this.props.Decrement}>-</button>
            <span>count :{this.props.value}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, dispatch) => ({
  dispatch,
  value: state.value 
})

const mapDispatchToProps = dispatch => ({
  Increment:()=>{
    dispatch(() => {
      return axios.post('http://47.104.13.253:8090/faceRecognition', {
        "amount": 120
      }).then((res1) => {
        // console.log(res1)
        dispatch(increment())
      }).catch((err1) => {
        // console.log(err1)
      })
    })
    


  },
  Decrement:()=>{
      dispatch(decrement())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

 