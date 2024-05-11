import React from "react";

const Button = ({ onClick, variant = "big", children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-600 text-white px-4 py-2  rounded-lg ${
        variant === "big" ? "text-lg" : "text-sm"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
