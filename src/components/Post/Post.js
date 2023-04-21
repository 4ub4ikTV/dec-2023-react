import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const Post = () => {

    const [post, setPost] = useState(null);

    const {postId} = useParams();

    useEffect(() => {
        postService.getById(postId).then(value => value.data).then(value => setPost(value))
    }, [postId])

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