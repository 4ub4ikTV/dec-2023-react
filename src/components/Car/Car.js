import React from 'react';
import {carService} from "../../services/car.service";


const Car = ({car, setUpdateCars, setCarForUpdate}) => {

    const deleteCar = async (carId) => {
        await carService.deleteCar(carId);
        setUpdateCars((prev) => !prev);
    }

    const {id, brand, price, year} = car;

    return (
        <div>
            <h3>Id - {id}</h3>
            <h3>Brand - {brand}</h3>
            <h3>Price - {price}</h3>
            <h3>Year- {year}</h3>
            <button onClick={() => deleteCar(car.id)}>Delete</button>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
        </div>
    );
};

export {Car};