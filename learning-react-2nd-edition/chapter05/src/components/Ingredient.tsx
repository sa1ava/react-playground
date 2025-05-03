import React from "react";
import type { Ingredient as IngredientType } from "../types/recipe";

type IngredientProps = IngredientType;

export default function Ingredient({ amount, measurement, name }: IngredientProps) {
    return (
        <li>
            {amount} {measurement} {name}
        </li>
    );
}