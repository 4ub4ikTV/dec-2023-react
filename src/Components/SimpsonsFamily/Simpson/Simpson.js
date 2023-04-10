import React from 'react';

const Simpson = ({item}) => {
    return (
            <div className="simpsonInfo">
                <h2> My name is - {item.name}</h2>
                <h3> Surname is - {item.surname}</h3>
                <img src={item.photo}></img>
                <h4> Age - {item.age}</h4>
                <h4> Info - {item.info}</h4>
            </div>
    );
};

export {Simpson};