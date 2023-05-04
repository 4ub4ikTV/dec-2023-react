import React from 'react';

const Comment = ({comment}) => {

    const {id, name, email, body} = comment;

    return (
        <div>
            <h3>Id : {id}</h3>
            <h3>Name : {name}</h3>
            <h3>Email : {email}</h3>
            <h3>Body : {body}</h3>
        </div>
    );
};

export {Comment};