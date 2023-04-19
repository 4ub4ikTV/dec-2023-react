import React, {FC} from 'react';
import {IComment} from "../../interfaces/comment.interface";

interface IProps {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {
    const {id, name, email, body} = comment;
    return (
        <div>
            <h3>ID - {id}</h3>
            <h3>Name - {name}</h3>
            <h3>Email - {email}</h3>
            <h3>Body - {body}</h3>
        </div>
    );
};

export {Comment};