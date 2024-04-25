import { useNavigate } from "react-router-dom";
import Complete from "./assets/images/icon-complete.svg";
import React from "react";

const Success = () => {
  const Navigate = useNavigate();

  const btnHandler = () => {
    Navigate("/");
  };
  return (
    <div className="w-8/12 h-screen flex items-center justify-center">
      <div className="w-8/12 h-screen flex items-center justify-center">
        <div className="w-[360px] flex items-center justify-center flex-col gap-5">
          <img src={Complete} alt="Complete Icon" />
          <span className="text-4xl  text-VeryDarkViolet tracking-widest uppercase font-Space">
            Thank You!
          </span>
          <span className="text-lg font-semibold  text-DarkGrayishViolet tracking-widest font-Space">
            We've added your card details
          </span>

          <button
            onClick={btnHandler}
            className="w-full py-3 m-10 bg-VeryDarkViolet text-white rounded-lg text-lg font-bold active:scale-90 duration-300"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
