import React from 'react';
import User from './User';
import '../../Style.css'
 
function Header () {
    return (
        <div className='header'>
            <h1>Awsome Kanban Board</h1>
            <User />
        </div>
    )
}

export default Header