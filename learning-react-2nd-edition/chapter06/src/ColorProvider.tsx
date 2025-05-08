import React, { createContext, useState, useContext } from "react";
import colorData from "./data/color-data.json";
import type { ColorContextType } from "./types/types";
import { v4 } from "uuid";

export const ColorContext = createContext<ColorContextType>({
    colors: [],
    addColor: () => { },
    rateColor: () => { },
    removeColor: () => { }
});

export const useColors = () => useContext(ColorContext);

type ChildrenProps = {
    children: React.ReactNode;
};

export default function ColorProvider({ children }: ChildrenProps) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title: string, color: string) =>
        setColors([
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color
            }
        ]);

    const rateColor = (id: string, rating: number) =>
        setColors(
            colors.map(color => (color.id === id ? { ...color, rating } : color))
        );

    const removeColor = (id: string) => setColors(colors.filter(color => color.id !== id));

    return (
        <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
            {children}
        </ColorContext.Provider>
    );
}