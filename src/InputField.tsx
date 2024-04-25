import React from "react";
import { useOutletContext } from "react-router-dom";
import { InputMask } from "primereact/inputmask";

const InputField = () => {
  const [
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
  ]: [any, string, any, string, any, any, string, any, string, any, string] =
    useOutletContext();
  return (
    <div className="w-8/12 h-screen flex items-center justify-center">
      <form
        action="/success"
        className="flex flex-col items-start justify-center w-[360px] gap-2"
      >
        <label htmlFor="name" className="tracking-widest text-sm font-bold">
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          minLength={5}
          maxLength={20}
          onChange={handleNameChange}
          value={name}
          id="name"
          required
          className="border border-slate-500 p-2 w-full ring-FromGradient ring-opacity-50 active:ring-FromGradient active:ring-opacity-100 rounded-md mb-4"
        />
        <label
          htmlFor="cardNumber"
          className="tracking-widest text-sm font-bold"
        >
          CARD NUMBER
        </label>
        <InputMask
          id={cardNumber}
          mask="9999 9999 9999 9999"
          value={cardNumber}
          onChange={handleCardNumberChange}
          className="border border-slate-500 p-2 w-full ring-FromGradient ring-opacity-50 active:ring-FromGradient active:ring-opacity-100 rounded-md mb-4 text-xl"
          invalid
        />
        <div className="flex justify-between gap-8 mb-8">
          <div className="grid grid-cols-2 gap-x-4">
            <label
              htmlFor="expiryMonth"
              className="col-span-2 tracking-widest text-sm font-bold"
            >
              EXP. DATE (MM / YY)
            </label>
            <input
              type="number"
              maxLength={2}
              onInput={validateInput}
              value={expMonth}
              onChange={handleExpMonthChange}
              required
              id="expiryMonth"
              className="border border-slate-500 p-2  active:ring-DarkGrayishViolet rounded-md text-xl"
            />
            <input
              value={expYear}
              onChange={handleExpYearChange}
              onInput={validateInput}
              maxLength={2}
              required
              id="expiryYear"
              className="border border-slate-500 p-2 text-xl active:ring-DarkGrayishViolet rounded-md"
            />
          </div>
          <div>
            <label htmlFor="cvc" className=" tracking-widest text-sm font-bold">
              CVC{" "}
            </label>
            <InputMask
              mask="999"
              value={cvc}
              onChange={handleCVCChange}
              required
              invalid
              id="cvc"
              onInput={validateInput}
              className="w-full border border-slate-500 p-2 active:ring-DarkGrayishViolet rounded-md text-xl"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-VeryDarkViolet text-white rounded-lg text-lg font-bold active:scale-90 duration-300"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default InputField;
