import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers' 
import thunk from 'redux-thunk'
const initValue={
    'value':1
}
const store=createStore(
    rootReducer,
    initValue,
    applyMiddleware(thunk)
)
export default store