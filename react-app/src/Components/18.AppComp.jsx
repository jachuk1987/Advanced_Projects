import React, { Component } from 'react';
import TitleDisplay from './18.TitleDisplay';

class AppComp extends Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Parent Component</h1>
        <TitleDisplay title="This title is passed from App component!" />
      </div>
    );
  }
}

export default AppComp;
