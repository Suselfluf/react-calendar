import styled from "styled-components";
import { device } from "../consts/Consts";

export const Wrapper = styled.div`
  font-size: 2.5em;
  text-align: center;
  display: block;
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
    grid-template-columns: 70% 30%;
    height: 78px;
    gap: 5%;
    justify-items: center;
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
  @media ${device.mobile} {
    font-size: 1.1rem;
  }
  @media ${device.mobileSmall} {
    font-size: 0.8rem;
  }
`;

export const DaysOptionsSliderWrapper = styled.div`
  background-color: #f6f6f6;
  height: 168px;
  border: 1px solid #ebebeb;
  @media ${device.mobile} {
    width: 738px;
  }
  @media ${device.mobileSmall} {
    height: 98px;
  }
`;

export const DaysOptionsSliderContentWindow = styled.div`
  margin-left: 13%;
  @media ${device.mobileSmall} {
  }
`;

export const WeekDaysTitlesLine = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  width: 95%;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media ${device.mobile} {
    font-size: 1.2rem;
    height: 93px;
  }
  @media ${device.mobileSmall} {
    height: 63px;
    width: 95%;
  }
`;

export const WeekDaysTitlesTable = styled.div``;

export const DateSlider = styled.div`
  @media ${device.mobile} {
    display: flex;
    position: relative;
    alignitems: center;
  }
  @media ${device.mobileSmall} {
    display: flex;
    position: relative;
  }
`;

export const CalendarBody = styled.div`
  height: 905px;
  display: grid;
  position: relative;
  grid-template-columns: 13% 87%;
  @media ${device.mobileSmall} {
    height: 65vh;
    padding-right: 10px;
  }
`;

export const TimePickerBody = styled.div`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }

  @media ${device.mobile} {
    margin-top: 1.5%;
    display: flex;
    position: relative;
    alignitems: center;
  }
  @media ${device.mobileSmall} {
    margin-top: 1%;
    display: flex;
    position: relative;
    alignitems: center;
  }
`;

export const TimePickerSideBar = styled.div`
  text-align: end;
  color: #c0c0c0;
  overflow: scroll;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const TimePickerSideBarP = styled.p`
  @media ${device.mobile} {
    font-size: 1.1rem;
    margin: 0px;
    height: 72px;
  }
  @media ${device.mobileSmall} {
    font-size: 0.8rem;
    margin: 0px;
    height: 52px;
  }
`;

export const WeekDaysSlider = styled.div``;

export const YearMonthChoiceLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  @media ${device.mobile} {
    margin: 5px 1.9rem 0 2rem;
  }
  @media ${device.mobileSmall} {
    margin-right: 5%;
    margin-left: 5%;
  }
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
  @media ${device.mobileSmall} {
    font-size: 0.7rem;
    width: 12.14vw;
  }
`;

export const TimePickerBodyColumn = styled.div`
  font-size: 0.8rem;

  @media ${device.mobile} {
    width: 92px;
    margin: 0;
  }
  @media ${device.mobileSmall} {
    // width: 46px;
    margin: 0;
  }
`;

export const SliderDatesP = styled.p`
  font-size: 1.5rem;
  @media ${device.mobileSmall} {
    font-size: 1.1rem;
    margin: 0;
    height: 25px;
  }
  // background-color: ${(props) => (props.active ? "red" : "#f6f6f6;")};
`;

export const TimePickerCell = styled.p`
  margin: 0;
  border: #e6e6e6 1px solid;
  border-left: 0px;
  @media ${device.mobile} {
    width: 92px;
    height: 70px;
  }
  @media ${device.mobileSmall} {
    width: 12vw;
    height: 50px;
  }
`;

export const CalendarFooter = styled.div`
  height: 12vh;
  background-color: #f6f6f6;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  border-top: 1px solid #ebebeb;
  gap: 10vw;
`;

export const FooterParagraph = styled.p`
  color: #eb473d;
  font-size: 1.2rem;
  @media ${device.mobile} {
  }
  @media ${device.mobileSmall} {
  }
`;

export const ActiveSliderDate = styled.p`
  color: #eb473d;
  font-size: 1.5rem;
  @media ${device.mobileSmall} {
    font-size: 1.1rem;
    margin: 0;
    height: 25px;
  }
`;

export const TimeLineHr = styled.hr`
  height: 0.5px;
  border-top: 1px solid #eb473d;
  background: #eb473d;
  position: absolute;
  margin: 10px 0 0 13%;
  width: 642px;
  overflow: hidden;
  @media ${device.mobileSmall} {
    top: -5px;
    width: 85%;
  }
`;
