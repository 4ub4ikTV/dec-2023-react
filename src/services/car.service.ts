import {carsAxiosService} from "./axios.service";

import {ICar} from "../interfaces/car.interface";
import {urls} from "../components/constans/urls";
import {IRes} from "../types/res.type";


const carService = {
    getAllCars: (): IRes<ICar[]> => carsAxiosService.get(urls.carAPI.cars),
    createCar: (car: ICar): IRes<ICar> => carsAxiosService.post(urls.carAPI.cars, car),
    updateByIdCar: (id: number, car: ICar): IRes<ICar> => carsAxiosService.put(`${urls.carAPI.cars}/${id}`, car),
    deleteCar: (id: number): IRes<void> => carsAxiosService.delete(`${urls.carAPI.cars}/${id}`)
}

export {
    carService
}