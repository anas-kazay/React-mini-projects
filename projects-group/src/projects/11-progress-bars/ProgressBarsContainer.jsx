import React, { useRef, useEffect, useState } from "react";
import Title from "../components/Title";
import { Progressbar } from "../components/Progressbar";

export default function ProgressBarsContainer() {
  const [completed, setCompleted] = useState(51);
  const [status, setStatus] = useState({
    ui: 55,
    ux: 73,
    data: 20,
  });

  const projectDate = [
    { bgColor: "#7633f9", completed: status.ui },
    { bgColor: "#28a745", completed: status.ux },
    { bgColor: "#dc3545", completed: status.data },
  ];

  const inputStyle = {
    width: 50,
    border: "none",
    outline: "none",
    textAlign: "center",
    borderBottom: "1px solid lightgray",
  };

  const uiInput = useRef(null);

  useEffect(() => {
    uiInput.current.focus();
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="container container-sm mx-auto text-center">
      <Title text={"Progress Bars"} />
      <h3>Project status:</h3>
      <ul style={{ listStyleType: "none" }}>
        <li>
          UI Status: {""}
          <input
            type="number"
            name=""
            id=""
            style={inputStyle}
            ref={uiInput}
            value={status.ui}
            onChange={(e) => setStatus({ ...status, ui: e.target.value })}
          />
        </li>
        <li>
          UX Status: {""}
          <input
            type="number"
            name=""
            id=""
            style={inputStyle}
            value={status.ux}
            onChange={(e) => setStatus({ ...status, ux: e.target.value })}
          />
        </li>
        <li>
          DATA Status:{""}
          <input
            type="number"
            name=""
            id=""
            style={inputStyle}
            value={status.data}
            onChange={(e) => setStatus({ ...status, data: e.target.value })}
          />
        </li>
      </ul>
      {projectDate.map((date, idx) => (
        <Progressbar
          key={idx}
          bgColor={date.bgColor}
          completed={date.completed}
        />
      ))}
      <Progressbar
        bgColor={`rgb(${completed * 2},100,100)`}
        completed={completed}
      />
    </div>
  );
}
