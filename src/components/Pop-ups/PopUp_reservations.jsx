import React, { useState, useEffect, useRef } from "react";
import * as styled from "../../styles/calendar.styled";
import { add_reservation } from "../../redux/models/reservations/reservationSlice";
import { useDispatch, useSelector } from "react-redux";
import { has_duplicates } from "../../redux/models/reservations/reservationSlice";
import { motion } from "framer-motion";
export default function PopUp_reservations(props) {
  const dispatch = useDispatch();
  const [date_value, set_date_value] = useState(null);
  const [is_error, set_is_error] = useState(false);
  const buttonRef = useRef(null);
  const [is_minimal_error, set_is_minimal_error] = useState(false);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const reservations = useSelector(
    (state) => state.reservationSlice.reservations
  );

  const handleInputChange = (event) => {
    const result = event.target.value.replace(/[^0-9+" "]/gi, "");
    set_date_value(result);
  };

  useEffect(() => {
    return () => {
      is_error
        ? sleep(5000).then(() => set_is_error(false))
        : sleep(5000).then(() => set_is_minimal_error(false));
    };
  }, [is_error, is_minimal_error]);

  const handleKeyEvent = (key) => {
    key.code === "Enter" && handleSubmitForm();
    key.code === "Escape" && props.handlePopUpClose();
  };

  const handleSubmitForm = () => {
    let formated_date = `${date_value}:00:00`; // Change with respect to new format of date reservations

    let val = has_duplicates(reservations, formated_date);

    if (date_value.length < 10) {
      set_is_minimal_error(true);
    } else if (!val) {
      set_is_error(true); // validation has shown
    } else {
      let payload = dispatch(add_reservation(formated_date));
      props.handlePopUpSubmit(payload.payload);
    }
  };

  return (
    <>
      <styled.PopUpBackground>
        <styled.PopUpWrapperDiv
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.4,
              type: "spring",
            },
          }}
          exit={{
            y: "-100vh",
            opacity: 0,
            transition: {
              duration: 0.4,
            },
          }}
        >
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
          {is_minimal_error && (
            <styled.PopUpValidationMessageP>
              You have written incorrect type of data
            </styled.PopUpValidationMessageP>
          )}
          <styled.PopUpContentButtonsDiv>
            <styled.PopUpContentButtons
              position={"right"}
              onClick={props.handlePopUpClose}
              ref={buttonRef}
            >
              <styled.ButtonTextP
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Cancel
              </styled.ButtonTextP>
            </styled.PopUpContentButtons>
            <styled.PopUpContentButtons
              position={"left"}
              onClick={handleSubmitForm}
            >
              <styled.ButtonTextP
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Ok
              </styled.ButtonTextP>
            </styled.PopUpContentButtons>
          </styled.PopUpContentButtonsDiv>
        </styled.PopUpWrapperDiv>
      </styled.PopUpBackground>
    </>
  );
}
