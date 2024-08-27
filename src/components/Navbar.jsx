import React, { useState } from 'react'
import Searchbar from './Searchbar'
import { FaPlus } from "react-icons/fa";
import { GrSort } from "react-icons/gr";
import FiltersList from './FiltersList';
import NewTodoModal from './NewTodoModal';

export default function Navbar() {
    const [showFilters, setShowFilters] = useState(false);

    const handleToggleFilter = () => {
        if(showFilters){
            setShowFilters(false);
        }
        else{
            setShowFilters(true);
        }
    }

    const [showNewTodo, setShowNewTodo] = useState(false);
    
    const handleToggleTodo = () => {
        if(showNewTodo){
            setShowNewTodo(false);
        }
        else{
            setShowNewTodo(true);
        }
    }

    return (
        <>
            <div className='navbar'>
                <div className='logo-container'>
                    <h1>iTodoBox</h1>
                </div>
                <Searchbar />
                <div className='icons-add-sort'>
                    <FaPlus className='icons' onClick={handleToggleTodo}/>
                    <GrSort className='icons' onClick={handleToggleFilter}/>
                    <FiltersList show={showFilters} onClose={handleToggleFilter}/>
                    <NewTodoModal show={showNewTodo} onClose={handleToggleTodo}/>
                </div>
            </div>
        </>
    )
}
