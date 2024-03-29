import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filter(state, action) {
          return  state = action.payload;
    }}
})

export const filterReducer = filterSlice.reducer;
export const { filter } = filterSlice.actions;