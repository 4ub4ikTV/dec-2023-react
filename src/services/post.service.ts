import {IRes} from "../types/axiosRes";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {IPost} from "../interfaces/post.interface";

const postService = {
    getById: (id: number): IRes<IPost> => axiosService.get(urls.posts.getById(id))
}

export {
    postService
}