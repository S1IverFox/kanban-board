import React from 'react';
import AddCard from '../img/add-card.png';

function Add ({onClick}) {
    return (
        <div>
            <button onClick={onClick}>
                <img src={AddCard} alt="Добавить карточку" />
                <span>Add card</span>
            </button>
        </div>
    )
}

export default Add