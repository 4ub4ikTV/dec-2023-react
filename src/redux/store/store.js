import {createStore} from "redux";

import {baseReducer} from "../reducers/baseReducer";

let store = createStore(baseReducer)

export {
    store
}