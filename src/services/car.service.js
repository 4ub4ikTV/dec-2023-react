import {axiosInstance} from "./servicesCars";
import {urls} from "../configs/configsCar";


const carService = {
    getAllCars: () => axiosInstance.get(urls.cars),
    createCar: (car) => axiosInstance.post(urls.cars, car),
    updateByIdCar: (id, car) => axiosInstance.put(`${urls.cars}/${id}`, car),
    deleteCar: (id) => axiosInstance.delete(`${urls.cars}/${id}`)
}

export {
    carService
}