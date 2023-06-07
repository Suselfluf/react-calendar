import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: [
    `${new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    )}`,
  ],
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    set_day: (state, action) => {
      state.date.push(action.payload);
    },
  },
});

export const { set_day } = calendarSlice.actions;

export default calendarSlice.reducer;
