import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'

export default class RenderingCondition extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLogedIn : false
        }
      }
  render() {
    const {isLogedIn} = this.state
    return (
      <div>
          {isLogedIn ? <Home /> : <Login />}
      </div>
    )
  }
}
