import { UserModel, filterModel } from "../models/UserModel";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { fetchUsers } from "./getUsersAction";

interface UserState {
  users: UserModel[];
  filteredUsers: UserModel[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  isLoading: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<UserModel[]>) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    filterByName(state, action: PayloadAction<filterModel>) {
      if (action.payload.name !== "") {
        const filteredUsers = current(state.users).filter((user) =>
          user.name.toLowerCase().includes(action.payload.name.toLowerCase())
        );
        state.filteredUsers = filteredUsers;
      } else {
        state.filteredUsers = current(state.users);
      }
    },
    filterByUsername(state, action: PayloadAction<filterModel>) {
      if (action.payload.username !== "") {
        const filteredUsers = current(state.users).filter((user) =>
          user.username
            .toLowerCase()
            .includes(action.payload.username.toLowerCase())
        );
        state.filteredUsers = filteredUsers;
      } else {
        state.filteredUsers = current(state.users);
      }
    },
    filterByEmail(state, action: PayloadAction<filterModel>) {
      if (action.payload.email !== "") {
        const filteredUsers = current(state.users).filter((user) =>
          user.email.toLowerCase().includes(action.payload.email.toLowerCase())
        );
        state.filteredUsers = filteredUsers;
      } else {
        state.filteredUsers = current(state.users);
      }
    },
    filterByPhone(state, action: PayloadAction<filterModel>) {
      function removeSymbols(input:string) {
        return input.replace(/[()\-\sx]/g, "");
      }
      if (action.payload.phone !== "") {

        const filteredUsers = current(state.users).filter((user) =>
          removeSymbols(user.phone).toLowerCase().includes(action.payload.phone.toLowerCase())
        );
        state.filteredUsers = filteredUsers;
      } else {
        state.filteredUsers = current(state.users);
      }
    },
  },
});

export default usersSlice.reducer;
