import React, { useEffect, useState, useRef } from "react";
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

export default function CalendarPage(props) {
  const weekDaysTopSlider = useRef(null);
  const weekDaysBodySlider = useRef(null);
  const weekDaysBodyTimeSlider = useRef(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date());
  const [daysRange, setDaysrange] = useState([]);

  const [_is_day_active, set_is_day_active] = useState(false);
  const [_is_booked, set_is_booked] = useState(false);

  useEffect(() => {
    return () => {
      getDaysInAmonth(date);
    };
  }, [date]);

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
  };

  const handleDayChoose = (date) => {
    // sc-dPwPAC csYSeg
    set_is_day_active(!_is_day_active);
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
                      <div key={day}>
                        <SliderDaysNamesP>
                          {
                            weekDayNames[
                              new Date(
                                date.getFullYear(),
                                date.getMonth(),
                                day
                              ).getDay()
                            ]
                          }
                        </SliderDaysNamesP>
                        <SliderDatesP
                          onClick={(value) => {
                            handleDayChoose(value);
                          }}
                          key={day}
                        >
                          {day + 1}
                        </SliderDatesP>
                        {/* <p
                          className={`sliderDates${toggleDayActive}`}
                          onClick={(value) => {
                            handleDayChoose(value);
                          }}
                        >
                          {day + 1}
                        </p> */}
                      </div>
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
                        onClick={() => console.log(day, value)}
                      ></TimePickerCell>
                    ))}
                  </TimePickerBodyColumn>
                </div>
              ))}
            </TimePickerBody>
          </CalendarBody>
          <CalendarFooter>
            <FooterParagraph>Today</FooterParagraph>
            {_is_day_active && <FooterParagraph>Delete</FooterParagraph>}
          </CalendarFooter>
        </CalendarWindow>
      </Wrapper>
    </>
  );
}
