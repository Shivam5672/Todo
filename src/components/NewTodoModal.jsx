import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import AddNewTask from './AddNewTask';

export default function NewTodoModal({ show, onClose }) {
    
    const [showAddTask, setShowAddTask] = useState(false);
    const handleToggleAddTask = () => {
        if(showAddTask){
            setShowAddTask(false);
        }
        else{
            setShowAddTask(true);
        }
    }

    if (!show) return null;
    return (
        <div className='add-new-todo'>
            <div className='new-todo-container'>
                <div className='modal-header'>
                    <h3>Add New Todo</h3>
                    <button onClick={onClose}><IoClose /></button>
                </div>
                <div className="todo-inp-container">
                    <div className="todo-inps">
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" id="title" placeholder='Enter Todo Title ...' />
                    </div>
                    <div className="todo-inps">
                        <label htmlFor="desc">Description: </label>
                        <textarea name="desc" id="desc" placeholder='Enter Todo Description ...' rows={5} cols={23}></textarea>
                    </div>
                    <div className="todo-btns">
                        <button className='save-todo'>Save</button>
                        <button className='add-new-task' onClick={handleToggleAddTask}>Add Task</button>
                        <button className='cancel-todo' onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
            <AddNewTask show = {showAddTask} onClose = {handleToggleAddTask}/>    
        </div>
    )
}
