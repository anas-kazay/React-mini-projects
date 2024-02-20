import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
var body = document.body.style;
export default function HiddenSearchBarApp() {
  const [uiProps, setUiProps] = useState({
    bg: "purple",
    shadow: "",
    transition: "all .3s ease",
    opacity: 0,
    showSearchIcon: true,
  });

  const inputStyle = {
    margin: "10vh 25vw",
    width: "20vh",
    height: "30px",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: `1px solid #333`,
    fontSize: "1.3rem",
    color: "#eee",
    boxShadow: "0px 10px 20px rgba(0,0,0,.1)",
    opacity: uiProps.opacity,
    transition: "all .3s ease",
  };

  const bsSearchStyle = {
    color: "#fff",
    fontSize: 50,
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
  };

  document.body.style.background = uiProps.bg;
  useEffect(() => {
    body = uiProps.bg;
    body.boxShadow = uiProps.shadow;
    body.transition = uiProps.transition;
  }, [uiProps.shadow]);

  const showSearch = () => {
    setUiProps({
      opacity: 1,
      showSearchIcon: false,
    });
  };
  return (
    <div className="container">
      <input type="text" placeholder="Search" style={inputStyle} />
      {uiProps.showSearchIcon && (
        <BsSearch style={bsSearchStyle} onClick={showSearch} />
      )}
    </div>
  );
}
