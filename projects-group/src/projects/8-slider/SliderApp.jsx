import React, { useState } from "react";
import SliderComp from "./SliderComp";
import Title from "../components/Title";

export default function SliderApp() {
  const [slideValue, setSlideValue] = useState(0);
  const [color, setColor] = useState(0);

  const handleSliderValueChange = (e) => {
    setSlideValue(e.target.value);
    setColor((color) => (color = e.target.value * 2));
  };

  return (
    <div className="container text-center">
      <Title text={"Slide to grow"} classes="pb-4" />
      <SliderComp
        setValue={slideValue}
        handleInput={handleSliderValueChange}
        color={color}
      />
    </div>
  );
}
