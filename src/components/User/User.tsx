import React, {FC} from 'react';

import {IUser} from "../../interfaces/user.interface";


interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    const {id, name, email} = user;
    return (
        <div>
            <h3>ID - {id}</h3>
            <h3>Name - {name}</h3>
            <h3>Email - {email}</h3>
        </div>
    );
};

export {User};