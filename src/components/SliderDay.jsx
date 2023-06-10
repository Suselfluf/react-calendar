import React, { useEffect } from "react";
import { useState } from "react";
import * as styled from "../styles/calendar.styled";
import { weekDayNames } from "../consts/Consts";
import { StyleActiveDay } from "../consts/Consts";
import { removeStyle } from "../consts/Consts";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_day } from "../redux/models/calendar/calendarSlice";

export default function SliderDay(props) {
  const elem = useRef(null);
  const container = useRef(null);

  const chosen_days = useSelector((state) => state.calendarSlice.date);
  const dispatch = useDispatch();

  useEffect(() => {
    let width_elem = container.current.offsetWidth;
    return () => {
      try {
        let el = document.getElementById(chosen_days[0]);
        if (el != null) {
          let make_padding = width_elem * (chosen_days[0].getDate() - 4);
          props.handleHorizontalScroll(make_padding);
          StyleActiveDay(el.style); // Remove styling of chosen day on next or previous month
        } else {
          // console.log(elem.current);
        }
      } catch (err) {
        console.log(err);
      }
    };
  }, []);

  // const handleDayChoose = (date) => {    // Remooving style
  //   dispatch(set_day(date.target.id));
  //   let prev_date = document.getElementById(
  //     // Get the previous date
  //     chosen_days[chosen_days.length - 1]
  //   );
  //   // console.log(date.target.id);
  //   // console.log(chosen_days[chosen_days.length - 1]);
  //   if (prev_date != null) {
  //     removeStyle(prev_date.style);
  //     styleChosenDay(date.target.style);
  //   }
  // };

  const [_choseDay, set_choseDay] = useState(elem.current);

  return (
    <>
      <div ref={container}>
        <styled.SliderDaysNamesP>
          {
            weekDayNames[
              new Date(
                props.date.getFullYear(),
                props.date.getMonth(),
                props.day - 1 // To make day title correct
              ).getDay()
            ]
          }
        </styled.SliderDaysNamesP>
        <styled.SliderDatesP
          ref={elem}
          key={props.day}
          id={`${new Date(
            props.date.getFullYear(),
            props.date.getMonth(),
            props.day
          )}`}
          // ref={date_ref}
        >
          {props.day}
        </styled.SliderDatesP>
      </div>
    </>
  );
}
