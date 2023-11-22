import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "../reducers/LoginSlice";

const store = configureStore({
    reducer: {
        userLogin: userLoginReducer
    }
});

export default store;