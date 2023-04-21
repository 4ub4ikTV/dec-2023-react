import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IComment} from "../../interfaces/comment.interface";

interface IProps {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {

    const navigate = useNavigate();

    const {id, name, email, postId, body} = comment;

    return (
        <div>
            <h3>Id - {id}</h3>
            <h3>Name - {name}</h3>
            <h3>Email - {email}</h3>
            <h3>Body - {body}</h3>
            <h3>PostId - {postId}</h3>
            <button onClick={() => navigate(`${postId}`)}>Details-Post</button>
        </div>
    );
};

export {Comment};