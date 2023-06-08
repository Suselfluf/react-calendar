import React, { useEffect } from "react";
import { useState } from "react";
import * as styled from "../styles/calendar.styled";
import { weekDayNames } from "../consts/Consts";
import { StyleActiveDay } from "../consts/Consts";
import { removeStyle } from "../consts/Consts";
import { useRef } from "react";
import { useSelector } from "react-redux";

export default function SliderDay(props) {
  const elem = useRef(null);

  const chosen_days = useSelector((state) => state.calendarSlice.date);

  useEffect(() => {
    return () => {
      try {
        let el = document.getElementById(chosen_days);
        let x_padding = (el.getBoundingClientRect().left - 500).toFixed(0);
        if (x_padding > 130) {
          props.handleHorizontalScroll(x_padding);
        }

        StyleActiveDay(el.style);
      } catch (err) {
        // console.log(err);
      }
    };
  }, []);

  const [_choseDay, set_choseDay] = useState(elem.current);

  return (
    <>
      <div onClick={() => console.log()}>
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
