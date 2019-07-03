import React from 'react';

import iconoEliminar from '../utils/iconoCompletar.svg';

const CompletedList = (props) => {
    const renderTareas = (data) => (
        data.map((item) => (
            <li key={item.id}>
            {item.text}
            <div className="buttons">
                <button className="remove" onClick={ () => { props.removeTarea(item.id) } }> {iconoEliminar} </button>
            </div>
        </li>
        ))
    )
    
    const showTareas = () => {
        const completed = props.data.filter(item => item.finished);
        return renderTareas(completed);
    }

    return (
        <ul className="todo" id="completed">
            { showTareas() }
        </ul>
    );
};

export default CompletedList;