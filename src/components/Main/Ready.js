import React, { Component } from 'react';
import Add from './Add';
import InProgress from './InProgress';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Ready extends Component {
    constructor (props) {
        super (props)
        this.state = {
            button: <Add onClick={this.createSelect}/>,
            selectConteiner: null,
            listInit: false,
            backlogTask: [],
            readyTask: [],
            taskArr: [],
            dropInit: false
        }

        this.createSelect = this.createSelect.bind(this)
        this.addTask = this.addTask.bind(this)
        this.selectTask = this.selectTask.bind(this)
        this.delTask = this.delTask.bind(this)
    }

    createSelect = () => {
        if (this.props.tasks.length === 0) {
            return
        }
        const selectConteiner = (
            <div onClick={this.addTask} ></div>
        )
        this.setState({
            selectConteiner: selectConteiner
        })
    }

    addTask = () => {
        if (this.state.dropInit === true) {
            return
        }
        this.setState({
            dropInit: true,
            backlogTask: React.Children.toArray(
                [this.state.backlogTask, this.props.tasks])
        })
    }

    selectTask = (e) => {
        const task = e.target.textContent
        const index = e.target.getAttribute('index')

        this.setState({
            readyTask: [...this.state.readyTask, task],
            backlogTask: [],
            selectConteiner: null,
            dropInit: false,
            listInit: true
        })
        this.props.delTask(index)
        this.props.minusActive(this.props.tasks.length - 1)
    }

    delTask = (value) => {
        const newArr = this.state.readyTask.splice(value, 1)
        this.setState({
            taskArr: [...this.state.readyTask, newArr]
        })
    }

    render() {
        const dropDown = this.state.backlogTask.map((item, index) => {
            return (
                <div
                    onClick={this.selectTask}
                    key={index}
                    index={index}
                    >
                    {item}
                </div>
            )
        })
        const ready = this.state.readyTask.map((item, index) => {
            return (
                <li 
                    key={index}
                    index={index}
                    >
                    {item}
                </li>
            )
        })

        const routePage = () => (
            <div readyTask={this.state.readyTask}></div>
        )
        return (
            <Router>
                <Route path='/ready' component={routePage}/>
            <div>
                <h3>Ready</h3>
                <div>
                    {this.state.selectConteiner}
                    {ready}
                </div>
                

                <div>
                    <ul>{dropDown}</ul>
                </div>
                
                <div>
                    {this.state.button}
                </div>
                

                <InProgress
                    listInit={this.state.listInit}
                    readyTask={ready}
                    delTask={this.delTask}
                    finished={this.props.finished}
                />
            </div>
            </Router>
        )
    }
}

export default Ready;