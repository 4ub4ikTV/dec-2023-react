import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services";
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const UserForm = () => {

    const {register, handleSubmit, reset, formState: {isValid}} = useForm();

    const dispatch = useDispatch();

    const save = async (user) => {
        const {data} = await userService.createUser(user)
        dispatch(userActions.createUser(data))
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

export {UserForm};