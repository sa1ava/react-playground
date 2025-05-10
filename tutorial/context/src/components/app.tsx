import React from "react";
import ThemeProvider from "./ThemeProvider";
import ThemeDisplay from "./ThemeDisplay";
import ThemeToggleButton from "./ThemeToggleButton";


export default function App() {
    return (
        <ThemeProvider>
            <div style={{ padding: "2rem", border: "1px sold #ccc", borderRadius: "0.5rem" }}>
                <ThemeDisplay />
                <ThemeToggleButton />
            </div>
        </ThemeProvider>
    )
}