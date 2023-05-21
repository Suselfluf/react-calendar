import styled from "styled-components";
import { device } from "../consts/Consts";

export const Wrapper = styled.div`
  font-size: 2.5em;
  text-align: center;
  display: block;
  border: 1px solid;
  background-color: #ffffff;
  justify-items: center;
  @media ${device.mobileSmall} {
    font-size: 1.4em;
  }
`;

export const CalendarWindow = styled.div`
  color: #030303;
  margin: auto;
  display: block;
  border: 1px solid;
  background-color: #ffffff;
  @media ${device.mobile} {
    width: 740px;
  }
  @media ${device.mobileSmall} {
    // width: calc(100%);
    // min-width: 0px;
  }
`;

export const Header = styled.div`
  height: 148px;
  display: grid;
  align-items: center;
  justify-items: start;
  @media ${device.mobile} {
    grid-template-columns: 2fr 1fr;
    margin: 0 0 0 5%;
  }
  @media ${device.mobileSmall} {
    grid-template-columns: 1fr 1fr;
    width: auto;
  }
`;

export const AddIcon = styled.img`
  @media ${device.mobile} {
    width: 30px;
    padding-left: 60%;
  }
  @media ${device.mobileSmall} {
    width: 20px;
  }
`;

export const MonthYearChoice = styled.p`
  font-size: 1.1rem;
`;

export const DaysOptionsSliderWrapper = styled.div`
  background-color: #f6f6f6;
  height: 168px;
  @media ${device.mobile} {
    width: 740px;
  }
  @media ${device.mobileSmall} {
    width: calc(100% - 60%);
  }
`;

export const DaysOptionsSliderContentWindow = styled.div`
  margin-left: 13%;
`;

export const WeekDaysTitlesLine = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  height: 86px;
  @media ${device.mobile} {
    // margin-left: 4%;
    font-size: 1.2rem;
  }
`;

export const WeekDaysTitlesTable = styled.div``;

export const DateSlider = styled.div`
  @media ${device.mobile} {
    display: flex;
    position: relative;
    alignitems: center;
    // gap: 3.9rem;
  }
  @media ${device.mobileSmall} {
    display: flex;
    position: relative;
    alignitems: center;
    gap: 1.1rem;
  }
`;

export const CalendarBody = styled.div`
  height: 905px;
  display: grid;
  overflow: scroll;
  grid-template-columns: 13% 87%;
`;

export const TimePickerBody = styled.div`
  overflow-x: scroll;
  margin-top: 1.5%;
  @media ${device.mobile} {
    display: flex;
    position: relative;
    alignitems: center;
  }
  @media ${device.mobileSmall} {
    display: flex;
    position: relative;
    alignitems: center;
    gap: 1.1rem;
  }
`;

export const TimePickerSideBar = styled.div`
  text-align: end;
  margin-right: 5%;
  color: #c0c0c0;
  overflow: scroll;
`;

export const TimePickerSideBarP = styled.p`
  @media ${device.mobile} {
    font-size: 1.1rem;
    margin: 0px;
    height: 72px;
  }
`;

export const WeekDaysSlider = styled.div``;

export const YearMonthChoiceLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  @media ${device.mobile} {
    margin: 0 1.9rem 0 2rem;
  }
`;

export const CalendarFooter = styled.div`
  height: 92px;
  background-color: #f6f6f6;
`;

export const MonthSliderIcon = styled.img`
  width: 30px;
  @media ${device.mobileSmall} {
    width: 20px;
  }
`;

export const SliderDaysNamesP = styled.p`
  font-size: 1rem;
  font-weight: bold;
  @media ${device.mobile} {
    width: 92px;
  }
`;

export const TimePickerBodyColumn = styled.p`
  font-size: 0.8rem;

  @media ${device.mobile} {
    width: 92px;
    margin: 0;
  }
`;

export const SliderDatesP = styled.p`
  font-size: 1.5rem;
`;

export const TimePickerCell = styled.p`
  @media ${device.mobile} {
    width: 92px;
    height: 70px;
    margin: 0;
    border: #e6e6e6 1px solid;
    border-left: 0px;
  }
`;
