import React from 'react';

const Comment = ({comment}) => {

    const {id, name, email, body} = comment

    return (
        <div>
            <h3>id : {id}</h3>
            <h3>name : {name}</h3>
            <h3>email : {email}</h3>
            <h3>body : {body}</h3>
        </div>
    );
};

export {Comment};