import { createStore } from 'redux'


const loginReducer = (state = {loggedIn: false}, action) => {
    switch(action.type){
        case 'setTrue':
            return {
                loggedIn: true
            }
        case 'setFalse':
            return {
                loggedIn: false
            }
    }

    return state
}

const store = createStore(loginReducer)
