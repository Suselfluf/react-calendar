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
import TimePickerCellP from "../components/TimePickerCellP.jsx";
import { useDispatch, useSelector } from "react-redux";
import { set_timer } from "../redux/models/timerSlice/timerSlice.jsx";
import { removeStyle } from "../consts/Consts.jsx";
import {
  add_reservation,
  remove_reservation,
} from "../redux/models/reservations/reservationSlice.js";
import PopUp_reservations from "../components/Pop-ups/PopUp_reservations.jsx";

export default function CalendarPage(props) {
  const weekDaysTopSlider = useRef(null);
  const weekDaysBodySlider = useRef(null);
  const weekDaysBodyTimeSlider = useRef(null);

  const mediaQueryDesk = window.matchMedia("(min-width: 740px)");
  // const mediaQueryMobile = window.matchMedia("(max-width: 739px)");

  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date());
  const [daysRange, setDaysrange] = useState([]);
  const [y_align, set_y_align] = useState(0);
  const [counter, set_counter] = useState(0);
  const [_is_time_active, set_is_time_active] = useState(false);
  const [active_time, set_active_time] = useState(null);
  const [is_mobile, set_is_mobile] = useState(false);
  const [is_popup_shown, set_is_popup_shown] = useState(false);
  const [clientX, set_clientX] = useState(0);
  const [is_pressed, set_is_pressed] = useState(false);
  const [difference, set_difference] = useState(0);
  const [initial, set_initial] = useState(0);

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
    const timerId = setInterval(updateTime, 1000);
    if (!calendar_body.current) return;
    const resizeObserver = new ResizeObserver(() => {
      // Tracking the state of element's resizing
      mediaQueryDesk.matches ? set_is_mobile(false) : set_is_mobile(true);
    });
    resizeObserver.observe(calendar_body.current);

    return () => {
      getDaysInAmonth(date);
      clearInterval(timerId);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    getDaysInAmonth(date);
  }, [date]);

  useEffect(() => {
    return () => {
      if (reservations != null) {
        reservations.forEach((value) => {
          let el = document.getElementById(value);
          if (el != null) {
            el.style.backgroundColor = "#EBECFD";
            el.style.cursor = "pointer";
          }
        });
      }
    };
  }, [daysRange]);

  useEffect(() => {
    is_mobile
      ? set_y_align(timer.getHours() * 52 + timer.getMinutes() * 0.7)
      : set_y_align(timer.getHours() * 72 + timer.getMinutes() * 1.2);

    return () => {};
  }, [is_mobile]);

  useEffect(() => {
    set_counter(counter + 1);
    let time_gap = parseInt((timer.getTime() - initialDate.getTime()) / 1000); // elapsed time in seconds
    is_mobile
      ? (hr.current.style.top = `${y_align + time_gap * 0.015}px`)
      : (hr.current.style.top = `${y_align + time_gap * 0.02}px`);
    // Might need change since is approximate
  }, [timer]);

  useEffect(() => {
    if (y_align > calendar_body.current.offsetHeight - 25 || y_align < 0) {
      // 846 - max height after which time_line will extend the height of the screen
      hr.current.remove();
    } else {
      calendar_body.current.appendChild(hr.current);
    }
    return () => {};
  }, [y_align]);

  useEffect(() => {
    return () => {
      if (weekDaysBodySlider != null && weekDaysTopSlider != null) {
        weekDaysBodySlider.current.scrollLeft -= difference / 10;
        weekDaysTopSlider.current.scrollLeft -= difference / 10;
      }
    };
  }, [difference]);

  const updateTime = () => {
    dispatch(set_timer(new Date()));
  };

  const navigateToToday = () => {
    setDate(timer);
    reservations.forEach((value) => {
      let prev_res_el = document.getElementById(value);
      if (prev_res_el != null) {
        removeStyle(prev_res_el.style);
      }
    });

    update_styling();
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

  const handleMouseDown = (e) => {
    set_is_pressed(true);
    set_initial(e.clientX);
  };

  const handleMouseUp = (e) => {
    set_is_pressed(false);
  };

  const handleMouseMoove = (e) => {
    console.log(e.clientX);
    set_clientX(e.clientX);
    if (is_pressed) {
      set_difference(clientX - initial);
    }
  };

  const handleHorizontalScroll = (x) => {
    weekDaysBodySlider.current.scrollLeft = x;
    weekDaysTopSlider.current.scrollLeft = x;
  };

  const handleVerticalScroll = (y) => {
    weekDaysBodyTimeSlider.current.scrollTop = y;
    weekDaysBodySlider.current.scrollTop = y;
    let calculatedMargin = 0;
    is_mobile
      ? (calculatedMargin =
          timer.getHours() * 52 + timer.getMinutes() * 0.7 - y)
      : (calculatedMargin =
          timer.getHours() * 72 + timer.getMinutes() * 1.2 - y);

    set_y_align(calculatedMargin);

    /***
    ##
    for some reason after some time scroll change time_line postition above the one which are with respect with time elapsed
    ##***/
    hr.current.style.top = `${calculatedMargin}px`;
  };

  const update_styling = () => {
    let prev_date = document.getElementById(
      // Get the previous date
      `${chosen_days[
        chosen_days.length - 1
      ].getFullYear()} ${chosen_days[0].getMonth()} ${chosen_days[0].getDate()}`
    );

    if (prev_date != null) {
      removeStyle(prev_date.style);
    }

    reservations.forEach((value) => {
      let prev_res_el = document.getElementById(value);
      if (prev_res_el != null) {
        removeStyle(prev_res_el.style);
      }
    });
  };

  const handleMonthChange = (prevDate, sign) => {
    // Prevmonth conditional styling remooval
    update_styling();

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

  const handleDayTimeChoose = (elem, value) => {
    if (elem.target.style.backgroundColor) {
      elem.target.style.backgroundColor = "#B4B7FA";
      set_is_time_active(true);
      set_active_time(value);
    }

    // dispatch(add_reservation(value));
  };

  const removeActiveTime = () => {
    document.getElementById(active_time).style.backgroundColor = null;
    dispatch(remove_reservation(active_time));
    set_is_time_active(!_is_time_active);
  };

  const handlePopUpSubmit = (new_event) => {
    set_is_popup_shown(false);
    let el = document.getElementById(new_event);
    if (el != null) {
      el.style.backgroundColor = "#EBECFD";
    }
  };

  const handlePopUpClose = () => {
    set_is_popup_shown(false);
  };

  return (
    <>
      <Wrapper>
        {is_popup_shown && (
          <PopUp_reservations
            handlePopUpSubmit={handlePopUpSubmit}
            handlePopUpClose={handlePopUpClose}
          />
        )}
        <CalendarWindow>
          {clientX} {initial} {difference}
          <Header>
            <p style={{ marginRight: "20px" }}>Interview Calendar</p>
            <AddIcon
              src="add-sign.png"
              onClick={() => {
                set_is_popup_shown(true);
              }}
            ></AddIcon>
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
                  <DateSlider
                    onMouseMove={handleMouseMoove}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                  >
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
              onMouseMove={handleMouseMoove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              {daysRange.map((day) => (
                <div key={day}>
                  <TimePickerBodyColumn>
                    {timeRange.map((value, index) => (
                      <TimePickerCellP
                        index={index}
                        day={day}
                        date={date}
                        key={index}
                        handleDayTimeChoose={handleDayTimeChoose}
                      />
                    ))}
                  </TimePickerBodyColumn>
                </div>
              ))}
            </TimePickerBody>
          </CalendarBody>
          <CalendarFooter>
            <FooterParagraph
              onClick={() => {
                navigateToToday();
              }}
            >
              Today
            </FooterParagraph>
            {_is_time_active && (
              <FooterParagraph onClick={removeActiveTime}>
                Delete
              </FooterParagraph>
            )}
          </CalendarFooter>
        </CalendarWindow>
      </Wrapper>
    </>
  );
}
