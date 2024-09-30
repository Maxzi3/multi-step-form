import React from "react";

const Switch = ({ isToggled, onToggle }) => {
  return (
    <div
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
        isToggled ? "bg-blue-600" : "bg-gray-300"
      }`}
      onClick={onToggle}
    >
      {/* The toggle circle */}
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
          isToggled ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export default Switch;
