import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../../services";
import {carActions} from "../../redux";

const CarForm = () => {

    const dispatch = useDispatch();

    const {carForUpdate} = useSelector(state => state.cars);

    const {register, handleSubmit, reset, formState: {isValid, errors}, setValue} = useForm({
        mode: "all", resolver: joiResolver(carValidator)
    });


    useEffect(()=>{
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])

    const save = async (car) => {
        const {data} = await carService.createCar(car);
        dispatch(carActions.changeTrigger())
        reset();
    }

    const update = async (car) => {
        const {data} = await carService.updateByIdCar(carForUpdate.id, car);
        dispatch(carActions.changeTrigger())
        reset();
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>

            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>

        </form>
    );
};

export {CarForm};