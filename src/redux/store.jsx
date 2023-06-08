import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "./models/reservations/reservationSlice";
import calendarSlice from "./models/calendar/calendarSlice";
export default configureStore({
  reducer: {
    calendarSlice: calendarSlice,
    reservationSlice: reservationSlice,
  },
});
