import React from 'react'
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { TfiFlagAlt2 } from "react-icons/tfi";

export default function FiltersList({show, onClose}) {
    if(!show) return null;

    return (
        <div className='filter-list' onClick={onClose}>
            <div><FaSortAlphaDown /> A-Z</div>
            <div><FaSortAlphaDownAlt /> Z-A</div>
            <div><MdUpdate /> Recent</div>
            <div><TfiFlagAlt2 />Completed</div>
            {/* <div>Deleted</div> */}
        </div>
    )
}
