import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Post, Response } from "../types/types";

type postState = {
    posts: Array<Post>
    isLoading: boolean,
    response: Response
    currentCompany: string
}

const initialState: postState = {
    posts: [],
    isLoading: false,
    currentCompany: '',
    response: {
        status: 0,
        message: ''
    }
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts(state) {
            state.isLoading = true;
        },
        fetchPostsSuccess(state, action: PayloadAction<AxiosResponse<Post[]>>) {
            state.isLoading = false;
            state.posts = action.payload.data;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchPostsError(state, action: PayloadAction<AxiosResponse<Post[]>>) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },

    }
})

export default postsSlice.reducer;