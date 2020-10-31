import React from 'react';
import '../stylesheets/RecipeModal.css';
import Veggies from '../images/veggies.jpg'
import Terrazzo from '../images/blue-terrazzo-seamless.jpg'

export default function RecipeModal({ clickedRecipe, setClickedRecipe }) {
    const whichImage = () => {
        switch(clickedRecipe) {
            case "Vegetable Medley":
                return <img alt="Vegetable Medley" className="modal-img" src={Veggies}></img>;
            case "Blueberry Cereal":
                return <img alt="Blueberry Cereal" className="modal-img" src={Veggies}></img>;
            case "Steak and Potatoes":
                return <img alt="Steak and Potatoes" className="modal-img" src={Veggies}></img>;
            case "Weird Stuff":
                return <img alt="Weird Stuff" className="modal-img" src={Veggies}></img>;
            case "Fruity Jello":
                return <img alt="Fruity Jello" className="modal-img" src={Terrazzo}></img>;
        }
    }

    const handleXClick = () => {
        setClickedRecipe("")
    }

    return (
        <div className="recipe-modal">
            <button className="x-button" onClick={handleXClick}>X</button>
            {whichImage()}
        </div>
    )
}