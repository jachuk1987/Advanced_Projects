import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Input Field Component</h2>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Type something..."
        />
        <p>You typed: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default InputField;
