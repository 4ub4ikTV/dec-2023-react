let initState = {
    isLoading: false,
    users: [],
    posts: []
};
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return {...state, isLoading: true}

        case 'SET_USERS':
            return {...state, isLoading: false, users: [...action.payload]}

        case 'SAVE_USERS':
            return {...state, users: state.users}

        case 'SET_POSTS':
            return {...state, isLoading: false, posts: [...action.payload]}

        case 'SAVE_POSTS':
            return {...state, posts: state.users}

        default:
            return state
    }
}

export {
    userReducer
}