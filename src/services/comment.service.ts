import {IRes} from "../types/res.type";
import {IComment} from "../interfaces/comment.interface";
import {placeAxiosService} from "./axios.service";
import {urls} from "../constans/urls";

const commentService = {
    getAllComments: (): IRes<IComment[]> => placeAxiosService.get(urls.placeAPI.comments),
    createComments: (comment: IComment): IRes<IComment> => placeAxiosService.post(urls.placeAPI.comments, comment)
}

export {
    commentService
}