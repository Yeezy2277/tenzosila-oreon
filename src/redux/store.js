import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authSlice";
import journalReducer from "./slices/journalSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        journal: journalReducer
    },
})
