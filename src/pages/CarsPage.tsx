import React, {FC, useEffect, useState} from 'react';

import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";
import {CarForm} from "../components/CarForm/CarForm";
import {Cars} from "../components/Cars/Cars";

interface IProps {

}

const CarsPage: FC<IProps> = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    const [updateCars, setUpdateCars] = useState<boolean>(false);

    const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null)

    useEffect(() => {
        carService.getAllCars().then(value => value.data).then(value => setCars(value))
    }, [updateCars])

    return (
        <div>
            <CarForm setUpdateCars={setUpdateCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setUpdateCars={setUpdateCars}/>
        </div>
    );
};

export {CarsPage};