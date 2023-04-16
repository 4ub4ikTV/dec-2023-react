import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";

const UserForm = ({setUsers}) => {

    const {register, handleSubmit, reset, formState: { isValid}} = useForm();

   const save = async (user) => {
        const {data} = await userService.createUser(user);
        setUsers(prev=>[...prev, data])
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
            <input type="text" placeholder={'username'} {...register('username', {
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

export {
    UserForm
};