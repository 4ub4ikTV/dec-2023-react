import axios from "axios";
import {carsAPI} from "../configs";


const axiosService = axios.create({baseURL: carsAPI});

export {
    axiosService
}