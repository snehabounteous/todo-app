import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
interface Task {
  id: number;
  name: string;
  description: string;
}
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (!taskName.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
    };

    setTasks(prev => [newTask, ...prev]);
    setTaskName('');
    setTaskDescription('');
  };
  return (
    <div className="app-container">
      <h1>React To-Do List</h1>
      <TaskForm
        taskName={taskName}
        taskDescription={taskDescription}
        setTaskName={setTaskName}
        setTaskDescription={setTaskDescription}
        onAddTask={handleAddTask}
      />
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;
