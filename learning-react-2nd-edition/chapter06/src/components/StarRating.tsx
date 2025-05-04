import React from "react";
import Star from "./Star";

type StarRatingProps = {
    totalStars?: number;
    selectedStars: number;
    onRate?: (value: number) => void;
};

export default function StarRating({
    totalStars = 5,
    selectedStars = 0,
    onRate = () => { }
}: StarRatingProps) {
    return (
        <>
            {
                [...Array(totalStars)].map((_, i) => (
                    <Star
                        key={i}
                        selected={selectedStars > i}
                        onSelect={() => onRate(i + 1)}
                    />
                ))
            }
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}