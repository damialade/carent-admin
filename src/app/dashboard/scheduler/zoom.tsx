import React, { useState } from "react";

const Zoom = ({ onChange }: any) => {
  const [level, setLevel] = useState("month");

  const handleChange = (ev: any) => {
    const newLevel = ev.target.value;
    setLevel(newLevel);
    if (onChange) {
      onChange({ level: newLevel });
    }
  };

  return (
    <span className="toolbar-item cursor-pointer text-btn-green font-medium text-md">
      <label>
        <input
          type="radio"
          name="zoom"
          value="month"
          onChange={handleChange}
          checked={level === "month"}
        />
        Month
      </label>
      <label>
        <input
          type="radio"
          name="zoom"
          value="week"
          onChange={handleChange}
          checked={level === "week"}
        />
        Week
      </label>
    </span>
  );
};

export default Zoom;
