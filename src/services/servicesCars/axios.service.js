import axios from "axios";
import {baseURL} from "../../configs/configsCar";



const axiosInstance = axios.create({baseURL});

export {
    axiosInstance
}