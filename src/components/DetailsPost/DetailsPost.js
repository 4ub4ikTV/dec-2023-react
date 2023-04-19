import React from 'react';




const DetailsPost = ({post}) => {

    const {id, title, body} = post;


    return (
        <div>
            <h3>ID - {id}</h3>
            <h3>Title - {title}</h3>
            <h3>Body - {body}</h3>
        </div>
    );
};

export {DetailsPost};