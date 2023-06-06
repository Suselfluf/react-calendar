import React, { useEffect, useState, useRef, useReducer } from "react";
import {
  weekDayNames,
  monthRange,
  hourseRange,
  timeRange,
  StyleActiveDay,
} from "../consts/Consts.jsx";
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
  SliderDatesP,
  TimePickerBody,
  TimePickerSideBar,
  TimePickerSideBarP,
  TimePickerCell,
  TimePickerBodyColumn,
  FooterParagraph,
  ActiveSliderDate,
} from "../styles/calendar.styled.js";
import SliderDay from "../components/SliderDay.jsx";

export default function CalendarPage(props) {
  const weekDaysTopSlider = useRef(null);
  const weekDaysBodySlider = useRef(null);
  const weekDaysBodyTimeSlider = useRef(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date());
  const [daysRange, setDaysrange] = useState([]);
  const [days_limit, setDays_limit] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
  );

  const [_is_time_active, set_is_time_active] = useState(false);
  const [_is_booked, set_is_booked] = useState(false);

  useEffect(() => {
    getDaysInAmonth(date);
  }, [date]);

  useEffect(() => {
    return () => {
      getDaysInAmonth(date);
    };
  }, []);

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
    console.log(limit);
    setDaysrange(i);
  };

  const handleDayChoose = (date) => {
    // set_is_day_active(!_is_day_active);
    console.log(date.target.style);
    StyleActiveDay(date.target.style);
    // StyleActiveDay(date.target.style);
  };

  const handleHorizontalScroll = (x) => {
    weekDaysBodySlider.current.scrollLeft = x;
    weekDaysTopSlider.current.scrollLeft = x;
  };

  const handleVerticalScroll = (y) => {
    weekDaysBodyTimeSlider.current.scrollTop = y;
    weekDaysBodySlider.current.scrollTop = y;
  };

  const handleMonthChange = (prevDate, sign) => {
    // Calendar slider in the top should be updated as sonn as date chanded asynchronously
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
    // return getDaysInAmonth(date);
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
          {/* <ActiveSliderDate>Example</ActiveSliderDate> */}
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
                        handleDayChoose={handleDayChoose}
                        key={day}
                      ></SliderDay>
                    ))}
                    {/* {[...Array(days_limit)].map((x) => {
                      console.log(x);
                      return <p>s</p>;
                    })} */}
                  </DateSlider>
                </WeekDaysTitlesTable>
              </WeekDaysTitlesLine>
              <YearMonthChoiceLine>
                <MonthSliderIcon
                  src="less-icon.png"
                  onClick={(e) =>
                    handleMonthChange(date, -1).then((month) =>
                      console.log("sds")
                    )
                  }
                  style={{ justifySelf: "start" }}
                ></MonthSliderIcon>
                <MonthYearChoice>
                  {monthRange[date.getMonth()]} {date.getFullYear()}{" "}
                  {new Date(
                    date.getFullYear(),
                    date.getMonth() + 1,
                    0
                  ).getDate()}
                </MonthYearChoice>
                <MonthSliderIcon
                  src="more-icon.png"
                  onClick={(e) => handleMonthChange(date, 1)}
                  style={{ justifySelf: "end" }}
                ></MonthSliderIcon>
              </YearMonthChoiceLine>
            </DaysOptionsSliderContentWindow>
          </DaysOptionsSliderWrapper>
          <CalendarBody>
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
                        // onClick={() => console.log(day, value)}
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
            {/* <div>
              
            </div> */}
          </CalendarFooter>
        </CalendarWindow>
      </Wrapper>
    </>
  );
}
