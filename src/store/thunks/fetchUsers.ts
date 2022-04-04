import { UsersService } from "../../services/Services";
import { usersSlice } from "../slices/usersSlice"
import { AppDispatch } from "../store";


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersSlice.actions.fetchUsers());
        const res = await UsersService.getUsers()

        if (res.status === 200) {
            dispatch(usersSlice.actions.fetchUsersSuccess(res))
        } else {
            dispatch(usersSlice.actions.fetchUsersError(res));
        }
    } catch (error) {
        console.log(error);
    }
}