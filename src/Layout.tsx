import React, { useState } from "react";

import { Outlet, useOutletContext } from "react-router-dom";
import Cards from "./Cards";

const Layout = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCVC] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value.toUpperCase());
  };

  const validateInput = (event) => {
    if (event.target.value.length > event.target.maxLength) {
      event.target.value = event.target.value.slice(0, event.target.maxLength);
    }
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpMonthChange = (event) => {
    if (event.target.value.length > event.target.maxLength) {
      event.target.value = event.target.value.slice(0, event.target.maxLength);
    }

    if (event.target.value > 12) {
      event.target.value = 12;
    }

    setExpMonth(event.target.value);
  };

  const handleExpYearChange = (event) => {
    if (event.target.value > 40) {
      event.target.value = 40;
    }
    setExpYear(event.target.value);
  };

  const handleCVCChange = (event) => {
    setCVC(event.target.value);
  };

  return (
    <div className="bg-white  min-h-screen min-w-screen flex font-Space">
      <Cards
        name={name}
        cardNumber={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
        cvc={cvc}
      />
      <Outlet
        context={[
          handleNameChange,
          name,
          handleCardNumberChange,
          cardNumber,
          validateInput,
          handleExpMonthChange,
          expMonth,
          handleExpYearChange,
          expYear,
          handleCVCChange,
          cvc,
        ]}
      />
    </div>
  );
};

export default Layout;
