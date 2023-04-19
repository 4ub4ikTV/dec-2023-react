import axios from "axios";
import {carsBaseURL, placeBaseURL} from "../constans/urls";


const placeAxiosService = axios.create({baseURL: placeBaseURL});
const carsAxiosService = axios.create({baseURL: carsBaseURL});

export {
    placeAxiosService,
    carsAxiosService
}
