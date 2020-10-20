import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todos from './Todos';
import Users from './users';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Welcome To Hooks</h1>
   
      </header><br></br>
      {/* <Counter/> */}
   
      <Todos/>
    <Users/>
      
    </div>
  );
}

export default App;
