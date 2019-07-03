import React from 'react';

import IconoEliminar from './iconoEliminar';
import IconoCompletar from './iconoCompletar';

const TodoList = (props) => {
    const renderTareas = (data) => (
        data.map((item) => (
            <li key={item.id}>
                {item.text}
                <div className="buttons">
                    <button className="remove" onClick={ () => { props.removeTarea(item.id) } }>
                        <IconoEliminar /> 
                    </button>
                    <button className="complete" onClick={ () => { props.completeTarea(item.id) } }>
                        <IconoCompletar />
                    </button>
                </div>
            </li>
        ))
    )
    
    const showTareas = () => {
        const todo = props.data.filter(item => !item.finished);
        return renderTareas(todo);
    }

    return (
        <ul className="todo" id="todo">
            { showTareas() }
        </ul>
    );
};

export default TodoList;