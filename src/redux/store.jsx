import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./models/calendar/calendarSlice";
export default configureStore({
  reducer: {
    calendarSlice: calendarSlice,
  },
});
