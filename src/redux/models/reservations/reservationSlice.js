import { createSlice } from "@reduxjs/toolkit";

const date = new Date();

const initialState = {
  // Can be changed to thunk api get request
  reservations: [
    `${date.getFullYear()} ${date.getMonth()} ${date.getDate()} 2:00:00`,
    `${date.getFullYear()} ${date.getMonth()} ${date.getDate() + 1} 5:00:00`,
    `${date.getFullYear()} ${date.getMonth()} ${date.getDate() - 1} 4:00:00`,
    `${date.getFullYear()} ${date.getMonth()} ${date.getDate() - 1} 6:00:00`,
    `${date.getFullYear()} ${date.getMonth()} ${date.getDate() - 1} 9:00:00`,
    `${date.getFullYear()} ${date.getMonth()} ${date.getDate()} 8:00:00`,
    `${date.getFullYear()} ${date.getMonth()} ${date.getDate()} 10:00:00`,
  ], // YYYY MM DD HH:MM:SS
  remooving_reservations: [],
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
    add_to_remooval: (state, action) => {
      state.remooving_reservations.push(action.payload);
    },
  },
});

export const {
  set_prev_reservations,
  add_reservation,
  remove_reservation,
  add_to_remooval,
} = reservationSlicer.actions;

export const has_duplicates = (state, date) => {
  let duplicate = state.filter((item) => item === date);

  if (duplicate.length === 0) {
    return true;
  } else {
    return false;
  }
};

export default reservationSlicer.reducer;
