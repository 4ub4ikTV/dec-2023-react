import {axiosInstance} from "./axios.service";
import {urls} from "../../configsCar/urls";

const carService = {
    getAllCars: ()=> axiosInstance.get(urls.cars),
    createCar: (car)=> axiosInstance.post(urls.cars, car),
    updateByIdCar: (id, car)=> axiosInstance.put(`${urls.cars}/${id}`, car),
    deleteCar: (id)=> axiosInstance.delete(`${urls.cars}/${id}`)
}

export {
    carService
}