import React from 'react';
import {simpsonsArr} from "../../Arrays/Simpsons";
import {Simpson} from "../Simpson/Simpson";
import "../../Style/Simpsons.css"


function Simpsons() {
    return (
        <div className="simpsons">
            {
                simpsonsArr.map(value =>
                    (<Simpson item={value}/>))
            }
        </div>);
}

export {Simpsons};