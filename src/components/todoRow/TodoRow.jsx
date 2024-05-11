import React, { useState } from "react";
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";

const TodoRow = ({ todo, onDelete }) => {
  const [hovered, setHovered] = useState(false);
  const [checked, setChecked] = useState(todo.completed);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleCheckboxChange = () => {
    // Toggle the checked state
    setChecked(!checked);
  };

  return (
    <div
      className="flex items-center justify-between py-10 "
      style={{ height: "50px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Checkbox
        label={todo.text}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {hovered && (
        <Button variant="small" onClick={handleDelete}>
          X
        </Button>
      )}
    </div>
  );
};

export default TodoRow;
