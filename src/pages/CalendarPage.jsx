import React, { useEffect, useState, useRef, useReducer } from "react";
import { monthRange, timeRange } from "../consts/Consts.jsx";
// import styles from "../styles/calendarPage.module.css";
import "../styles/calendarPage.module.css";
import {
  Wrapper,
  CalendarWindow,
  Header,
  DaysOptionsSliderWrapper,
  WeekDaysTitlesLine,
  YearMonthChoiceLine,
  MonthYearChoice,
  CalendarBody,
  CalendarFooter,
  DaysOptionsSliderContentWindow,
  MonthSliderIcon,
  AddIcon,
  WeekDaysTitlesTable,
  DateSlider,
  SliderDaysNamesP,
  TimePickerBody,
  TimePickerSideBar,
  TimePickerSideBarP,
  TimePickerCell,
  TimePickerBodyColumn,
  FooterParagraph,
  ActiveSliderDate,
  TimeLineHr,
} from "../styles/calendar.styled.js";
import SliderDay from "../components/SliderDay.jsx";
import { useDispatch, useSelector } from "react-redux";
import { set_timer } from "../redux/models/timerSlice/timerSlice.jsx";
import { removeStyle } from "../consts/Consts.jsx";

export default function CalendarPage(props) {
  const weekDaysTopSlider = useRef(null);
  const weekDaysBodySlider = useRef(null);
  const weekDaysBodyTimeSlider = useRef(null);

  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date());
  const [daysRange, setDaysrange] = useState([]);
  const [y_align, set_y_align] = useState(0);
  const [counter, set_counter] = useState(0);
  const [_is_time_active, set_is_time_active] = useState(false);
  const [_is_booked, set_is_booked] = useState(false);

  const initialDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );

  const chosen_days = useSelector((state) => state.calendarSlice.date);
  const reservations = useSelector(
    (state) => state.reservationSlice.reservations
  );
  const timer = useSelector((state) => state.timerSlice.timer);
  const dispatch = useDispatch();

  const hr = useRef(null);
  const calendar_body = useRef(null);

  useEffect(() => {
    getDaysInAmonth(date);
  }, [date]);

  useEffect(() => {
    const timerId = setInterval(updateTime, 1000);
    return () => {
      getDaysInAmonth(date);
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    set_counter(counter + 1);
    let time_gap = parseInt((timer.getTime() - initialDate.getTime()) / 1000);
    hr.current.style.top = `${y_align + time_gap * 0.02}px`; // Might need change since is approximate
  }, [timer]);

  useEffect(() => {
    if (y_align > 846) {
      // 846 - max height after which time_line will extend the height of the screen
      hr.current.remove();
    } else {
      calendar_body.current.appendChild(hr.current);
    }
    return () => {};
  }, [y_align]);

  const updateTime = () => {
    dispatch(set_timer(new Date()));
  };

  const getDaysInAmonth = (currentDate) => {
    let i = [];
    const limit = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    for (let index = 1; index <= limit; index++) {
      i.push(index);
    }
    setDaysrange(i);
  };

  const style_selected_time = (time) => {
    // For some reason calling this function every second
    // console.log(time);
  };

  const handleHorizontalScroll = (x) => {
    weekDaysBodySlider.current.scrollLeft = x;
    weekDaysTopSlider.current.scrollLeft = x;
  };

  const handleVerticalScroll = (y) => {
    weekDaysBodyTimeSlider.current.scrollTop = y;
    weekDaysBodySlider.current.scrollTop = y;

    let calculatedMargin =
      timer.getHours() * 72 + new Date().getMinutes() * 1.2 - y;

    set_y_align(calculatedMargin);

    hr.current.style.top = `${calculatedMargin}px`;
  };

  const handleMonthChange = (prevDate, sign) => {
    let prev_date = document.getElementById(
      // Get the previous date
      chosen_days[chosen_days.length - 1]
    );
    if (prev_date != null) {
      removeStyle(prev_date.style);
    }

    // Calendar slider in the top should be updated as sonn as date chanded asynchronously
    month === 0
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
          <div>Check</div>
          <Header>
            <p style={{ marginRight: "20px" }}>Interview Calendar</p>
            <AddIcon src="add-sign.png"></AddIcon>
          </Header>
          <DaysOptionsSliderWrapper>
            <DaysOptionsSliderContentWindow>
              <WeekDaysTitlesLine
                ref={weekDaysTopSlider}
                onScroll={(event) =>
                  handleHorizontalScroll(event.currentTarget.scrollLeft)
                }
              >
                <WeekDaysTitlesTable>
                  <DateSlider>
                    {daysRange.map((day) => (
                      <SliderDay
                        day={day}
                        date={date}
                        key={day}
                        handleHorizontalScroll={handleHorizontalScroll}
                      ></SliderDay>
                    ))}
                  </DateSlider>
                </WeekDaysTitlesTable>
              </WeekDaysTitlesLine>
              <YearMonthChoiceLine>
                <MonthSliderIcon
                  src="less-icon.png"
                  onClick={(e) => handleMonthChange(date, -1)}
                  style={{ justifySelf: "start" }}
                ></MonthSliderIcon>
                <MonthYearChoice>
                  {monthRange[date.getMonth()]} {date.getFullYear()}{" "}
                </MonthYearChoice>
                <MonthSliderIcon
                  src="more-icon.png"
                  onClick={(e) => handleMonthChange(date, 1)}
                  style={{ justifySelf: "end" }}
                ></MonthSliderIcon>
              </YearMonthChoiceLine>
            </DaysOptionsSliderContentWindow>
          </DaysOptionsSliderWrapper>

          <CalendarBody ref={calendar_body}>
            <TimeLineHr ref={hr} />
            <TimePickerSideBar
              ref={weekDaysBodyTimeSlider}
              onScroll={(event) =>
                handleVerticalScroll(event.currentTarget.scrollTop)
              }
            >
              {timeRange.map((value, index) => (
                <TimePickerSideBarP key={index}>
                  {`${new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDay(),
                    index
                  ).getHours()}:00`}
                </TimePickerSideBarP>
              ))}
            </TimePickerSideBar>
            <TimePickerBody
              ref={weekDaysBodySlider}
              onScroll={(event) => (
                handleHorizontalScroll(event.currentTarget.scrollLeft),
                handleVerticalScroll(event.currentTarget.scrollTop)
              )}
            >
              {daysRange.map((day) => (
                <div key={day}>
                  <TimePickerBodyColumn>
                    {timeRange.map((value, index) => (
                      <TimePickerCell
                        key={index}
                        {...reservations.map(
                          (value, n) =>
                            new Date(
                              date.getFullYear(),
                              date.getMonth(),
                              day,
                              index
                            ).toString() === value && style_selected_time(value)
                        )}
                        id={
                          new Date(
                            date.getFullYear(),
                            date.getMonth(),
                            day,
                            index
                          )
                        }
                        onClick={() =>
                          console.log(
                            new Date(
                              date.getFullYear(),
                              date.getMonth(),
                              day,
                              index
                            )
                          )
                        }
                      ></TimePickerCell>
                    ))}
                  </TimePickerBodyColumn>
                </div>
              ))}
            </TimePickerBody>
          </CalendarBody>
          <CalendarFooter>
            <FooterParagraph>Today</FooterParagraph>
            {_is_time_active && <FooterParagraph>Delete</FooterParagraph>}
          </CalendarFooter>
        </CalendarWindow>
      </Wrapper>
    </>
  );
}
