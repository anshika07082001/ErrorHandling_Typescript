import React, { useState } from 'react';
import './App.css';
import ErrorBoundaryClass from './components/ErrorBoundary';
import NumGenerator from './components/NumGenerator';

function App() {
  var [num,setNum]=useState(0)
  const clickHandler =()=>{
    var n = Math.floor(Math.random()*10)
    setNum(n)
  }
  return (
    <div className="App">
      <h2>1. Random number generation using class components</h2>
      <ErrorBoundaryClass generator={clickHandler} num={num}>
        <NumGenerator generator={clickHandler} num={num}/>
      </ErrorBoundaryClass>
    </div>
  );
}

export default App;
