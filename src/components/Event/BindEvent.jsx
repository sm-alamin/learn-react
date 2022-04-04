import React, { Component } from 'react'

export default class BindEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
      this.addIncrement = this.addIncrement.bind(this)
    }
    addIncrement (){
        this.setState({
            count: this.state.count + 1
        })
    }
    // addIncrement = () =>{
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
  render() {
    return (
      <div>
          <h3>{this.state.count}</h3>
          <button onClick={this.addIncrement} >increment</button>
      </div>
    )
  }
}
