import {AppDispatch} from "../store";
import axios from "axios";
import {UserModel} from "../../store/models/UserModel";
import {usersSlice} from "./UsersSlice";


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersSlice.actions.usersFetching())
        const response = await axios.get<UserModel[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(usersSlice.actions.usersFetchingSuccess(response.data))
    } catch (e:any) {
        dispatch(usersSlice.actions.usersFetchingError(e.message))
    }
}