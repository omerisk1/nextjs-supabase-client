import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "asd",
};

export const counterSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
