import React from 'react';

const Album = ({album}) => {

    const {id, title} = album;

    return (
        <div>
            <h3>ID - {id}</h3>
            <h3>Title - {title}</h3>
        </div>
    );
};

export {Album};