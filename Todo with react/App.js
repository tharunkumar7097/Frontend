// src/App.js
import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, { text: inputText, completed: false }]);
      setInputText('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} onDelete={deleteTodo} onToggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
