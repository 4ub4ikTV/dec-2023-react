import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../../services";
import {carActions} from "../../redux";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {

    const dispatch = useDispatch();

    const {cars, trigger} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAllCars().then(value => value.data).then(value => dispatch(carActions.setCars(value)))
    }, [trigger])

    return (
        <div>
            <CarForm/>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};