import { combineReducers } from 'redux'
import IncrementReducer from './incrementReducer'

const rootReducer = combineReducers({
    counter: IncrementReducer
})

export default rootReducer