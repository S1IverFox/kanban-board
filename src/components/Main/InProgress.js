import React from 'react';
import Add from './Add';
import Finished from './Finished';


function InProgress () {
    return (
        <div>
            <h3>In progress</h3>
            <div>
                <Add />
            </div>
            <Finished />
        </div>
    )
}

export default InProgress