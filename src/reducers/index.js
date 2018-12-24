// import { combineReducers } from 'redux'
// import todos from './todos'

// export default combineReducers({
//   todos
// })

// import {Increment,Decrement} from '../actions'
export default(state,action)=>{
    switch (action.type){
        case 'increment':
        return Object.assign({},{'value':state.value + 1})
        case 'decrement':
        return Object.assign({},{'value':state.value - 1})
        default:
        return state
    }
}