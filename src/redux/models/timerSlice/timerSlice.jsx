import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timer: new Date(),
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    set_timer: (state, action) => {
      state.timer = action.payload;
    },
  },
});

export const { set_timer } = timerSlice.actions;

export default timerSlice.reducer;
