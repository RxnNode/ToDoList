import React from 'react';
import './App.css';
import ToDoList from './components/todolist'

class App extends React.Component{
  state = {
    todolist: [
      {
        id: 0,
        title: 'Test',
        finished: false
      }
    ]
  }
  render() {
    return(
      <div className="App">  
        <h1>Hello</h1>
        <ToDoList />
      </div>
    );
  }
  
}



export default App;
