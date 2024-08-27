import React from 'react'
import Task from './Task';

export default function ShowTask({ title, tasks, show, onClose }) {
    if (!show) return null;
    return (
        <div className='show-task-card'>
            <div className='show-sub-task-card'>
                <h1>{title}</h1>
                {tasks.map((task, index) => {
                    return (<Task task={task} key={task.task_id} />)
                })}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}
