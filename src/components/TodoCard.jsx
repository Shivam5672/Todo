import React from 'react'
import data from '../../public/data.json';
import TodoPreview from './TodoPreview';

export default function TodoCard() {
  return (
    <div className='todo-box'>
      {data.map((datum, index) => {
        return <TodoPreview key={index} data = {datum}/>
      })}
    </div>
  )
}
