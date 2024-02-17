import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { ThemeContext, themes } from "./context/theme-context";

export default function LightAndDarkMode() {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }
  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.remove("bg-dark");
        document.body.classList.remove("text-light");
        document.body.classList.add("bg-light");
        document.body.classList.add("text-dark");
        break;
      case themes.dark:
        document.body.classList.remove("bg-light");
        document.body.classList.remove("text-dark");
        document.body.classList.add("bg-dark");
        document.body.classList.add("text-light");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Blog />
    </ThemeContext.Provider>
  );
}
