import React, { useEffect, useState } from "react";
import { TimePickerCell } from "../styles/calendar.styled";
import { useSelector } from "react-redux";

export default function TimePickerCellP(props) {
  const reservations = useSelector(
    (state) => state.reservationSlice.reservations
  );

  // const [id, set_id] = useState("");
  const id = `${new Date(
    props.date.getFullYear(),
    props.date.getMonth(),
    props.day,
    props.index
  ).getFullYear()} ${new Date(
    props.date.getFullYear(),
    props.date.getMonth(),
    props.day,
    props.index
  ).getMonth()} ${new Date(
    props.date.getFullYear(),
    props.date.getMonth(),
    props.day,
    props.index
  ).getDate()} ${new Date(
    props.date.getFullYear(),
    props.date.getMonth(),
    props.day,
    props.index
  ).getHours()}:00:00`;

  return (
    <>
      <TimePickerCell key={props.index} id={id} onClick={() => alert(id)}>
        {}
      </TimePickerCell>
    </>
  );
}
