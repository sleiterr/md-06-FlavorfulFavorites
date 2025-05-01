import React from "react";

export const handleLike = (id) => {
  const existing = JSON.parse(localStorage.getItem("likedRecipes")) || [];

  if (!existing.includes(id)) {
    existing.push(id);

    localStorage.setItem("likedRecipes", JSON.stringify(existing));
    console.log(existing);
  } else {
    console.log("Recipe already liked");
  }
};

export const handleDislike = (id) => {
  const existing = JSON.parse(localStorage.getItem("likedRecipes")) || [];

  const update = existing.filter((recipeId) => recipeId !== id);

  localStorage.setItem("likedRecipes", JSON.stringify(update));
  console.log("Recipe removed", id);
};
