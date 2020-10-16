import { DECREMENT, INCREMENT } from "../reduxConstant"

export default function IncrementReducer(state = 0, action) {
    console.log(action,'action in reducer')
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}
