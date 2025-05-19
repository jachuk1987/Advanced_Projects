import React from 'react';

const Avatar = ({ imageUrl }) => {
  return (
    <div style={{ padding: '20px' }}>
      <img 
        src={imageUrl} 
        alt="User Avatar" 
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />
    </div>
  );
};

// Set default props
Avatar.defaultProps = {
  imageUrl: 'https://via.placeholder.com/150'
};

export default Avatar;
