import React from 'react';
import {Link} from "react-router-dom";


const Comment = ({comment}) => {
    const {id, name, email, body} = comment;


    return (
        <div>

            <h3>ID - {id}</h3>
            <h3>Name - {name}</h3>
            <h3>Email - {email}</h3>
            <h3>Body - {body}</h3>
            <Link to={'/posts'}>
                <button>Details-Post</button>
            </Link>

        </div>
    );
};

export {Comment};