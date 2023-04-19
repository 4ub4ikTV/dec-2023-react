import React, {useEffect, useState} from 'react';

import {IUser} from "../interfaces/user.interface";
import {UserForm} from "../components/UserForm/UserForm";
import {Users} from "../components/Users/Users";
import {userService} from "../services/user.service";

const UsersPage = () => {

    const [users, setUsers] = useState<IUser[]>([]);


    useEffect(() => {
        userService.getAllUsers().then(value => value.data).then(value => setUsers(value))
    }, [])
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UsersPage};