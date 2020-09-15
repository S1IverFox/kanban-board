import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Add from './Add';
import Ready from './Ready';

class Backlog extends Component {
    constructor (props) {
        super(props)
        this.state = {
            button: (<Add onClick={this.createInput}/>),
            input: null,
            inputValue: null,
            tasks: [],
            readyTask: [],
            btnSub: null,
            listInit: false
        }

        this.addReadyTask = this.addReadyTask.bind(this)
        this.addValue = this.addValue.bind(this)
        this.createInput = this.createInput.bind(this)
        this.addTask = this.addTask.bind(this)
        this.delTask = this.delTask.bind(this)
    }

    addReadyTask = (e) => {
        const task = e.target.textContent
        this.setState({
            readyTask: [...this.state.readyTask, task]
        })
    }

    createInput = () => {
        const input = (
            <input onChange={this.addValue} />
        )
        const btnSub = (
            <button onClick={this.addTask}>
                <span>Submit</span>
            </button>
        )
        this.setState({
            buttonInit: true,
            
            input: input,
            listInit: false,
            button: null,
            btnSub: btnSub
        })
    }

    addValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    addTask = () => {
        if (this.state.inputValue === null) {
            return
        }
        this.setState({
            input: null,
            tasks: [...this.state.tasks, this.state.inputValue],
            inputValue: null,
            listInit: true,
            btnSub: null,
            button: <Add onClick={this.createInput}/>
        })
        this.props.active(this.state.tasks.length + 1)
    }

    delTask = (value) => {
        this.state.tasks.splice(value, 1)
    }

    render () {
        const taskList = this.state.tasks.map((item, index) => {
            return (
                <li
                    onClick={this.addReadyTask}
                    key={index}
                    index={index}>
                    {item}
                </li>
            )
        })
        return (
            <div>
                <Router>
                    <Route />
                    <div>
                        <h3>Backlog</h3>
                    </div>
                    <div>
                        <ul>{taskList}</ul>
                    </div>
                    {this.state.input}
                    <div>
                        {this.state.button}
                        {this.state.btnSub}
                    </div>
                    <Ready 
                        tasks={taskList}
                        listInit={this.state.inputValue}
                        readyTask={this.state.readyTask}
                        delTask={this.delTask}
                        finished={this.props.finished}
                        minusActive={this.props.minusActive}
                        
                        />
                </Router>
            </div>

        )
    }
    
}

export default Backlog;