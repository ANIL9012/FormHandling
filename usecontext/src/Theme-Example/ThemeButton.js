import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          border: "2px solid #9f3434ff",
          borderRadius: "5px",
          margin: "60px",
        }}
      >
        Current Theme : {theme}
      </button>
    </>
  );
}
