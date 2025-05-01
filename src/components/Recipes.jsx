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

  return (
    <div>
      {recipes.map((recipe) => (
        <ul key={recipe.id}>
          <li>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.name}</p>
            <button
              onClick={() => navigate(`/recipie/${recipe.id}`)}
            >About</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Recipes;
