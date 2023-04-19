import React, {useEffect, useState} from 'react';

import {IComment} from "../interfaces/comment.interface";
import {commentService} from "../services/comment.service";
import {CommentForm} from "../components/CommentForm/CommentForm";
import {Comments} from "../components/Comments/Comments";


const CommentsPage = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAllComments().then(value => value.data).then(value => setComments(value))
    }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsPage};