import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../../services/user.service";
import {User} from "../User/User";

const Users = () => {

    const userStore = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'START_LOADING'})
        userService.getAll().then(value => value.data).then(value => dispatch({type: 'SET_USERS', payload: value}))
    }, [])

    return (
        <div>
            {userStore.isLoading && <h2>Loading...</h2>}

            {
                userStore.users.map(user=> <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};