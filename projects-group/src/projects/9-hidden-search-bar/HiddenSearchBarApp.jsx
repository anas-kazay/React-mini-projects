import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
var body = document.body.style;
export default function HiddenSearchBarApp() {
  const [uiProps, setUiProps] = useState({
    bg: "purple",
    shadow: "",
    transition: "all .3s ease",
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
    borderBottomColor: "#fff",
  });

  const inputStyle = {
    margin: "10vh 25vw",
    width: "20vh",
    height: "30px",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: `1px solid ${uiProps.borderBottomColor}`,
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

  const inputEl = useRef(null);

  document.body.style.background = uiProps.bg;
  useEffect(
    () => {
      body.background = uiProps.bg;
      body.boxShadow = uiProps.shadow;
      body.transition = uiProps.transition;
      uiProps.showSearchBar && inputEl.current.focus();
    },
    [uiProps.shadow],
    [uiProps.showSearchBar]
  );

  const showSearch = () => {
    setUiProps({
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true,
    });
  };
  const handleSearchFocus = () => {
    setUiProps({
      shadow: "inset 0 -60vh 30vw 200px rgba(0,0,0,0.5)",
      borderBottomColor: "green",
    });
  };

  const handleSearchBlur = () => {
    setUiProps({
      shadow: "none",
      opacity: 0,
      borderBottomColor: "#fff",
      showSearchIcon: true,
    });
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      {uiProps.showSearchIcon ? (
        <BsSearch style={bsSearchStyle} onClick={showSearch} />
      ) : (
        <input
          type="text"
          placeholder="Search"
          style={inputStyle}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          ref={inputEl}
        />
      )}
    </div>
  );
}
