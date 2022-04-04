import { PostsService } from "../../services/Services";
import { postsSlice } from "../slices/postsSlice";
import { AppDispatch } from "../store";


export const fetchPosts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(postsSlice.actions.fetchPosts())
        const res = await PostsService.getPosts()

        if (res.status === 200) {
            dispatch(postsSlice.actions.fetchPostsSuccess(res))
        } else {
            dispatch(postsSlice.actions.fetchPostsError(res))
        }
    } catch (error) {
        console.log(error);

    }
}