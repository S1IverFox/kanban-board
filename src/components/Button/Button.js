import React from 'react';
import './Button.css'

const Button = ({btnType, btnText, btnStatus, onClickBtn}) => {
    const btnClass = `btn ${btnType} ${btnStatus}`;
    const disbBtn = btnStatus ? '' : 'disabled';
    return (
        <button disabled={disbBtn} className={btnClass} onClick={onClickBtn}>{btnText}</button>
    )
}

export default Button