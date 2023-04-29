import React from 'react';

const User = ({user}) => {

    const {id, name, username} = user

    return (
        <div>
            <h3>Id - {id}</h3>
            <h3>Name - {name}</h3>
            <h3>Username - {username}</h3>
        </div>
    );
};

export {User};