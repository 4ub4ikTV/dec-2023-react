import React from 'react';
import {commentService} from "../../services";
import {useDispatch} from "react-redux";
import {commentActions} from "../../redux";
import {useForm} from "react-hook-form";

const CommentForm = () => {

    const {register, handleSubmit, reset, formState: {isValid}} = useForm();

    const dispatch = useDispatch();
    const save = async (comment) => {
        const {data} = await commentService.createComment(comment)
        dispatch(commentActions.createComment(data))
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