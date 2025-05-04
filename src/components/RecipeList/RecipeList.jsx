import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./RecipeList.module.css";

const RecipeList = ({ recipes, handleLike, handleDislike }) => {
  const navigate = useNavigate();

  if (!Array.isArray(recipes)) {
    return <p>Recipes data is not available</p>; // Якщо recipes не є масивом, виводимо повідомлення
  }

  return (
    <div className={s.list_conteiner}>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
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
  );
};

export default RecipeList;
