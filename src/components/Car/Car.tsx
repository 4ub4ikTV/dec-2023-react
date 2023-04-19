import React, {FC} from 'react';

import {ICar} from "../../interfaces/car.interface";
import {IUseState} from "../../types/useState.type";
import {carService} from "../../services/car.service";
import '../../style/Car.css'

interface IProps {
    car: ICar,
    setUpdateCars: IUseState<boolean>,
    setCarForUpdate: IUseState<ICar | null>
}

const Car: FC<IProps> = ({car, setUpdateCars, setCarForUpdate}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async (id: number) => {
        await carService.deleteCar(id)
        setUpdateCars(prev => !prev)
    }

    return (
        <div className={'car'}>
            <div>
                <h3>ID - {id}</h3>
                <h3>Brand - {brand}</h3>
                <h3>Price - {price}</h3>
                <h3>Year - {year}</h3>
            </div>
            <div className={'btn-car'}>
                <button onClick={() => setCarForUpdate(car)}>Update</button>
                <button onClick={() => deleteCar(id)}>Delete</button>
            </div>
        </div>
    );
};

export {Car};