// RecipesBtn.jsx

import React from "react";
import s from "./Recipies.module.css";

const RecipesBtn = ({ setMealType }) => {
  const handleMeal = (e) => {
    setMealType(e.target.value);
  };
  return (
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
  );
};

export default RecipesBtn;
