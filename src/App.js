import React, { Component } from 'react';
import './Reset.min.css';
import './App.css';

import CompletedList from './components/CompletedList';
import TodoList from './components/TodoList';
import InputTarea from './components/InputTarea';

import { nuevoId } from './utils/utils';

class App extends Component{
  state = {
    inputTarea: '',
    tareas: [
      {
        id: nuevoId(),
        text: 'DLKAJF',
        completed: false
      }
    ]
  }

  createTarea = () => {
    const newTarea = {
      id: nuevoId(),
      text: this.state.inputTarea,
      completed: false
    }

    this.setState((prevState) => {
      return {
        inputTarea: '',
        tareas: [newTarea, ...prevState.tareas]
      }
    })
  }

  completeTarea = (id) => {
    this.setState( prevState => (
      prevState.tareas.map((item) => {
        if(item.id === id){
            item.finished = true;
        }
        return item;
      })
    ));
  }

  onChange = ({ target }) => {
    this.setState({
      inputTarea: target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.inputTarea.length){
      this.createTarea();
    }
  }

  removeTarea = (id) => {
    this.setState((prevState) => {
      const newTareas = prevState.tareas.filter((item) => {
        return item.id !== id; 
      });

      return {
        tareas: newTareas
      }
    });
  }

  render(){
    return (
      <div>
        <header>
          <InputTarea value={this.state.inputTarea} onChange={this.onChange} onSubmit={this.onSubmit} />
        </header>

        <div className="container">
          <TodoList removeTarea={this.removeTarea} completeTarea={this.completeTarea} data={this.state.tareas} />
          <CompletedList removeTarea={this.removeTarea} data={this.state.tareas} />
        </div>

      </div>
    );
  }
}

export default App;