import React, {useEffect, useState} from 'react';
import {CommentForm} from "../CommentForm/CommentForm";
import {Comment} from "../Comment/Comment";
import {commentService} from "../../services/comment.service";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAllComments().then(value => value.data).then(value => setComments(value))
    }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};