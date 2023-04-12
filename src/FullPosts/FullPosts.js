import React from 'react';

const FullPosts = ({value}) => {
    return (
        <div>
            <h3>
                ID- {value.id}
                <br/>
                Title - {value.title}
                <br/>
                Body - {value.body}
            </h3>
        </div>
    );
};

export {FullPosts};