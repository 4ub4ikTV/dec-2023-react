import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

class CommentsService {
    getAll(){
        return axiosService.get(urls.comments)
    }
}

export const commentsService = new CommentsService()