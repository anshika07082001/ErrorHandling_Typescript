import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import ErrorBoundaryClass from './components/ErrorBoundaryClass';
import NumGeneratorClass from './components/NumGeneratorClass';
import ErrorBoundaryFunc from './componentsFunc/ErrorBoundaryFunc';
import NumGeneratorFunc from './componentsFunc/NumGeneratorFunc';

function App() {
  var [numClass,setNumClass]=useState(6)
  var [numFunc,setNumFunc]=useState(6)
  // function for class component btn Click
  const clickHandler =()=>{
    var n = Math.floor(Math.random()*10)
    setNumClass(n)
  }
  // function for functional component btn Click
  const clickHandlerFunc=()=>{
    var n = Math.floor(Math.random()*20)
    setNumFunc(n)
  }
  return (
    <div className="App">
      <h2>1. Random number generation using class components</h2>
      <div className='errorDiv'>
      <ErrorBoundaryClass generator={clickHandler} num={numClass}>
        <NumGeneratorClass generator={clickHandler} num={numClass}/>
      </ErrorBoundaryClass>
      </div>
      <h2>2. Random number generation using functional component</h2>
      <div className='errorDiv'>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFunc} onReset={clickHandlerFunc} >
          <NumGeneratorFunc btnHandler={clickHandlerFunc} num={numFunc}/>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
