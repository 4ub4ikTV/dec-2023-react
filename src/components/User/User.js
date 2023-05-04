import React from 'react';

const User = ({user}) => {

    const {id, name, username, email} = user;

    return (
        <div>
            <h3>Id : {id}</h3>
            <h3>Name : {name}</h3>
            <h3>Username : {username}</h3>
            <h3>Email : {email}</h3>
        </div>
    );
};

export {User};