import React from 'react';
import {useDispatch} from "react-redux";
import {carService} from "../../services";
import {carActions} from "../../redux";

const Car = ({car}) => {

    const dispatch = useDispatch();

    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteCar(id)
        dispatch(carActions.changeTrigger())
    }

    return (
        <div>
            <h3>Id : {id}</h3>
            <h3>Brand : {brand}</h3>
            <h3>Price : {price}</h3>
            <h3>Year : {year}</h3>
            <button onClick={deleteCar}>Delete</button>
            <button onClick={()=> dispatch(carActions.setCarForUpdate(car))}>Update</button>
        </div>
    );
};

export {Car};