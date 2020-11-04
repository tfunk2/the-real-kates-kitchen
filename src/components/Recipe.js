import React, { useState, useEffect} from 'react';
import UpArrow from '../images/up-arrow.png'
import DownArrow from '../images/down-arrow.png'


export default function Recipe({ recipe, ingredients, instructions, mainRecipesShown, handleRecipeClick }) {
    const [isRecipeExpanded, setIsRecipeExpanded] = useState(false)

    const handleExpansion = () => {
        setIsRecipeExpanded(!isRecipeExpanded)
    }

    return(
        <div className="recipe-div">
            <h1 className="dish-name">{recipe.name}</h1>
            {isRecipeExpanded ? <></> : <img className="food-img unexpanded-img" alt={recipe.name} src={recipe.image}></img>}

            {
                isRecipeExpanded ? <>
                    <div className="img-and-ingredients">
                        <img className="food-img" alt={recipe.name} src={recipe.image}></img>
                        <div className="ingredients-or-instructions-div">
                            <h2 className="section-topper-h2">Ingredients</h2>
                            <ul>
                                {ingredients(mainRecipesShown[mainRecipesShown.indexOf(recipe)].ingredients)}
                            </ul>
                        </div>
                    </div>
                    <div className="ingredients-or-instructions-div">
                        <h2 className="section-topper-h2">Instructions</h2>
                        <ul>
                            {instructions(mainRecipesShown[mainRecipesShown.indexOf(recipe)].instructions)}
                        </ul>
                    </div>
                    <button onClick={() => handleRecipeClick(recipe.name)}>Original Recipe</button>
                </> : <></>
            }
            <img className="arrow-img" src={isRecipeExpanded ? UpArrow : DownArrow} onClick={handleExpansion}></img>
        </div>
    )
}