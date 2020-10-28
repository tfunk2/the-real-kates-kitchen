import React from 'react';
import fakeImage from '../images/blue-terrazzo-seamless.jpg'
import '../stylesheets/MainDishes.css';

export default function MainDishes(props) {
    const recipes = [
        {
            name: "Main Dish #1",
            ingredients: ["peas", "carrots", "tomatoes"],
            instructions: ["Do some of this", "Do some of that", "Do some of this other stuff"],
            image: fakeImage
        },
        {
            name: "Main Dish #2",
            ingredients: ["blueberries", "milk", "cereal"],
            instructions: ["Do some of this", "Do some of that", "Do some of this other stuff"],
            image: fakeImage
        },
        {
            name: "Main Dish #3",
            ingredients: ["potatoes", "onions", "steak"],
            instructions: ["Do some of this", "Do some of that", "Do some of this other stuff"],
            image: fakeImage
        },
        {
            name: "Main Dish #4",
            ingredients: ["rutabega", "turnips", "paprika"],
            instructions: ["Do some of this", "Do some of that", "Do some of this other stuff"],
            image: fakeImage
        },
        {
            name: "Main Dish #5",
            ingredients: ["pears", "strawberries", "jello"],
            instructions: ["Do some of this", "Do some of that", "Do some of this other stuff"],
            image: fakeImage
        }
    ]

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

    const handleRecipeClick = () => {

    }

    const mainDishes = recipes.map(recipe => {
        return <div className="recipe-div">
            <h1 className="dish-name">Main Dish #{parseInt(recipes.indexOf(recipe)) + 1}</h1>
            <div className="img-and-ingredients">
                <img className="food-img" alt={recipe.name} src={recipe.image}></img>
                <div className="ingredients-or-instructions-div">
                    <h2 className="section-topper-h2">Ingredients</h2>
                    <ul>
                        {ingredients(recipes[recipes.indexOf(recipe)].ingredients)}
                    </ul>
                </div>
            </div>
            <div className="ingredients-or-instructions-div">
                <h2 className="section-topper-h2">Instructions</h2>
                <ul>
                    {instructions(recipes[recipes.indexOf(recipe)].instructions)}
                </ul>
            </div>
            <button onClick={handleRecipeClick}>Original Recipe</button>
        </div>
    })

    return(
        <div className="main-dishes-div">
            <div className="grid-div">
                {mainDishes}
            </div>
        </div>
    )
}