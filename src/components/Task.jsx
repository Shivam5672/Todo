import React from 'react'

export default function Task({task}) {
  return (
    <div className='task-card-info'>
        <p>{task.task_desc}</p>
        <p>{task.add_task_date}</p>
        <p>{task.add_task_time}</p>
    </div>
  )
}
