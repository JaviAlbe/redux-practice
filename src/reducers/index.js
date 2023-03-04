
/** I will use this index.js to combine all the reducers using combineReducers from redux
 * this way I will have an object with all the reducers I can call from anywhere*/

import {combineReducers} from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const allReducers = combineReducers({
    counter: counterReducer,
    loisLogged: loggedReducer
})

export default allReducers