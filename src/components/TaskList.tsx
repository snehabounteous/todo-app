import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskCard from './TaskCard';

const TaskList = () => {
  const { tasks, removeTask, updateTask } = useTasks();

  if (tasks.length === 0) {
    return <p>No tasks added yet.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
