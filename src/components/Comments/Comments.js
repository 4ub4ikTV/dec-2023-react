import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commentService} from "../../services";
import {commentActions} from "../../redux";
import {Comment} from "../Comment/Comment";
import {CommentForm} from "../CommentForm/CommentForm";

const Comments = () => {

    const dispatch = useDispatch();

    const {comments} = useSelector(state => state.comments);

    useEffect(() => {
        commentService.getAllComments().then(value => value.data).then(value => dispatch(commentActions.setComments(value)))
    }, [])

    return (
        <div>
            <CommentForm/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};