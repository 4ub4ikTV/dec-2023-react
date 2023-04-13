import React from 'react';

const Post = ({value, lift}) => {
    return (
        <div>
            <h3>
                ID - {value.id}
                <br/>
                Title - {value.title}
            </h3>
            <button onClick={()=> {
                lift(value)
            }}>Details</button>
        </div>
    );
};

export {Post};