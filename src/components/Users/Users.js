import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";
import {UserForm} from "../UserForm/UserForm";

const Users = () => {

    const dispatch = useDispatch();

    const {users} = useSelector(state => state.users);

    const [, setUsers] = useState();

    useEffect(() => {
        userService.getAllUsers().then(value => value.data).then(value => dispatch(userActions.setUsers(value)))
    }, [])

    return (
        <div>
            <div>
                <UserForm/>
            </div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};