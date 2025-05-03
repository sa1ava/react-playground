import React from "react";
import ReactDOM from "react-dom/client";
import dataJson from "./data/recipes.json";
import Menu from "./components/Menu";
import type { Recipe } from "./types/recipe";

const data: Recipe[] = dataJson;

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Menu recipes={data} />);