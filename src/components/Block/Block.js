import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InfoBlock from '../Info/Info';
import './Block.css';

class Block extends Component {
    state = {
            newItem: '',
            showInput: false
        }

    showInput = () => {
        this.setState({showInput: true})
        if (this.props.blockId !== 1 && this.props.prevItem) {
            this.setState({newItem: this.props.prevItem[0]})
        }
        //this.props.submitStatusChange()
    }

    onChangeInput = e => {
        const item = e.target.value
        this.setState({newItem: item})
    }

    addItem = () => {
        const item = this.state.newItem
        if (item !== '') {
            if (this.props.blockId > 1) {
                let prevArr = this.props.prevItem.filter(element => element !== item)
                this.props.updateItems(this.props.blockId - 1, prevArr)
            }

            const newArr = this.props.blockItems.concat(item)
            this.props.updateItems(this.props.blockId, newArr)

            this.setState({showInput: false})
            this.setState({newItem: ''})
            //this.props.submitStatusChange()
        }
    }

    render () {
        let showInput = this.state.showInput
        let prevItem = this.props.prevItem
        let addBtn = <Button btnType='add' btnText='+ Add card' btnStatus={!showInput} onClickBtn={this.showInput}/>

        if (this.props.blockId > 1 && this.props.prevItem.length === 0) {
            addBtn = <Button btnType='add' btnText='+ Add card' btnStatus={false}/>
        }
        
        let submitBtn

        if (showInput) {
            this.props.blockId === 1 ? prevItem = false : prevItem = this.props.prevItem
            submitBtn = <Button btnType='submit' btnText='Submit' btnStatus={true} onClickBtn={this.addItem}/>
        }
        let input = <Input showInput={showInput} onChange={this.onChangeInput} prevItem={prevItem}/>

        return (
            <div className='block'>
                
                <Router>
                    <div className="block-header"><Link to={`/info/${this.props.title}`}>{this.props.title}</Link> </div>
                    <Route path="/info/:name" render={(props) => <InfoBlock items={this.props.blockItems} {...props}/>} />
                </Router>

                {this.props.blockItems.map((item, id) => {
                    return (
                        <div className='item' key={id}>{item}</div>
                        
                    )
                })}
                {input}
                <div className='button'>
                    {addBtn}
                    {submitBtn}
                </div>
            </div>

        )
    }
}

export default Block;