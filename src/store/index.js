import {createStore} from 'redux'
import rootReducer from '../reducers' 
const initValue={
    'value':1
}
const store=createStore(rootReducer,initValue)
export default store