import {configureStore} from "@reduxjs/toolkit";
import BaseSlice from "../slices/baseSlice";

const store = configureStore({
    reducer: {
        base: BaseSlice,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;