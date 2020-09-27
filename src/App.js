import React, {useState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions'
import {decrement} from './actions'

function App() {

	const counter = useSelector(state => state.counter )
	const logged = useSelector(state => state.logged)
	const dispatch = useDispatch()

  return (
    <div className="App">
    	<h1>Counter {counter} </h1>
    	<button onClick={() => dispatch(increment())} >+</button>
    	<button onClick={() => dispatch(decrement())} >-</button>

    	{logged ? (
    		<h2>User status : onLine</h2>
    	):(
    		<h2>User status : offLine</h2>
    	)}
    </div>
  );
}

export default App;
