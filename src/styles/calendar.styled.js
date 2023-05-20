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
  margin-left: 5%;
  margin-right: 5%;
`;

export const WeekDaysTitlesLine = styled.div`
  overflow: scroll;
  @media ${device.mobile} {
    margin-left: 5rem;
    font-size: 1.2rem;
  }
`;

export const WeekDaysTitlesTable = styled.table``;

export const DateSlider = styled.div`
  @media ${device.mobile} {
    display: flex;
    position: relative;
    alignitems: center;
    gap: 3.9rem;
  }
  @media ${device.mobileSmall} {
    display: flex;
    position: relative;
    alignitems: center;
    gap: 1.1rem;
  }
`;

export const WeekDaysSlider = styled.div``;

export const YearMonthChoiceLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  @media ${device.mobile} {
    margin: 0 1.6rem 0 4.5rem;
  }
`;

export const CalendarBody = styled.div`
  height: 905px;
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
  font-size: 0.8rem;
`;

export const SliderDatesP = styled.p`
  font-size: 1.5rem;
`;
