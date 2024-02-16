import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Alert({ type, message, delay }) {
  const [showAlert, setShowAlert] = useState(true);
  const closeAlert = (e) => {
    e.target.parentElement.parentElement.classList.add("fadeAlert");
    setTimeout(() => {
      setShowAlert(false);
    }, 400);
  };

  useEffect((e) => {
    delay &&
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
  });

  return (
    showAlert && (
      <div className={`alert alert-${type}`} role="alert">
        <div className="alert-close">
          <span className="mr-1">{message}</span>
          <Button
            btnClass={"btn-close"}
            text=""
            data-bs-dismiss="alert"
            onClick={closeAlert}
          />
        </div>
      </div>
    )
  );
}
