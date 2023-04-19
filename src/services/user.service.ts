import {placeAxiosService} from "./axios.service";

import {urls} from "../components/constans/urls";
import {IRes} from "../types/res.type";
import {IUser} from "../interfaces/user.interface";

const userService = {
    getAllUsers: (): IRes<IUser[]> => placeAxiosService.get(urls.placeAPI.users),
    createUser: (user: IUser): IRes<IUser> => placeAxiosService.post(urls.placeAPI.users, user)
}

export {
    userService
}