import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, editing: false }]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleEdit = (index) => {
    const newTasks = [...tasks];
    newTasks[index].editing = !newTasks[index].editing;
    setTasks(newTasks);
  };

  const updateTask = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    newTasks[index].editing = false;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((taskItem, index) => (
          <li key={index}>
            {taskItem.editing ? (
              <div className="edit-task">
                <input
                  type="text"
                  value={taskItem.text}
                  onChange={(e) => updateTask(index, e.target.value)}
                />
                <button onClick={() => updateTask(index, taskItem.text)}>Save</button>
              </div>
            ) : (
              <div className="task">
                {taskItem.text} ({index + 1} of {tasks.length})
                <button onClick={() => toggleEdit(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
