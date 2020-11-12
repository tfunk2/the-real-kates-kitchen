import React, { useState, useEffect } from 'react';
import fakeImage from '../images/blue-terrazzo-seamless.jpg'
import Recipe from '../components/Recipe.js'
import SingleCherry from '../images/single-cherry.png'
// import '../stylesheets/SideDishes.css';

export default function SideDishes({ query, setClickedRecipe}) {
    const recipes = [
        {
            name: "",
            ingredients: [
                "",
            ],
            instructions: [
                "",
            ],
            image: fakeImage
        },
    ]

    const [recipesShown, setRecipesShown] = useState([...recipes])

    const ingredients = (array) => {
        return array.map(ingredient => {
                return <div  className="cherry-list-item-div">
                    <img src={SingleCherry} alt="cherry-bullet-point" className="cherry-bullet-point"></img>
                    <li className="ingredients-instructions-li">{ingredient}</li>
                </div>
        })
    }

    const instructions = (array) => {
        return array.map(instruction => {
                return <div className="cherry-list-item-div">
                <img src={SingleCherry} alt="cherry-bullet-point" className="cherry-bullet-point"></img>
                <li className="ingredients-instructions-li">{instruction}</li>
            </div>
        })
    }

    const handleRecipeClick = (name) => {
        setClickedRecipe(name)
    }

    let dishesRegex = new RegExp(query, "i")

    const filterDishes = () => {    
        if(query.length > 0) {
            let newDishes = [...recipes].filter(dish => dishesRegex.test(dish.name))
            setRecipesShown(newDishes)
        } else if (query.length === 0) {
            setRecipesShown([...recipes])
        }
    }

    const dishes = recipesShown.map(recipe => {
        return <Recipe recipe={recipe} 
            ingredients={ingredients}
            instructions={instructions}
            recipesShown={recipesShown}
            handleRecipeClick={handleRecipeClick}
        />
    })

    useEffect(() => {
        filterDishes()
    }, [query])

    return(
        <div className="dishes-div">
            <div className="grid-div">
                {recipesShown.length > 0 ? dishes : <h1>Sorry, no results matching "{query}"</h1>}
            </div>
        </div>
    )
}