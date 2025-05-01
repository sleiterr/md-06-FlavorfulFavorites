import React, { useState, useEffect } from "react";
//! useParams: Returns an object of key/value pairs of the dynamic params from the current URL
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await res.json();
        console.log(data);

        setRecipe(data);
      } catch (error) {
        console.log("Error fetching details:", error);
      }
    };
    console.log("Fetched ID:", id);

    fetchRecipe();
  }, [id]);
  if (!recipe) return <p>Reading...</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <h4>Ingredients</h4>
      <ul>
        {/* i - index of item */}
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h4>Instructions</h4>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
