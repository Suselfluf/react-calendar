import React, { useEffect, useState, useRef } from "react";
import { TimePickerCell } from "../styles/calendar.styled";

export default function TimePickerCellP(props) {
  const cell = useRef(null);

  // useEffect(() => {
  //   return () => {
  //     console.log(cell.current.style);
  //     cell.current.style.backgroundColor =
  //   };
  // }, []);

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
      <TimePickerCell
        key={props.index}
        ref={cell}
        id={id}
        onClick={(elem) => props.handleDayTimeChoose(elem, id)}
      />
    </>
  );
}
