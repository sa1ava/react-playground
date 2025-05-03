
export type Ingredient = {
    name: string;
    amount: number;
    measurement: string;
};

export type Recipe = {
    name: string;
    ingredients: Ingredient[];
    steps: string[];
};