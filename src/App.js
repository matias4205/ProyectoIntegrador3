import React, { Component } from 'react';
import './Reset.min.css';
import './App.css';

import CompletedList from './components/CompletedList';
import TodoList from './components/TodoList';

const nuevoId = () => {
  return Math.random().toString(36).substr(2, 9);
}

class App extends Component{
  state = {
    tareas: [
      {
        id: nuevoId(),
        text: 'DLKAJF',
        completed: false
      }
    ]
  }

  completeTarea = (id) => {
    console.log(id);

    this.setState( prevState => (
      prevState.tareas.map((item) => {
        if(item.id === id){
            item.finished = true;
        }
        
        return item;
      })
    ));

    console.log(this.state.tareas);
  }

  removeTarea = (id) => {
    console.log('Removiendo tarea' + id);
  }

  render(){
    return (
      <div>
        <header>
          <input type="text" placeholder="Ingrese una tarea..." id="item" />
          <button id="add">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16" className="dick"><g><path className="fill" d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"/></g></svg>
          </button>
        </header>

        <div className="container">
          <TodoList completeTarea={ this.completeTarea } data={this.state.tareas} />
          <CompletedList removeTarea={this.removeTarea} data={this.state.tareas} />
        </div>

      </div>
    );
  }
}

export default App;