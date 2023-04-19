import {IRes} from "../types/res.type";
import {IComment} from "../interfaces/comment.interface";
import {urls} from "../components/constans/urls";
import {placeAxiosService} from "./axios.service";

const commentService = {
    getAllComments: (): IRes<IComment[]> => placeAxiosService.get(urls.placeAPI.comments),
    createComments: (comment:IComment): IRes<IComment> => placeAxiosService.post(urls.placeAPI.comments, comment)
}

export {
    commentService
}