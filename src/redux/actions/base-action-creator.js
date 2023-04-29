import {DEC, INC, RESET} from "./base.action";

const decrement = () => {
    return {type: DEC, payload: 1}
}
const increment = () => {
    return {type: INC, payload: 1}
}
const reset = () => {
    return {type: RESET}
}

export {
    decrement,
    increment,
    reset
}