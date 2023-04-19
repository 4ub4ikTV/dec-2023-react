import React, {useEffect, useState} from 'react';
import axios from "axios";

import {comments} from "../../urls/urls";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const [comment, setComment] = useState([]);

    useEffect(() => {
        axios(comments).then(value => value.data).then(value => setComment(value))
    }, [])

    return (
        <div>
            {comment.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};