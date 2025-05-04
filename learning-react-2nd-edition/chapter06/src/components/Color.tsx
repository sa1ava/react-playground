import React from "react";
import type { Color as ColorType } from "../types/types";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

type ColorProps = ColorType & {
    onRemove: (id: string) => void;
    onRate: (id: string, rating: number) => void;
};

export default function Color({
    id,
    title,
    color,
    rating,
    onRemove = () => { },
    onRate = () => { },
}: ColorProps) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }}></div>
            <StarRating selectedStars={rating} onRate={rating => onRate(id, rating)} />
        </section>
    )
}