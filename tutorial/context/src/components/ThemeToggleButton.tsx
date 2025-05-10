import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ThemeToggleButton() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} className="mt-4">Toggle Theme</button>
    );
}