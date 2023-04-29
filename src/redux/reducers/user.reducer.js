import {savePosts, saveUsers, setPosts, setUsers, startLoading} from "../actions/actions";

let initState = {
    isLoading: false,
    users: [],
    posts: []
};
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case startLoading:
            return {...state, isLoading: true}

        case setUsers:
            return {...state, isLoading: false, users: [...action.payload]}

        case saveUsers:
            return {...state, users: state.users}

        case setPosts:
            return {...state, isLoading: false, posts: [...action.payload]}

        case savePosts:
            return {...state, posts: state.users}

        default:
            return state
    }
}

export {
    userReducer
}