import React from "react";
import type { Color as ColorType } from "../types/types";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "../ColorProvider";

type ColorProps = ColorType;

export default function Color({
    id,
    title,
    color,
    rating,
}: ColorProps) {
    const { rateColor, removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }}></div>
            <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)} />
        </section>
    )
}