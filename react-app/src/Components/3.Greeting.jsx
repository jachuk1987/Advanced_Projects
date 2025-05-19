import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

export default Greeting;
