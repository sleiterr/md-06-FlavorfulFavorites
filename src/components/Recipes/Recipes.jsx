import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLike, handleDislike } from "../HandleLike/HandleLikeBtn";

import s from "./Recipies.module.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [meailType, setMealType] = useState("all");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const navigate = useNavigate();

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

  const mealTypeFilter = () => {
    if (meailType === "all") {
      return recipes;
    }
    return recipes.filter((recipe) => recipe.mealType.includes(meailType));
  };

  const handleMeal = (e) => {
    const typeMeal = e.target.value;
    setMealType(typeMeal);

    const filtered = mealTypeFilter(typeMeal);
    setFilteredRecipes(filtered);
  };

  return (
    <section>
      <div className={s.recipe_container}>
        <div className={s.filter_btn}>
          <button className={s.btn_filter} value="all" onClick={handleMeal}>
            All
          </button>
          <button className={s.btn_filter} value="Breakfast" onClick={handleMeal}>
            Breakfast
          </button>
          <button className={s.btn_filter} value="Lunch" onClick={handleMeal}>
            Lunch
          </button>
          <button className={s.btn_filter} value="Dinner" onClick={handleMeal}>
            Dinner
          </button>
        </div>
        <div className={s.list_contsiner}>
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <ul className={s.list_recipe} key={recipe.id}>
                <li>
                  <img src={recipe.image} alt={recipe.name} />
                  <p className={s.list_title}>{recipe.name}</p>
                  <div className={s.recipe_btn}>
                    <button
                      className={s.btn_list}
                      onClick={() => navigate(`/recipe/${recipe.id}`)}
                    >
                      Read more
                    </button>
                    <button
                      className={s.btn_like}
                      onClick={() => handleLike(recipe.id)}
                    >
                      🩷
                    </button>
                    <button
                      className={s.btn_dislike}
                      onClick={() => handleDislike(recipe.id)}
                    >
                      👎🏻
                    </button>
                  </div>
                </li>
              </ul>
            ))
          ) : (
            <p>No recipes found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
