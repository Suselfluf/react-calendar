import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "./models/reservations/reservationSlice";
import calendarSlice from "./models/calendar/calendarSlice";
import timerSlice from "./models/timerSlice/timerSlice";
export default configureStore({
  reducer: {
    calendarSlice: calendarSlice,
    reservationSlice: reservationSlice,
    timerSlice: timerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
