import React from 'react';
import '../../Style.css';
import './Footer.css'
    
    function Footer ({activeTasks, finishedTasks}) {
        const name = 'Elza';
        const year = new Date().getFullYear();

        return (
            <div className='footer'>
                <div className='footer-wrapper'>
                    <div className='counters'>
                        <div className='tasks'>Active tasks: {activeTasks}</div>
                        <div className='tasks'>Finished tasks: {finishedTasks}</div>
                    </div>
                    <div className='tasks'>Kanban board by {name}, {year} </div>
                </div>
            </div>
        )
}

export default Footer