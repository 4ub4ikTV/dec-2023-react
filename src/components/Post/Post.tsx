import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../interfaces/post.interface";
import {useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const Post: FC = () => {

    const [post, setPost] = useState<IPost>();

    const {postId} = useParams<{postId: string}>();

    useEffect(() => {
        if (postId) {
            postService.getById(Number(postId)).then(value => value.data).then(value => setPost(value))
        }
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