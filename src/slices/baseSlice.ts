import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface InitialState {
    value:number
}

const initialState:InitialState = {
    value:0
}

export const baseSlice = createSlice({
    name: "BASE",
    initialState,
    reducers: {
        baseReducer : (state) => {
            state.value += 1;
        },
        baseReducerWithAction: (state, action:PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
})


export const { baseReducer, baseReducerWithAction } = baseSlice.actions;
export const baseStateSelector = (state:RootState) => state.base.value;
export default baseSlice.reducer;