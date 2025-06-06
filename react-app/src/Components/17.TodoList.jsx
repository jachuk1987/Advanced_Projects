import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>
      <ul>
        {todos?.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
