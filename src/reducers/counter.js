

const counterReducer = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state - action.payload
        default:
            let defaultState = 0
            return defaultState

    }
}

export default counterReducer