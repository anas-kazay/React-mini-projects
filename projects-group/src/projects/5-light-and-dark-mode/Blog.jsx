import React, { useContext } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { ThemeContext } from "./context/theme-context";

export default function Blog() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className="container p-1">
      <Title
        text={`My Blog with ${theme} Theme`}
        classes={"my-5 text-center"}
      />
      <span style={{ position: "absolute", top: 10, right: 10 }}>
        <Button
          text={theme === "dark" ? "Light" : "Dark"}
          btnClass={`${theme === "dark" ? "btn-light" : "btn-dark"} btn-sm`}
          onClick={changeTheme}
        />
      </span>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, nemo
        repudiandae voluptates rem nisi impedit exercitationem totam facere
        recusandae voluptatibus. Numquam, eius! Rerum neque similique corporis
        perferendis impedit natus repellendus?
      </p>
    </div>
  );
}
