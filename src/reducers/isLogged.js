

const loggedReducer = (state = false, action) => {
    switch (action.type){
        case 'SIGN_IN':
            /** returns the opposite of the current state */
            return !state
        default:
            return false
    }
}

export default loggedReducer