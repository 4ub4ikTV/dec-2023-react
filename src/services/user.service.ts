import {placeAxiosService} from "./axios.service";
import {IRes} from "../types/res.type";
import {IUser} from "../interfaces/user.interface";
import {urls} from "../constans/urls";

const userService = {
    getAllUsers: (): IRes<IUser[]> => placeAxiosService.get(urls.placeAPI.users),
    createUser: (user: IUser): IRes<IUser> => placeAxiosService.post(urls.placeAPI.users, user)
}

export {
    userService
}