import React from "react";
import Ingredient from "./Ingredient";
import { Ingredient as IngredientType } from "../types/recipe";

type IngredientProps = IngredientType[];

export default function ingredientsList({ list }: { list: IngredientProps }) {
    return (
        <ul className="ingredients">
            {list.map((ingredient, i) => (
                <Ingredient key={i} {...ingredient} />
            ))}
        </ul>
    )
}