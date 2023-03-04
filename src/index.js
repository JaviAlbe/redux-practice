import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducers from './reducers'

/** The store is created and takes the combinedReducer as a parameter*/
const store = createStore(allReducers)
// //STORE -> Global State
//
// //ACTION -> Modify the state
// const increment = () => {
//     return {
//         type:'INCREMENT'
//     }
// }
// const decrement = () => {
//     return {
//         type:'DECREMENT'
//     }
// }
//
// //REDUCER -> Describe how ACTIONS transform the current state into the next state
// /** The reducer will take two parameters. The default state and a specific action*/
// const counter = (state = 0, action) => {
//     switch (action.type){
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//     }
// }
//
// let store = createStore(counter)
// store.subscribe(() => console.log(store.getState()))
//
// //DISPATCH -> Sends the ACTION to the REDUCER so the STORE gets updated
// store.dispatch(increment())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
