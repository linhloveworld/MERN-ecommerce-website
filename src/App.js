//import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom/cjs/react-router-dom.min';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './routes';
// import { Button, Flex } from 'antd';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement,increment } from './slices/counterSlice';
// import styled from 'styled-components';
function App() 
{    
  // const Button = styled.button({color:'grey',});
  // const count = useSelector((state) => state.Counter.value)
  // const dispatch = useDispatch()
    return (
        <div>
          <HeaderComponent/>
          <Router>
            <Routes>
              {routes.map((route) => {
                const Page = route.page;
                const Layout = route.isShowHeader ? DefaultComponent : Fragment
                return (
                  <Route key={route.path} path={route.path} element={
                  <Layout>
                  <Page/>
                  </Layout>
                }/>
                );
                })}
            </Routes>
          </Router>
            {/* <div>
                <Button
                aria-label='Increment value'
                onClick={()=>dispatch(increment())}
                >Increment</Button>
                <span>{count}</span>
                <Button
                aria-label='Decrement value'
                onClick={()=>dispatch(decrement())}
                >Decrement</Button>
            </div> */}
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
