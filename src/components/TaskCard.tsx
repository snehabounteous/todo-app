import React from 'react'
interface Task {
  id: number;
  name: string;
  description: string;
}
const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="task-card">
      <h3>{task.name}</h3>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskCard
