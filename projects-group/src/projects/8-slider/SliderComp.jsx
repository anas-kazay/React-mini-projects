import React from "react";

export default function SliderComp({ setValue, handleInput, color }) {
  return (
    <div
      className="container d-flex  flex-column"
      style={{ gap: 200, width: "50vw" }}
    >
      <input
        type="range"
        min={0}
        max={100}
        value={setValue}
        onInput={handleInput}
      />
      <div className=" d-flex  flex-row justify-content-center ">
        <span
          style={{
            color: `rgb(${color}, 255, 255)`,
            background: `rgb(0, ${color}, 100)`,
            height: setValue * 3,
            width: setValue * 3,
            fontWeight: 600,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            left: "50%", // Center horizontally
            top: "50%", // Center vertically
            transform: "translate(-50%, -50%)",
          }}
        >
          {setValue}
        </span>
      </div>
    </div>
  );
}
