import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";

const CommentForm = ({setComments}) => {

    const {register, handleSubmit, reset, formState: {isValid}} = useForm();

    const save = async (comment) => {
        const {data} = await userService.createComment(comment)
        setComments(prev => [...prev, data])
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
            <input type="text" placeholder={'body'} {...register('body', {
                required: {
                    value: true,
                    message: 'required'
                }
            })}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CommentForm};