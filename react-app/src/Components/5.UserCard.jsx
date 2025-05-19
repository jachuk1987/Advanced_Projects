import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    const { name, role } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <p>Role: {role}</p>
      </div>
    );
  }
}

// Setting default props
UserCard.defaultProps = {
  role: 'Guest'
};

export default UserCard;
