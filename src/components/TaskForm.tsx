import React, { useEffect, useRef } from "react";
import { useTasks } from "../context/TaskContext";
interface TaskFormProps {
  taskName: string;
  taskDescription: string;
  setTaskName: React.Dispatch<React.SetStateAction<string>>;
  setTaskDescription: React.Dispatch<React.SetStateAction<string>>;
}

const TaskForm = ({
  taskName,
  taskDescription,
  setTaskName,
  setTaskDescription,
}: TaskFormProps) => {
  const { addTask } = useTasks();

  const handleAddTask = () => {
    if (!taskName.trim()) return;
    addTask(taskName, taskDescription);
    setTaskName('');
    setTaskDescription('');
  };
  return (<div className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={e => setTaskDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>);
};

export default TaskForm;
