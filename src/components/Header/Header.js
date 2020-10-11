import React from 'react';
import User from './User';
import './Header.css'
 
function Header () {
    return (
        <header className='header'>
            <div className='header-wrapper'>
                <h1 className='header-name'>Awsome Kanban Board</h1>
                <User />
            </div>
        </header>
    )
}

export default Header