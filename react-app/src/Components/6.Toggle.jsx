import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };

    // Binding the event handler in the constructor
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }));
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Toggle Component</h2>
        <button onClick={this.handleToggle}>
          {this.state.isOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default Toggle;
