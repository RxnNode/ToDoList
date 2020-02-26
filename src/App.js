import React from 'react';
import './App.css';
import ToDoList from './components/todolist'

class App extends React.Component{
  state = {
    ls: [
      {
        id: 0,
        title: 'Test',
        finished: false
      },
      {
        id: 2,
        title: 'lemefs',
        finished: false
      },
      {
        id: 3,
        title: 'Test',
        finished: false
      }
    ]
  }
  
  render() {
    return(
      <div className="App">  
        <h1>Hello</h1>
        <ToDoList list = {this.state.ls}/>
      </div>
    );
  }
  
}



export default App;
