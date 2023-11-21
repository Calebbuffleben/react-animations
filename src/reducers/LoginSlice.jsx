import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loggedUser: null,
}

const UserLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        login: (state, action) => {
            state.loggedUser = action.payload
        },
        logout: (state) => {
            state.loggedUser = null
        }
    }
});

export const { login, logout } = UserLoginSlice.actions;

export default UserLoginSlice.reducer;