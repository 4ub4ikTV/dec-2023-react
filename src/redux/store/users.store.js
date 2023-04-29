import {createStore} from "redux";
import {userReducer} from "../reducers/user.reducer";


let usersStore = createStore(userReducer)

export {
    usersStore
}