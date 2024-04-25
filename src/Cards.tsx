
import React from "react"

const Cards = (props) => {
  return (
    <div className="w-4/12 h-screen  relative bg-[url('./assets/images/bg-main-desktop.png')] bg-cover " >
    
    <div className="w-[440px] p-10 h-[260px] bg-[url('./assets/images/bg-card-front.png')] shadow-md shadow-black bg-cover rounded-lg absolute right-[-25%] bottom-[50%]">
    <svg width="84" height="47" fill="none" style={{ marginBottom: '50px' }} xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"  /></svg>
        <span className=" text-white text-3xl mt-14" >{props.cardNumber.slice(0,4)}  {props.cardNumber.slice(4,9)} {props.cardNumber.slice(9,14)} {props.cardNumber.slice(14,19)}</span>      
        <div className="pt-4 flex justify-between">
          <span className="text-md tracking-widest text-white uppercase">{props.name}</span>
          <span className="text-md tracking-widest text-white ">{props.expMonth}/{props.expYear}</span>
        </div>
    </div>

    <div className="w-[440px] p-10 h-[260px] bg-[url('./assets/images/bg-card-back.png')] shadow-md shadow-black bg-cover rounded-lg absolute right-[-50%] top-[55%] flex items-center justify-end">
        <span className="text-md tracking-widest text-white">{props.cvc}</span>
    </div>

      </div>
      
  )
}

export default Cards