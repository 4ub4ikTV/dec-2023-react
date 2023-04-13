import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post";

const Posts = ({lift}) => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts)
            })
    }, [])

    return (
        <div>
            {
                posts.map(value =>
                    <Post
                        key={value.id}
                        value={value}
                        lift={lift}
                    />)
            }
        </div>
    );
};

export {Posts};