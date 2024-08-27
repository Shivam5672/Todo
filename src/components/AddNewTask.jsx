import React from 'react';
import { IoClose } from "react-icons/io5";

export default function AddNewTask({ show, onClose }) {
    if (!show) return null;
    return (
        <div className='add-task'>
            <div className="task-container">
                <div className='modal-header'>
                    <h3>Add New Task</h3>
                    <button onClick={onClose}><IoClose /></button>
                </div>
                <div className='task-inps'>
                    <label htmlFor="task-desc">Task: </label>
                    <textarea name="task-desc" id="task-desc" placeholder='Enter your task ...' rows={1} cols={25}></textarea>
                </div>
                <div className='task-save-exit-btns'>
                    <button>Save</button>
                    <button onClick={onClose}>Exit</button>
                </div>
            </div>
        </div>
    )
}
