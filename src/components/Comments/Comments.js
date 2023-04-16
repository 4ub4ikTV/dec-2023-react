import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import {CommentForm} from "../CommentForm/CommentForm";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        userService.getAllComments().then(value => value.data).then(value => setComments(value))
    },[])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};