import Button from "../components/Button";
import React, { useState } from "react";

var intervalId = null;
export default function TemperatureControllerApp() {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [temperatue, setTemperature] = useState(0);

  const increateTempreture = () => {
    setTemperature((temperatue) => temperatue + 1);
    setRed((red) => red + 5);
    setBlue((blue) => blue - 5);
    console.log("yes");
  };
  const increaseTemperature2 = () => {
    intervalId = setInterval(increateTempreture, 500);
  };
  const decreaseTemperature = () => {
    setTemperature((temperatue) => temperatue - 1);
    setBlue((blue) => blue + 5);
    setRed((red) => red - 5);
  };
  const decreaseTemperature2 = () => {
    intervalId = setInterval(decreaseTemperature, 500);
  };
  const stopDecreaseTemperature = () => {
    clearInterval(intervalId);
  };
  const stopIncreaseTemperature = () => {
    console.log("no", intervalId);
    clearInterval(intervalId);
  };

  return (
    <div className="container my-3 text-center">
      <h1 className="mb-4">Temperature App</h1>
      <div
        className="card bg-light m-auto d-flex justify-content-center align-items-center"
        style={{ width: 200 }}
      >
        <h1
          className="text-light card rounded-circle  d-flex justify-content-center my-4"
          style={{
            height: 150,
            width: 150,
            border: "2px solid #666",
            backgroundColor: `rgb(${red > 255 ? 255 : red < 0 ? 0 : red}, 0, ${
              blue > 255 ? 255 : blue < 0 ? 0 : blue
            })`,
          }}
        >
          {temperatue}°C
        </h1>
        <div className="d-flex my-2">
          <Button
            text="-"
            btnClass="btn-lg btn-dark px-4 mx-2"
            onClick={decreaseTemperature}
            onMouseDown={decreaseTemperature2}
            onMouseUp={stopDecreaseTemperature}
          />
          <Button
            text="+"
            btnClass="btn-lg btn-dark px-4 mx-2"
            onClick={increateTempreture}
            onMouseDown={increaseTemperature2}
            onMouseUp={stopIncreaseTemperature}
          />
        </div>
      </div>
    </div>
  );
}
