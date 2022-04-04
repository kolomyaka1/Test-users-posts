import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from 'axios';
import { Response, User } from "../types/types";

type UserState = {
    users: User,
    isLoading: boolean,
    response: Response
}

const initialState: UserState = {
    users: {
        id: 0,
        name: '',
        company: {
            name: ''
        },
    },
    isLoading: false,
    response: {
        status: 0,
        message: '',
    },
}


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsers(state) {
            state.isLoading = true;
        },
        fetchUsersSuccess(state, action: PayloadAction<AxiosResponse<User>>) {
            state.isLoading = false;
            state.users = action.payload.data
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchUsersError(state, action: PayloadAction<AxiosResponse<User>>) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        }
    }
})

export default usersSlice.reducer;