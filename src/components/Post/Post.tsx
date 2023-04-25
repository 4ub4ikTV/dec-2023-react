import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../interfaces/post.interface";
import {useParams} from "react-router-dom";
import {postService} from "../../services/post.service";
import {useAppLocation} from "../../hooks/router.hooks";

const Post: FC = () => {

    const {state} = useAppLocation<IPost>()

    const [post, setPost] = useState<IPost>(null);

    const {postId} = useParams();

    useEffect(() => {
        if (postId) {
            postService.getById(postId).then(value => value.data).then(value => setPost(value))
        } else {
            setPost(state)
        }
    }, [postId, state])

    return (
        <div>
            {post && (
                <div>
                    <div>ID - {post.id}</div>
                    <div>Title - {post.title}</div>
                    <div>Body - {post.body}</div>
                </div>
            )}
        </div>
    );
};

export {Post};