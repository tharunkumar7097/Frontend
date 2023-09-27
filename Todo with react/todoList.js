import React from 'react';

function TodoList({ todos, onDelete, onToggleComplete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(index)}
          />
          {todo.text}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
