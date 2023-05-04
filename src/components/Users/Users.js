import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();

    const {users} = useSelector(state => state.users);

    useEffect(()=>{
        userService.getAllUsers().then(value => value.data).then(value => dispatch(userActions.setUsers(value)))
    }, [])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};