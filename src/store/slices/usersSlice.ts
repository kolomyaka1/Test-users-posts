import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from 'axios';
import { Response, User } from "../types/types";

type UserState = {
    users: Array<User>,
    isLoading: boolean,
    response: Response
    currentUserId: number
    currentCompany: string
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    currentUserId: 1,
    currentCompany: '',
    response: {
        status: 0,
        message: '',
    },
}

type currentUser = {
    id: number
    company: string


}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsers(state) {
            state.isLoading = true;
        },
        fetchUsersSuccess(state, action: PayloadAction<AxiosResponse<User[]>>) {
            state.isLoading = false;
            state.users = action.payload.data
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchUsersError(state, action: PayloadAction<AxiosResponse<User[]>>) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        setCurrentUser(state, action: PayloadAction<number>) {
            state.currentUserId = action.payload
        }
    }
})

export const { setCurrentUser } = usersSlice.actions;

export default usersSlice.reducer;