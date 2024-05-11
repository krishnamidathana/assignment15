import React from "react";
import "./Checkbox.css"; // Import custom CSS file for Checkbox styles

const Checkbox = ({ label, checked, onChange }) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label className="flex items-center h-10 font-bold">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden-checkbox "
      />
      <span className={`checkmark  ${checked ? "checked" : ""}`}></span>{" "}
      {/* Circular checkmark */}
      {label}
    </label>
  );
};

export default Checkbox;
