import axios from "axios";
import {baseURL} from "../../configsCar/urls";


const axiosInstance = axios.create({baseURL});

export {
    axiosInstance
}