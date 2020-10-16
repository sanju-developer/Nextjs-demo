import { DECREMENT, INCREMENT } from "../reduxConstant";

export function increment() {
    console.log('action called')
    return { type: INCREMENT }
}

export function decrement() {
    return { type: DECREMENT }
}