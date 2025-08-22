import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';

function App() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  return (
    <TaskProvider>
      <div className="app-container">
        <h1>React To-Do List</h1>
        <TaskForm
          taskName={taskName}
          taskDescription={taskDescription}
          setTaskName={setTaskName}
          setTaskDescription={setTaskDescription}
        />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
