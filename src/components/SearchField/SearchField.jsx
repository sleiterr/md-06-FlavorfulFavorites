import React from "react";
import TextField from "@mui/material/TextField";
import RecipeList from "../RecipeList/RecipeList";

export const SearchField = ({ recipes, setSearchTerm }) => {
  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearchTerm(lowerCase); // Оновлюємо стан пошуку в компоненті Recipes
  };

  return (
    <div>
      <h4>Search Bar</h4>
      <div>
        <TextField
          id="filled-search"
          onChange={inputHandler}
          label="Search field"
          type="search"
          variant="filled"
          color="success"
          sx={{ width: "360px" }}
        />
      </div>
      {/* Передаємо відфільтровані рецепти без додаткової фільтрації */}
      <RecipeList recipes={recipes} />
    </div>
  );
};
