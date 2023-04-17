import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/servicesCars/car.service";
import {logDOM} from "@testing-library/react";

const CarForm = ({setUpdateCars, carForUpdate}) => {

    const {register, handleSubmit, reset, formState: {isValid, errors}, setValue} = useForm({mode: "all"});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])

    const save = async (car) => {
        const {data} = await carService.createCar(car);
        setUpdateCars(prev => !prev);
        reset();
    }

    const update = async (car) => {
        const updatedCar = {...carForUpdate, ...car};
        const {data} = await carService.updateByIdCar(updatedCar.id, updatedCar);
        setUpdateCars(prev => !prev);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                required: {
                    value: true, message: 'required'
                }, pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'Бренд повинен складатися тільки з літер мін: 1, макс: 20'
                }
            })}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {
                required: {
                    value: true, message: 'required'
                }, valueAsNumber: true,
                max: {value: 1000000, message: 'Максимальна сума: 1 млн'},
                min: {value: 0, message: 'Мінімальна сума: 0'}
            })}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {
                required: {
                    value: true, message: 'required'
                }, valueAsNumber: true,
                max: {value: new Date().getFullYear(), message: 'Максимальний рік: теперішній'},
                min: {value: 1990, message: 'Мінімальний рік: 1990'}
            })}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>);
};

export {CarForm};