import React, { useState, useEffect } from "react";
import Popup from "../components/Popup";
import Button from "../components/Button";
import Title from "../components/Title";

export default function PopUpApp() {
  const [trigger, setTrigger] = useState(false);
  const [timeTrigger, setTimeTrigger] = useState(false);
  const triggerPopup = () => {
    setTrigger(true);
  };
  const closePopup = () => {
    setTrigger(false);
  };

  const closeTimerPopup = () => {
    setTimeTrigger(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setTimeTrigger(true);
    }, 3000);
  }, []);
  return (
    <div className="text-center">
      <Title text={"Click the button"} classes={"my-4"} />
      <Button btnClass={"btn-primary"} onClick={triggerPopup} />

      <Popup
        type={"alert-info"}
        title={"Triggered Popup"}
        text={"This was tiggered by a button"}
        handleClose={closePopup}
        trigger={trigger}
      />
      <Popup
        type={"alert-warning"}
        title={"Time triggered Popup"}
        text={"This was tiggered by a delay"}
        handleClose={closeTimerPopup}
        trigger={timeTrigger}
      />
    </div>
  );
}
