import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const userService = {
    getAllUsers: () => axiosService.get(urls.users),
    getAllComments: () => axiosService.get(urls.comments),
    createUser: (user) => axiosService.post(urls.users, user),
    createComment: (comment) => axiosService.post(urls.comments, comment)
}

export {
    userService
}