import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> // Using index as key for simplicity
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
