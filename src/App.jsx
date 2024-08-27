import React from 'react'
import Navbar from './components/Navbar'
import FiltersList from './components/FiltersList'
import TodoCard from './components/TodoCard'

export default function App() {
  return (
    <div className='app'>
      <Navbar/>
      <TodoCard/>
    </div>
  )
}
