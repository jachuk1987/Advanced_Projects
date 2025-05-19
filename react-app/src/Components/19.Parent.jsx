import React, { Component } from 'react';
import ChildButton from './19.ChildButton';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Waiting for child interaction...'
    };
  }

  handleChildClick = () => {
    this.setState({
      message: 'Button clicked from Child!'
    });
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Parent Component</h1>
        <p>{this.state.message}</p>
        <ChildButton onButtonClick={this.handleChildClick} />
      </div>
    );
  }
}

export default Parent;
