import React from "react";
import ReactDOM from "react-dom/client";

type Product = {
    title: string;
    ingredientsList: string[];
    description: string;
};

const chickenNoodleSoup: Product = {
    title: "Chicken Noodle Soup",
    ingredientsList: [
        "2 tablespoons extra-virgin olive oil",
        "1 yellow onion",
        "2 medium carrots",
        "2 stalks celery",
        "1 16oz package wide egg noodles",
        "1 cup cooked chicken",
    ],
    description:
        "Chop and saute onion, carrots, and celery in olive oil until soft. And chicken broth and bring to boil. Add egg noodles and cook until soft. And chicken and simmer.",
};

function IngredientsList(items: string[]) {
    return React.createElement(
        "ul",
        { className: "ingredients" },
        items.map((ing, i) => React.createElement("li", { key: i }, ing)),
    );
}

function ProductSection(product: Product) {
    return React.createElement(
        "section",
        { id: product.title.replaceAll(" ", "-") },
        React.createElement("h1", null, product.title),
        IngredientsList(product.ingredientsList),
        React.createElement("p", null, product.description),
    );
}

const section = ProductSection(chickenNoodleSoup);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render([section]);
