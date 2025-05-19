import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Form</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Name: 
          <input 
            type="text" 
            value={name} 
            onChange={handleNameChange} 
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Email: 
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div>
        <p><strong>Entered Name:</strong> {name}</p>
        <p><strong>Entered Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default Form;
