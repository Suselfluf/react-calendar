import React, { useState, useEffect } from "react";
import * as styled from "../../styles/calendar.styled";
import { add_reservation } from "../../redux/models/reservations/reservationSlice";
import { useDispatch, useSelector } from "react-redux";
import { has_duplicates } from "../../redux/models/reservations/reservationSlice";
export default function PopUp_reservations(props) {
  const dispatch = useDispatch();
  const [date_value, set_date_value] = useState(null);
  const [is_error, set_is_error] = useState(false);

  const reservations = useSelector(
    (state) => state.reservationSlice.reservations
  );

  const handleInputChange = (event) => {
    const result = event.target.value.replace(/[^0-9+" "]/gi, "");
    set_date_value(result);
  };
  useEffect(() => {
    // const timerId = setInterval(set_is_error(false), 5000);
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    return () => {
      console.log();
      // clearInterval(timerId);
      sleep(5000).then(() => set_is_error(false));
    };
  }, [is_error]);

  const handleKeyEvent = (key) => {
    key.code === "Enter" && handleSubmitForm();
    key.code === "Escape" && props.handlePopUpClose();
  };

  const handleSubmitForm = () => {
    let formated_date = `${date_value}:00:00`;

    let val = has_duplicates(reservations, formated_date);

    if (!val) {
      set_is_error(true); // validation has shown
    } else {
      let payload = dispatch(add_reservation(formated_date));
      props.handlePopUpSubmit(payload.payload);
    }
  };

  return (
    <>
      <styled.PopUpBackground>
        <styled.PopUpWrapperDiv>
          <styled.PopUpContentHeaderP>
            Add new interview
          </styled.PopUpContentHeaderP>
          <styled.PopUpContentSubHeaderP>
            Enter a valid time for planned interview:
          </styled.PopUpContentSubHeaderP>
          <styled.PopUpContentInputForm
            placeholder="YYYY M DD H | HH"
            value={date_value}
            onChange={handleInputChange}
            onKeyDown={(key) => handleKeyEvent(key)}
            autoFocus
          />
          {is_error && (
            <styled.PopUpValidationMessageP>
              You do have an interview on this date already
            </styled.PopUpValidationMessageP>
          )}
          <styled.PopUpContentButtonsDiv>
            <styled.PopUpContentButtons
              position={"right"}
              onClick={props.handlePopUpClose}
            >
              Cancel
            </styled.PopUpContentButtons>
            <styled.PopUpContentButtons
              position={"left"}
              onClick={handleSubmitForm}
            >
              Ok
            </styled.PopUpContentButtons>
          </styled.PopUpContentButtonsDiv>
        </styled.PopUpWrapperDiv>
      </styled.PopUpBackground>
    </>
  );
}
