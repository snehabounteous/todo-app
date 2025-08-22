import React, { useEffect, useRef } from "react";
interface TaskFormProps {
  taskName: string;
  taskDescription: string;
  setTaskName: (value: string) => void;
  setTaskDescription: (value: string) => void;
  onAddTask: () => void;
}

const TaskForm = ({
  taskName,
  taskDescription,
  setTaskName,
  setTaskDescription,
  onAddTask,
}: TaskFormProps) => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);
  return (<div className="form">
    <div className="form">
      <input
        ref={nameInputRef}
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={onAddTask}>Add Task</button>
    </div>
  </div>);
};

export default TaskForm;
