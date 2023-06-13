import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Can be changed to thunk api get request
  reservations: [
    "2023 5 11 0:00:00",
    "2023 5 11 3:00:00",
    "2023 5 13 0:00:00",
    "2023 6 13 1:00:00",
  ], // YYYY MM DD HH:MM:SS
};

export const reservationSlicer = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    set_prev_reservations: (state, action) => {
      state.prev_reservations_state.push(action.payload);
    },
    add_reservation: (state, action) => {
      state.reservations.push(action.payload);
    },
    remove_reservation: (state, action) => {
      // state.reservations.splice(action.payload);
      const removal = action.payload;
      state.reservations = state.reservations.filter(
        (item) => item !== removal
      );
    },
  },
});

export const { set_prev_reservations, add_reservation, remove_reservation } =
  reservationSlicer.actions;

export const has_duplicates = (state, date) => {
  let duplicate = state.filter((item) => item === date);

  if (duplicate.length === 0) {
    return true;
  } else {
    return false;
  }
};

export default reservationSlicer.reducer;
