import React from 'react';

const Car = ({car}) => {

    const {id, brand, price, year} = car;

    return (
        <div>
            <h3>Id : {id}</h3>
            <h3>Brand : {brand}</h3>
            <h3>Price : {price}</h3>
            <h3>Year : {year}</h3>
        </div>
    );
};

export {Car};