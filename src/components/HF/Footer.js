import React, { Component } from 'react';
import '../../Style.css'

class Footer extends Component {
    constructor (props) {
        super (props)
        this.state = {
        //     task: 0,
        //     finishedTask: 0
        //     }
        //     this.activeCounter = this.activeCounter.bind(this)
        //     this.finishedCounter = this.finishedCounter.bind(this)
        // }
    
        // activeCounter = (value) => {
        //     this.setState({
        //         task: value
        //     })
        // }
        // finishedCounter = (value) => {
        //     this.setState({
        //         finishedTask: value
        //     })
        }
    }
    
    render () {
        const name = 'Elza';
        const year = new Date().getFullYear();

        return (
            <div className='footer'>
                <div>
                    Active tasks: {this.props.activeTasks}
                    Finished tasks: {this.props.finishedTasks}
                </div>
                <div>Kanban board by {name}, {year} </div>
            </div>
        )
    }
}

export default Footer