import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";


const CarForm = ({setUpdateCars, carForUpdate}) => {

    const {register, handleSubmit, reset, formState: {isValid, errors}, setValue} = useForm({
        mode: "all", resolver: joiResolver(carValidator)
    });


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

    return (<form onSubmit={handleSubmit(carForUpdate ? update : save)}>

        <input type="text" placeholder={'brand'} {...register('brand')}/>
        {errors.brand && <span>{errors.brand.message}</span>}

        <input type="text" placeholder={'price'} {...register('price')}/>
        {errors.price && <span>{errors.price.message}</span>}

        <input type="text" placeholder={'year'} {...register('year')}/>
        {errors.year && <span>{errors.year.message}</span>}

        <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>

    </form>);
};

export {CarForm};