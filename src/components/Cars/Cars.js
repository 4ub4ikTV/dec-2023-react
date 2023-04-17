import React, {useEffect, useState} from 'react';
import {carService} from "../../services/servicesCars/car.service";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {

    const [cars, setCars] = useState([]);

    const [updateCars, setUpdateCars] = useState(null);

    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAllCars().then(value => value.data).then(value => setCars(value))
    },[updateCars])

    return (
        <div>
            <CarForm setUpdateCars={setUpdateCars} carForUpdate={carForUpdate}/>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car} setUpdateCars={setUpdateCars} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};