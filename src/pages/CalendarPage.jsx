import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { weekDayNames, monthRange, daysRange } from "../consts/Consts.jsx";
import {
  Wrapper,
  CalendarWindow,
  Header,
  DaysOptionsSliderWrapper,
  WeekDaysTitlesLine,
  WeekDaysSlider,
  YearMonthChoiceLine,
  MonthYearChoice,
  CalendarBody,
  CalendarFooter,
  DaysOptionsSliderContentWindow,
  MonthSliderIcon,
  AddIcon,
  WeekDaysTitlesTable,
  DateSlider,
} from "../styles/calendar.styled.js";

export default function CalendarPage(props) {
  // const tDay = new Date().getDay();
  // const tMonth = new Date().getMonth();
  // const tYear = new Date().getFullYear();

  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date());
  const [daysRange, setDaysrange] = useState([]);

  useEffect(() => {
    return () => {
      getDaysInAmonth(date);
    };
  }, [date]);

  // setNextWeek = (current) => {};

  const getDay = (s) => {
    console.log(date);
  };

  const getDaysInAmonth = (currentDate) => {
    let i = [];
    const limit = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    for (let index = 0; index <= limit; index++) {
      i.push(index);
    }
    setDaysrange(i);
    // return new Date(year, month, 0).getDate();
  };

  const handleMonthChange = (prevDate, sign) => {
    month == 0
      ? setDate(
          new Date(
            prevDate.getFullYear() + sign,
            prevDate.getMonth() + sign,
            prevDate.getDate()
          )
        )
      : setDate(
          new Date(
            prevDate.getFullYear(),
            prevDate.getMonth() + sign,
            prevDate.getDate()
          )
        );
  };

  return (
    <>
      <Wrapper>
        <CalendarWindow>
          <Header>
            <p style={{ marginRight: "20px" }}>Interview Calendar</p>
            <AddIcon src="add-sign.png"></AddIcon>
            {/* <img  width={35} alt="" /> */}
          </Header>
          <DaysOptionsSliderWrapper>
            <DaysOptionsSliderContentWindow>
              <WeekDaysTitlesLine>
                <WeekDaysTitlesTable>
                  <DateSlider>
                    {daysRange.map((day) => (
                      <div>
                        <p>
                          {
                            weekDayNames[
                              new Date(
                                date.getFullYear(),
                                date.getMonth(),
                                day
                              ).getDay()
                            ]
                          }
                        </p>
                        <p
                          onClick={() => {
                            console.log(
                              new Date(date.getFullYear(), date.getMonth(), day)
                            );
                          }}
                          key={day}
                        >
                          {day}
                        </p>
                      </div>
                    ))}
                  </DateSlider>
                </WeekDaysTitlesTable>
              </WeekDaysTitlesLine>
              <WeekDaysSlider></WeekDaysSlider>
              <YearMonthChoiceLine>
                <MonthSliderIcon
                  src="less-icon.png"
                  onClick={(e) => handleMonthChange(date, -1)}
                  style={{ justifySelf: "start" }}
                ></MonthSliderIcon>
                <MonthYearChoice>
                  {monthRange[date.getMonth()]} {date.getFullYear()}
                </MonthYearChoice>
                <MonthSliderIcon
                  src="more-icon.png"
                  onClick={(e) => handleMonthChange(date, +1)}
                  style={{ justifySelf: "end" }}
                ></MonthSliderIcon>
              </YearMonthChoiceLine>
            </DaysOptionsSliderContentWindow>
          </DaysOptionsSliderWrapper>
          <CalendarBody>bo</CalendarBody>
          <CalendarFooter>Today</CalendarFooter>
        </CalendarWindow>
      </Wrapper>
    </>
  );
}
