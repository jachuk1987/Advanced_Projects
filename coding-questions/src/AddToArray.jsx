import React, { useState } from 'react';

const AddToArray = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      value: `Item ${items.length + 1}`
    };
    setItems([...items, newItem]); // create a new array with the new item
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h3>Items List</h3>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddToArray;
