import React, { Component } from 'react';

export default class EventHandler extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        changedValue  : ' '
     }
   }

    showOnchange = (e) => {
       this.setState({
            changedValue : e.target.value
       })
    }
  render() {
    return (
      <div>
            <input type="text" onChange={this.showOnchange} />
            <p>Result: {this.state.changedValue}</p>
      </div>
    )
  }
}
