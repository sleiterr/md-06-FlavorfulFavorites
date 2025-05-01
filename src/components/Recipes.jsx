import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.log("Error fetching recipes:", error);
      }
    };
    fetchRecipe();
  }, []);

  const handleLike = (id) => {
    const existing = JSON.parse(localStorage.getItem("likedRecipes")) || [];

    if (!existing.includes(id)) {
      existing.push(id);

      localStorage.setItem("likedRecipes", JSON.stringify(existing));
      console.log(existing);
    } else {
      console.log("Recipe already liked");
    }
  };

  const handleDislike = (id) => {
    const existing = JSON.parse(localStorage.getItem("likedRecipes")) || [];

    const update = existing.filter((recipeId) => recipeId !== id);

    localStorage.setItem("likedRecipes", JSON.stringify(update));
    console.log("Recipe removed", id);
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <ul key={recipe.id}>
          <li>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.name}</p>
            <button onClick={() => navigate(`/recipe/${recipe.id}`)}>
              Read more
            </button>
            <button onClick={() => handleLike(recipe.id)}>🩷</button>
            <button onClick={() => handleDislike(recipe.id)}>👎🏻</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Recipes;
