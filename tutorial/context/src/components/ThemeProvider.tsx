import React, { createContext, useState } from "react";
import { ThemeContextType } from "../types/types";

export const ThemeContext = createContext<ThemeContextType>({
    theme: "",
    toggleTheme: () => {}
});

type ChildrenProps = {
    children: React.ReactNode;
}

export default function ThemeProvider({ children }: ChildrenProps) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme: string) => prevTheme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}