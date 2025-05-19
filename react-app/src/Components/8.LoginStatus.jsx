import React, { Component } from 'react';

class LoginStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    // Binding the toggle method
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Login Status</h2>
        <p>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</p>
        <button onClick={this.toggleLogin}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </div>
    );
  }
}

export default LoginStatus;
