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
  const [scaling_size, set_scaling_size] = useState(1);

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
        animate={{ scale: scaling_size }}
        whileHover={hovering_animation}
        id={id}
        whileTap={{ scale: 1 }}
        onClick={(elem) => {
          props.handleDayTimeChoose(elem, id);
        }}
      />
    </>
  );
}
