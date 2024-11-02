// Button.jsx
import React from "react";

const Button = ({ label, icon, className }) => {
  return (
    <button
      className={`all-[unset] box-border h-11 w-[404px] ${className} relative`}
    >
      <div className="left-[120px] text-neutral-700 absolute top-2 [font-family:'Poppins-Regular',Helvetica] font-normal text-base tracking-[0] leading-[26px] whitespace-nowrap">
        {label}
      </div>
      <img
        className="absolute w-5 h-5 top-3 left-[95px]"
        alt={label}
        src={icon}
      />
    </button>
  );
};

export default Button;
