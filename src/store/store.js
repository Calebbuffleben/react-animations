import { configureStore } from "@reduxjs/toolkit";
import logMiddleware from "../middleware/log";
import userLoginReducer from "../reducers/LoginSlice";

const store = configureStore({
    reducer: {
        userLogin: userLoginReducer
    },
    middleware: [logMiddleware]
});

export default store;