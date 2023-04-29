import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postService} from "../../services/post.service";
import {Post} from "../Post/Post";

const Posts = () => {

    const postStore = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'START_LOADING'})
        postService.getAll().then(value => value.data).then(value => dispatch({type: 'SET_POSTS', payload: value}))
    }, [])

    return (
        <div>
            {postStore.isLoading && <h2>Loading...</h2>}

            {
                postStore.posts.map(post=> <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};