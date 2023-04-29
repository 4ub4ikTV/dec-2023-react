import React from 'react';

const Post = ({post}) => {
    
    const {id, title, body} = post;
    
    return (
        <div>
            <h3>Id - {id}</h3>
            <h3>Title - {title}</h3>
            <h3>Body - {body}</h3>
        </div>
    );
};

export {Post};