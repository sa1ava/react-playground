import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import type { Recipe } from "../types/recipe";

type RecipeProps = Recipe;

const Recipe = ({ name, ingredients, steps }: RecipeProps) => (
    <section id={name.toLowerCase().replace(/ /g, "-")} >
        <h2>{name} </h2>
        <IngredientsList list={ingredients} />
        <Instructions title="Cooking Instructions" steps={steps} />
    </section>
);

export default Recipe;