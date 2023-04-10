import React from 'react';
import "../../Style/RickAndMortyFamilyAll.css"

const RickAndMorty = ({item}) => {
    console.log(item)
    return (
        <div className="rickAndMortyInfo">
            <h2> My ID - {item.id}</h2>
            <h3> Name is - {item.name}</h3>
            <h4> Status - {item.status}</h4>
            <h4> Species - {item.species}</h4>
            <h4> Gender - {item.gender}</h4>
            <img src={item.image}></img>
        </div>
    );
};

export {RickAndMorty};