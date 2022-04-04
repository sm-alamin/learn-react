import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    handleIncrement = () =>{
       this.setState({
           count: this.state.count + 1
       })
    }
    handleDecrement = () =>{
        this.setState({
            count: this.state.count - 1
        })
     }
  render() {
      const { count } = this.state;
    return (
      <div>
          <h1 className='bg-info'>My age is: {count}</h1>
          <Button onClick={this.handleIncrement} disabled={count === 10 ? true: false} >+</Button>
          <Button onClick={this.handleDecrement}disabled={count === 0 ? true: false} style={{ marginLeft: '20px'}}>-</Button>
      </div>
    )
  }
}
