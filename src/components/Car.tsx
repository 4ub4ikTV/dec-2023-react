import React, {FC} from 'react';
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carActions} from "../redux";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {

    const {id, brand, price, year} = car;

    const dispatch = useAppDispatch();

    return (
        <div>
            <h3>Id : {id}</h3>
            <h3>Brand : {brand}</h3>
            <h3>Price : {price}</h3>
            <h3>Year : {year}</h3>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carActions.deleteCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};