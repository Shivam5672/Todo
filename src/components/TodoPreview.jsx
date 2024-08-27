import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import ShowTask from './ShowTask';

export default function TodoPreview({data}) {
    const [showTasks, setShowTasks] = useState(false);
    const handleShowTask = () => {
        if(showTasks){
            setShowTasks(false);
        }
        else{
            setShowTasks(true);
        }
    }
  return (
    <div className='todo-preview' onClick={handleShowTask}>
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        <p>{data.date}</p>
        <p>{data.progress}%</p>
        <MdEdit/>
        <button className='task-btn' onClick={handleShowTask}>Show Tasks</button>
        <AiFillDelete/>
        <ShowTask title = {data.title} tasks = {data.tasks} show = {showTasks} onClose = {handleShowTask}/>
    </div>
  )
}
