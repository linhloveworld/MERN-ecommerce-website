//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, Flex } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { decrement,increment } from './slices/counterSlice';
import styled from 'styled-components';
function App() 
{
    
  const Button = styled.button({color:'grey',});
  const count = useSelector((state) => state.Counter.value)
  const dispatch = useDispatch()
    return (
        <div>
            <div>
                <Button
                aria-label='Increment value'
                onClick={()=>dispatch(increment())}
                >Increment</Button>
                <span>{count}</span>
                <Button
                aria-label='Decrement value'
                onClick={()=>dispatch(decrement())}
                >Decrement</Button>
            </div>
        </div>
    )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
}

export default App;
