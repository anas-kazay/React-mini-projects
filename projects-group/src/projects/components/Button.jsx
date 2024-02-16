import React from "react";

export default function Button({ text = "click", btnClass, icon, onClick }) {
  return (
    <button
      className={`btn ${btnClass ? btnClass : "btn-dark"} ${btnClass}`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}
