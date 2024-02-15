import React from "react";
import Title from "../components/Title";

export default function RandomizeColor() {
  function handleClick(e) {
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    let color = getRandomColor();
    e.target.style.backgroundColor = color;
    e.target.style.borderColor = color;
  }

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="container m-auto text-center">
      <Title text={"Color Randomizer"} classes={"mb-4"} />
      <button className="btn btn-danger ml-2" onClick={(e) => handleClick(e)}>
        Click me
      </button>
      <button className="btn btn-success m-2" onClick={(e) => handleClick(e)}>
        Click me
      </button>
      <button className="btn btn-primary" onClick={(e) => handleClick(e)}>
        Click me
      </button>
      <button className="btn btn-warning m-2" onClick={(e) => handleClick(e)}>
        Click me
      </button>
    </div>
  );
}
