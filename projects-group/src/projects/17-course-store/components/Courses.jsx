import React from "react";
import Course from "./Course";

export default function Courses({ list }) {
  return (
    <div
      className="d-flex justify-content-center mt-2"
      style={{ flexWrap: "wrap", gap: 30, listStyleType: "none" }}
    >
      {list.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
}
