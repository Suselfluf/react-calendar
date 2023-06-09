import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservations: ["Sun Jun 11 2023 03:00:00 GMT+0300 (Moscow Standard Time)"],
};

export const reservationSlicer = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    // set_day: (state, action) => {
    //   state.date.push(action.payload);
    // },
  },
});

// export const { set_day } = reservationSlicer.actions;

export default reservationSlicer.reducer;
