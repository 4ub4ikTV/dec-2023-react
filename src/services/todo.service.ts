import {IRes} from "../types/axiosRes";
import {ITodo} from "../interfaces/todo.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const todoService = {
    getAll: (): IRes<ITodo[]> => axiosService.get(urls.todos)
}

export {
    todoService
}