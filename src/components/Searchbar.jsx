import React from 'react';
import { IoSearch } from "react-icons/io5";

export default function Searchbar() {
  return (
    <div className='searchbar'>
        <input type="text" placeholder='Enter your Search ...'/>
        <IoSearch className='icons'/>
    </div>
  )
}
