import React, {useContext} from "react";
import { ThemeContext } from "./ThemeProvider";

export default function ThemeDisplay() {
    const { theme } = useContext(ThemeContext);
    const bgColor = theme === "light" ? "#ffffff" : "#222222";
    const fgColor = theme === "light" ? "#222222" : "#ffffff";

    return (
        <>            
            <div style={{ backgroundColor: bgColor, width: "200px", height: "200px" }}>
                <div className="text-x1" style={{ color: fgColor }}>Current Theme: {theme}</div>    
            </div>        
        </>
    )
}