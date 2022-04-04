import React, { Component } from 'react';

export class Card extends Component {
  render() {
    return (
      <div>
          <h1>{this.props.name}</h1>
          <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default Card;