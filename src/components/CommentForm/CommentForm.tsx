import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IUseState} from "../../types/useState.type";
import {IComment} from "../../interfaces/comment.interface";
import {commentService} from "../../services/comment.service";

interface IProps {
    setComments: IUseState<IComment[]>
}

const CommentForm: FC<IProps> = ({setComments}) => {

    const {register, handleSubmit, reset, formState: {isValid}} = useForm<IComment>();

    const save: SubmitHandler<IComment> = async (comment) => {
        const {data} = await commentService.createComments(comment)
        setComments(prev => [...prev, data])
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