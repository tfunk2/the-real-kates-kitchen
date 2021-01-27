import React, { useState, useEffect } from "react";
import UpArrow from "../images/up-arrow.png";
import DownArrow from "../images/down-arrow.png";

export default function Recipe({
  recipe,
  ingredients,
  instructions,
  recipesShown,
  handleRecipeClick,
}) {
  const [isRecipeExpanded, setIsRecipeExpanded] = useState(false);

  const handleExpansion = () => {
    setIsRecipeExpanded(!isRecipeExpanded);
  };

  return (
    <div className="recipe-div" onClick={handleExpansion}>
      <h1 className="dish-name">{recipe.name}</h1>
      {isRecipeExpanded ? (
        <></>
      ) : (
        <img
          className="food-img unexpanded-img"
          alt={recipe.name}
          src={recipe.image}
        ></img>
      )}

      {isRecipeExpanded ? (
        <>
          <div className="img-and-ingredients">
            <img
              className="food-img"
              alt={recipe.name}
              src={recipe.image}
            ></img>
            <div className="ingredients-or-instructions-div">
              <span className="section-topper-span">Ingredients</span>
              <ul className="ingredients-ul">
                {ingredients(
                  recipesShown[recipesShown.indexOf(recipe)].ingredients
                )}
              </ul>
            </div>
          </div>
          <div id="instructions" className="ingredients-or-instructions-div">
            <span className="section-topper-span">Instructions</span>
            <ul className="instructions-ul">
              {instructions(
                recipesShown[recipesShown.indexOf(recipe)].instructions
              )}
            </ul>
          </div>
          <button
            className="original-recipe-button"
            onClick={() => handleRecipeClick(recipe.name)}
          >
            Original Recipe
          </button>
        </>
      ) : (
        <></>
      )}
      <img
        className="arrow-img"
        src={isRecipeExpanded ? UpArrow : DownArrow}
      ></img>
    </div>
  );
}
