import React from 'react';
import './Input.css'

const Input = ({showInput, onChange, prevItem}) => {
    const display = showInput ? 'block' : 'none'
    if (prevItem) {
        return (
            <select className='inputText' onChange={onChange} style={{display: display}}>
                {prevItem.map((item, id) => {
                    return (
                        <option value={item} key={id}>{item}</option>
                    )
                })}
            </select>
        )
    } else {
        return (
            <input className='inputText' onChange={onChange} style={{display: display}} />
        )
    }
}
 
export default Input