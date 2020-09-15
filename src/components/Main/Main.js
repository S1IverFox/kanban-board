import React, { Component } from 'react';
import Backlog from './Backlog';
import Footer from '../HF/Footer'


class KanbanBoard extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            tasks: null,
            finishedTasks: null
        }
    }
    
    activeCounter = (value) => {
        this.setState({
            tasks: value
        })
    }

    minusActiveCounter = (value) => {
        this.setState({
            tasks: value
        })
    }

    finishedCounter = (value) => {
        this.setState({
            finishedTasks: value
        })
    }

    render() {
        return (
            <div>
                <Backlog 
                    active={this.activeCounter}
                    finished={this.finishedCounter}/>
                <Footer 
                    activeTasks={this.state.tasks}
                    finishedTasks={this.state.finishedTasks} />
            </div>
        )
    }
    }
    

export default KanbanBoard;