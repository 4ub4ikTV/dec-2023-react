import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces/car.interface";
import {IUseState} from "../../types/useState.type";
import {carService} from "../../services/car.service";

interface IProps {
    setUpdateCars: IUseState<boolean>,
    carForUpdate: ICar | null,
    setCarForUpdate: IUseState<ICar | null>
}

const CarForm: FC<IProps> = ({setUpdateCars, setCarForUpdate, carForUpdate}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm<ICar>({mode: 'all'});

    useEffect(() => {
        if (carForUpdate) {
            Object.entries(carForUpdate).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key as keyof ICar, value, {shouldValidate: true})
                }
            })
        }
    }, [carForUpdate, setValue])

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.createCar(car)
        setUpdateCars(prev => !prev)
        reset()
    }

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateByIdCar(carForUpdate!.id, car)
        setUpdateCars(prev => !prev)
        reset()
        setCarForUpdate(null)

    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
            </form>
            <div>
                {errors.brand && <span>{errors.brand.message}</span>}
                {errors.price && <span>{errors.price.message}</span>}
                {errors.year && <span>{errors.year.message}</span>}
            </div>
        </div>
    );
};

export {CarForm};