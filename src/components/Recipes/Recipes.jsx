// Recipes.jsx

import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { handleLike, handleDislike } from "../HandleLike/HandleLikeBtn";
import { SearchField } from "../SearchField/SearchField";
import RecipeList from "../RecipeList/RecipeList";
import RecipesBtn from "../Recipes/RecipesBtn";

import s from "./Recipies.module.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [mealType, setMealType] = useState("all");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);
      } catch (error) {
        console.log("Error fetching recipes:", error);
      }
    };
    fetchRecipe();
  }, []);

  useEffect(() => {
    const filtered = recipes
      .filter((recipe) =>
        mealType === "all" ? true : recipe.mealType.includes(mealType)
      )
      .filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    console.log("Filtered Recipes:", filtered);
    setFilteredRecipes(filtered);
  }, [recipes, mealType, searchTerm]);

  return (
    <section>
      <div className={s.recipe_container}>
        <SearchField setSearchTerm={setSearchTerm} />
        <RecipesBtn setMealType={setMealType} />

        <RecipeList
          recipes={filteredRecipes}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
      </div>
    </section>
  );
};

export default Recipes;
