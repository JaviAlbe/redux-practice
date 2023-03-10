import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions";

function App() {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment(5))}>INCREASE +</button>
            <button onClick={() => dispatch(decrement(5))}>DECREASE -</button>
            {isLogged ? <h3>I am logged in</h3> : <h3>Welcome, please sign in</h3>}
        </div>
    );
}

export default App;
