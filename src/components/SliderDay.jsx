import React from "react";
import { useState } from "react";
import * as styled from "../styles/calendar.styled";
import { weekDayNames } from "../consts/Consts";
import { StyleActiveDay } from "../consts/Consts";
import { removeStyle } from "../consts/Consts";
import { useRef } from "react";

export default function SliderDay(props) {
  const elem = useRef(null);
  const [_choseDay, set_choseDay] = useState(elem.current);

  //   const styleActiveDay = (prevEl, currentEl) => {
  //     set_choseDay(currentEl);
  //     StyleActiveDay(currentEl.target.style);
  //   };

  return (
    <>
      <div>
        <styled.SliderDaysNamesP>
          {
            weekDayNames[
              new Date(
                props.date.getFullYear(),
                props.date.getMonth(),
                props.day
              ).getDay()
            ]
          }
        </styled.SliderDaysNamesP>
        <styled.SliderDatesP
          ref={elem}
          onClick={(value) => {
            props.handleDayChoose(value);
            console.log(
              new Date(
                props.date.getFullYear(),
                props.date.getMonth(),
                props.day
              )
            );
            // styleActiveDay(_choseDay, value);
          }}
          key={props.day}
        >
          {props.day + 1}
        </styled.SliderDatesP>
        {/* <p
                          className={`sliderDates${toggleDayActive}`}
                          onClick={(value) => {
                            handleDayChoose(value);
                          }}
                        >
                          {day + 1} 
                        </p> */}
      </div>
    </>
  );
}
