import React from 'react';
import {rickAndMortyArr} from "../../Arrays/RickAndMorty";
import {RickAndMorty} from "../RickAndMorty/RickAndMorty";
import "../../Style/RickAndMortyFamilyAll.css"

const RickAndMortyAll = () => {
    return (
        <div className="rickAndMorty">
            {rickAndMortyArr.map(value =>
                (<RickAndMorty item={value}/>)
            )}
        </div>
    );
};

export {RickAndMortyAll};