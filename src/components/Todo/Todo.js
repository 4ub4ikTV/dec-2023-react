import React from 'react';

const Todo = ({todo}) => {
    const {id, title} = todo;
    return (
        <div>
            <h3>ID - {id}</h3>
            <h3>Title - {title}</h3>
        </div>
    );
};

export {Todo};