import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
export const counterSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value.push(action.payload);
    },
    deleteJob: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, deleteJob } =
  counterSlice.actions;

export default counterSlice.reducer;
