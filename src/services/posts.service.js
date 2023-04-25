import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

class PostsService {
    getAll(){
        return axiosService.get(urls.posts)
    }
}

export const postsService = new PostsService()