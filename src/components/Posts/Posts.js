import React, {useEffect, useState} from 'react';
import axios from "axios";

import {posts} from "../../urls/urls";
import {DetailsPost} from "../DetailsPost/DetailsPost";


const Posts = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        axios(posts).then(value => value.data).then(value => setPost(value))
    }, [])


    return (
        <div>
            {post.map(post=><DetailsPost key={post.id} post={post}/>)}
            <div>
                <h4>Post details view</h4>
            </div>
        </div>
    );
};

export {Posts};