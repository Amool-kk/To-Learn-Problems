import { useState } from "react";
import "./Buttons.css";

const Buttons = () => {
  const [theme, setTheme] = useState("dark");
  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <button className="theme-Btn" onClick={handleToggle}>
      {theme === "light" ? (
        <i class="fa-regular fa-sun"></i>
      ) : (
        <i class="fa-solid fa-cloud-moon"></i>
      )}
    </button>
  );
};

export default Buttons;
