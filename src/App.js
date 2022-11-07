import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './Welcome';

function App() {
  const s = {
    sid: "101315548",
    name: "Ferdous Azizi",
    location: "George Brown College, Toronto"
  }
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Welcome To Fullstack Development - 1</h1>
      <Student stud = {s}></Student>
      
    </div>
  );
}

export default App;
