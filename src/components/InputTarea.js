import React from 'react';

const InputTarea = (props) => {
    return (
        <form>
            <input type="text" placeholder="Ingrese una tarea..." id="item" onSubmit={props.onSubmit} onChange={props.onChange} value={props.value} />
            <button role="submit" onClick={props.onSubmit} id="add">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16" className="dick"><g><path className="fill" d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"/></g></svg>
            </button>
        </form>
    );
};

export default InputTarea;