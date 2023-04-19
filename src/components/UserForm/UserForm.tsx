import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/user.service";
import {IUseState} from "../../types/useState.type";

interface IProps {
    setUsers: IUseState<IUser[]>
}

const UserForm: FC<IProps> = ({setUsers}) => {

    const {register, handleSubmit, reset, formState: {isValid}} = useForm<IUser>();

    const save: SubmitHandler<IUser> = async (user) => {
        const {data} = await userService.createUser(user);
        setUsers(prev => [...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name', {
                required: {
                    value: true,
                    message: 'required'
                }
            })}/>

            <input type="text" placeholder={'email'} {...register('email', {
                required: {
                    value: true,
                    message: 'required'
                }
            })}/>

            <button disabled={!isValid}>Save</button>

        </form>
    );
};

export {UserForm};