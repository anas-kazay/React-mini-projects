import React from "react";
import Alert from "../components/Alert";

export default function AlertApp() {
  return (
    <div className="container my-4">
      <Alert type={"success alert-dismissible"} message={"Successful login"} />
      <Alert
        type={"info alert-dismissible"}
        message={"Time triggered"}
        delay={true}
      />
    </div>
  );
}
