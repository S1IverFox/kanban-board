import React, { Component } from 'react';
import Block from '../Block/Block';
import Footer from '../Footer/Footer';
import './Main.css'



class KanbanBoard extends Component {
    state = {
            blocks : [
                {id: 1, title: 'Backlog', items: []},
                {id: 2, title: 'Ready', items: []},
                {id: 3, title: 'In Progress', items: []},
                {id: 4, title: 'Finished', items: []}
            ],
            //submitStatus: false,
            active: 0,
            finished: 0
        }

    // submitStatusChange = () => {
    //     this.setState({submitStatus: !this.state.submitStatus})
    // }
    
    updateItems = (blockId, newItems) => {
        let active = 0
        let finished = 0
        const blocksArr = this.state.blocks.map((item) => {
            if (item.id === blockId) {item.items = newItems}
            if (item.id === 1) {active = item.items.length}
            if (item.id === 4) {finished = item.items.length}
            return item
        }) 
        
        this.setState({blocks: blocksArr})
        this.setState({active: active})
        this.setState({finished: finished})
    }

    render() {
        return (
            <div className='main-wrapper'>
                {this.state.blocks.map((item) => {
                    let prevItem = this.state.blocks.find(tmp => tmp.id === item.id - 1)
                    if (item.id > 1) {prevItem = prevItem.items} 
                    else {prevItem = []}
                        return (
                            <Block
                                key = {item.id}
                                blockId = {item.id}
                                title = {item.title}
                                blockItems = {item.items}
                                updateItems = {this.updateItems}
                                prevItem = {prevItem}
                               // submitStatus = {this.state.submitStatus}
                               // submitStatusChange = {this.submitStatusChange} 
                               />
                        )
                })}
                
                <Footer
                    activeTasks={this.state.active}
                    finishedTasks={this.state.finished}
                    />
                    
            </div>
        )
    }
}
    
export default KanbanBoard;