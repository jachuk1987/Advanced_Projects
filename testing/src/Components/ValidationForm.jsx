import React, { useState } from 'react';

const ValidationForm = () => {
  const [user, setUser] = useState({
    fName: '',
    age: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!user.fName.trim()) {
      newErrors.fName = 'Full Name is required';
    }

    if (!user.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(user.age) || Number(user.age) <= 0) {
      newErrors.age = 'Age must be a valid number';
    }

    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        newErrors.email = 'Invalid email format';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert('Form submitted successfully!');
      console.log('User:', user);
      // Optionally reset form
      setUser({ fName: '', age: '', email: '' });
      setErrors({});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="fName"
          value={user.fName}
          onChange={handleChange}
        />
        {errors.fName && <div style={{ color: 'red' }}>{errors.fName}</div>}
        <br />

        <label>Age</label>
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
        <br />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ValidationForm;
