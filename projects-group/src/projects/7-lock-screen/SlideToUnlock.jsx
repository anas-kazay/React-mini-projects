import React, { useState } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import LockScreenImg from "./img/moon.jpg";
import HomeScreenImg from "./img/home.jpg";

export default function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
  });

  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState(0);

  const handleLockLsiderInput = (e) => {
    setLockSliderValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "100") {
      console.log("yes");
      setUiProps({
        uiText: "Opened",
        uiColor: "#111",
        uiBg: `url(${HomeScreenImg}) center/cover no-repeat`,
      });
      setShowLockSlider(false);
      console.log(showLockSlider);
    }
  };

  const handleClick = () => {
    setShowLockSlider(true);
    setUiProps({
      uiText: "Unlock screen",
      uiColor: "#eee",
      uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
    });
  };

  return (
    <div
      className="container text-center d-flex  flex-column justify-content-center rounded-4"
      style={{
        height: "80vh",
        marginTop: "15vh",
        width: 340,
        border: "4px solid #000",
        background: uiProps.uiBg,
      }}
    >
      <h1 className="title" style={{ color: uiProps.uiColor }}>
        {uiProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider
          width={"300px"}
          handleInput={handleLockLsiderInput}
          value={lockSliderValue}
        />
      ) : (
        <AiFillUnlock className="unlockIcon ms-5" onClick={handleClick} />
      )}
    </div>
  );
}
