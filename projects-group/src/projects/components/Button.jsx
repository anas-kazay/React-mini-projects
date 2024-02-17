import React from "react";

export default function Button({
  text = "click",
  btnClass,
  icon,
  onClick,
  onMouseDown,
  onMouseUp,
}) {
  return (
    <button
      className={`btn ${btnClass ? btnClass : "btn-dark"} ${btnClass}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {icon}
      {text}
    </button>
  );
}
