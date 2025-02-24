import { useContext } from "react";
import { Button } from "react-bootstrap";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <Button variant="outline-secondary" onClick={toggleDarkMode}>
      {darkMode ? <FiSun /> : <FiMoon />}
    </Button>
  );
};
