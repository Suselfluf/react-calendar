import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservations: [
    // "Sun Jun 11 2023 03:00:00 GMT+0300 (Moscow Standard Time)",
    // "Sun Jun 11 2023 00:00:00 GMT+0300 (Moscow Standard Time)",
    "2023 5 11 0:00:00",
    "2023 5 11 3:00:00",
    "2023 5 13 0:00:00",
    "2023 6 13 1:00:00",
  ],
  prev_reservations_state: [],
};

export const reservationSlicer = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    set_prev_reservations: (state, action) => {
      state.prev_reservations_state.push(action.payload);
    },
  },
});

export const { set_prev_reservations } = reservationSlicer.actions;

export default reservationSlicer.reducer;
