import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const commentService = {
    getAllComments: () => axiosService.get(urls.comments),
    createComment: (comment) => axiosService.post(urls.comments, comment)
}

export {
    commentService
}