import {urls} from "../configs";
import {axiosService} from "./axios.service";


const carService = {
    getAllCars: () => axiosService.get(urls.cars),
    createCar: (car) => axiosService.post(urls.cars, car),
    updateByIdCar: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteCar: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}