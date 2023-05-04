import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../../services";
import {carActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {

    const dispatch = useDispatch();

    const {cars} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAllCars().then(value => value.data).then(value => dispatch(carActions.setCars(value)))
    }, [])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};