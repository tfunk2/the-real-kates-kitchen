import React, { useState, useEffect } from 'react';
import fakeImage from '../images/blue-terrazzo-seamless.jpg'
import '../stylesheets/MainDishes.css';

export default function MainDishes({ query, setClickedRecipe }) {
    const recipes = [
        {
            name: "Vegetable Medley",
            ingredients: ["peas", "carrots", "tomatoes"],
            instructions: ["Do some of this", "Do some of that", "Do some of this other stuff"],
            image: fakeImage
        },
        {
            name: "Blueberry Cereal",
            ingredients: ["blueberries", "milk", "cereal"],
            instructions: ["Do some of this", "Do some of that", "Do some of this other stuff"],
            image: fakeImage
        },
        {
            name: "Steak and Potatoes",
            ingredients: ["potatoes", "onions", "steak"],
            instructions: ["Do some of this", "Do some of that", "Do some of this other stuff"],
            image: fakeImage
        },
        {
            name: "Weird Stuff",
            ingredients: ["rutabega", "turnips", "paprika"],
            instructions: ["Do some of this", "Do some of that", "Do some of this other stuff"],
            image: fakeImage
        },
        {
            name: "Fruity Jello",
            ingredients: ["pears", "strawberries", "jello"],
            instructions: ["Do some of this", "Do some of that", "Do some of this other stuff"],
            image: fakeImage
        }
    ]

    const [mainRecipesShown, setMainRecipesShown] = useState([...recipes])

    const ingredients = (array) => {
        return array.map(ingredient => {
                return <li>{ingredient}</li>
        })
    }

    const instructions = (array) => {
        return array.map(instruction => {
                return <li>{instruction}</li>
        })
    }

    const handleRecipeClick = (name) => {
        setClickedRecipe(name)
    }

    let mainDishesRegex = new RegExp(query, "i")

    const filterDishes = () => {    
        if(query.length > 0) {
            let newDishes = [...recipes].filter(dish => mainDishesRegex.test(dish.name))
            setMainRecipesShown(newDishes)
        } else if (query.length === 0) {
            setMainRecipesShown([...recipes])
        }
    }

    const mainDishes = mainRecipesShown.map(recipe => {
        return <div className="recipe-div">
            <h1 className="dish-name">{recipe.name}</h1>
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
        </div>
    })

    useEffect(() => {
        filterDishes()
    }, [query])

    return(
        <div className="main-dishes-div">
            <div className="grid-div">
                {mainRecipesShown.length > 0 ? mainDishes : <h1>Sorry, no results matching "{query}"</h1>}
            </div>
        </div>
    )
}