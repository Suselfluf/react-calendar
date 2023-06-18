import React, { useEffect, useState, useRef } from "react";
import { TimePickerCell } from "../styles/calendar.styled";

export default function TimePickerCellP(props) {
  useEffect(() => {
    return () => {
      if (cell.current != null) {
        cell.current.style.backgroundColor &&
          set_hovering_animation({ scale: 1.1 });
      }
    };
  }, []);

  const [hovering_animation, set_hovering_animation] = useState({ scale: 1 });
  const [variant, set_variant] = useState({});

  const cell = useRef(null);

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
        whileHover={hovering_animation}
        id={id}
        onClick={(elem) => props.handleDayTimeChoose(elem, id)}
      />
    </>
  );
}
