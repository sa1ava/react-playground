import React from "react";
import Color from "./Color";
import type { Color as ColorType } from "../types/types";

type ColorListProps = {
    colors: ColorType[];
    onRemoveColor?: (id: string) => void;
    onRateColor?: (id: string, rating: number) => void;
};

export default function ColorList({
    colors = [],
    onRemoveColor = () => { },
    onRateColor = () => { },
}: ColorListProps) {
    if (colors.length === 0) return <div>No Colors Listed.</div>;

    return (
        <div>
            {
                colors.map(color => (
                    <Color
                        key={color.id}
                        {...color}
                        onRemove={onRemoveColor}
                        onRate={onRateColor}
                    />)
                )
            }
        </div>
    )
}