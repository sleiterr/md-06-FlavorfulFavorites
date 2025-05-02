import React, { useState, useEffect } from "react";
//! useParams: Returns an object of key/value pairs of the dynamic params from the current URL
import { useParams } from "react-router-dom";
import s from "./RecipeDetail.module.css";

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
  if (!recipe) return <p className={s.fetch_msg}>Reading...</p>;

  return (
    <section>
      <div className={s.about_container}>
        <div className={s.about_box}>
          <h2 className={s.about_title}>{recipe.name}</h2>
          <img className={s.img_about} src={recipe.image} alt={recipe.name} />
          <h4 className={s.recipe_title}>Ingredients</h4>
          <ul className={s.about_list}>
            {/* i - index of item */}
            {recipe.ingredients.map((item, i) => (
              <li className={s.item_list} key={i}>
                {item}
              </li>
            ))}
          </ul>
          <h4 className={s.about_subtitle}>Instructions</h4>
          <p className={s.desc_recipe}>{recipe.instructions}</p>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetail;
