import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter:1,
}

export const counterSlice = createSlice({
    name:'counterSlice',
    initialState,
    reducers:{
        setCounter:(state,action) =>{
            state.counter =action.payload.counter;
        }
    }
})

export const {setCounter} = counterSlice.actions;
export const selectCounter = (state) => state.counter;
export default counterSlice.reducer;