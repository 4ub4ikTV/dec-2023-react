import {urls} from "../configsCar/urls";
import {axiosInstance} from "./servicesCars/axios.service";


const carService = {
    getAllCars: () => axiosInstance.get(urls.cars),
    createCar: (car) => axiosInstance.post(urls.cars, car),
    updateByIdCar: (id, car) => axiosInstance.put(`${urls.cars}/${id}`, car),
    deleteCar: (id) => axiosInstance.delete(`${urls.cars}/${id}`)
}

export {
    carService
}