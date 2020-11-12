import React from 'react';
import '../stylesheets/RecipeModal.css';
// Main Recipes
import BakedPotatoSoup from '../images/main-recipes/baked-potato-soup.jpg'
import BerryGoodFrenchToast from '../images/main-recipes/berry-good-french-toast.jpg'
import BreadingForChicken from '../images/main-recipes/breading-for-chicken.jpg'
import BreakfastCasserole from '../images/main-recipes/breakfast-casserole.jpg'
import ChickenAndRice from '../images/main-recipes/chicken-and-rice-recipe.jpg'
import ChickenTortillaSoup from '../images/main-recipes/chicken-tortilla-soup.jpg'
import CompanyCasserole from '../images/main-recipes/company-casserole-combined.png'
import CrisSloppyJoes from '../images/main-recipes/cris-sloppy-joes.jpg'
import CrockpotBreakfastCasserole from '../images/main-recipes/crockpot-breakfast-casserole.png'
import DumpAndBakeChickenParmesan from '../images/main-recipes/dump-and-bake-chicken-parmesan.jpg'
import GramsMeatloaf from '../images/main-recipes/gram\'s-meatloaf.jpg'
import GrandmaFunksPerfectWaffles from '../images/main-recipes/grandma-funk\'s-perfect-waffles.jpg'
import GrilledCheeseOven from '../images/main-recipes/grilled-cheese-oven.jpg'
import HashbrownCasserole from '../images/main-recipes/hashbrown-casserole.jpg'
import HeartyBreakfastCasserole from '../images/main-recipes/hearty-breakfast-casserole.jpg'
import ItalianCasseroleWithShells from '../images/main-recipes/italian-casserole-with-shells.jpg'
import JosChickenSalad from '../images/main-recipes/jo\'s-chicken-salad.jpg'
import JodisAdoringBreakfastCasserole from '../images/main-recipes/jodi\'s-adoring-breakfast-casserole.jpg'
import LauriesSpaghettiCasserole from '../images/main-recipes/laurie\'s-spaghetti-casserole.jpg'
import LisasWhiteChili from '../images/main-recipes/lisa\'s-white-chili.jpg'
import MikesRoast from '../images/main-recipes/mike\'s-roast.jpg'
import ParmesanChickenCutlets from '../images/main-recipes/parmesan-chicken-cutlets.jpg'
import PhillyCheeseSteakSloppyJoes from '../images/main-recipes/philly-cheese-steak-sloppy-joes.jpg'
import PotRoast from '../images/main-recipes/pot-roast.jpg'
import SimpleSlowCookerCreamyChickenChili from '../images/main-recipes/simple-slow-cooker-creamy-chicken-chili.jpg'
import SimplyLasagna from '../images/main-recipes/simply-lasagna.jpg'
import SlowCookerCreamyWhiteChickenChili from '../images/main-recipes/slow-cooker-creamy-white-chicken-chili.jpg'
import SlowCookerZuppaToscana from '../images/main-recipes/slow-cooker-zuppa-toscana.jpg'
import WhiteChickenEnchiladas from '../images/main-recipes/white-chicken-enchiladas.jpg'
// Side Recipes
import WhiteChickenEnchiladas from '../images/side-recipes/white-chicken-enchiladas.jpg'
// Dessert Recipes

export default function RecipeModal({ clickedRecipe, setClickedRecipe }) {
    const whichImage = () => {
        switch(clickedRecipe) {
            case "Baked Potato Soup":
                return <img alt="Baked Potato Soup recipe" className="modal-img" src={BakedPotatoSoup}></img>;
            case "Berry Good French Toast":
                return <img alt="Berry Good French Toast recipe" className="modal-img" src={BerryGoodFrenchToast}></img>;
            case "Breading for Chicken":
                return <img alt="Breading for Chicken recipe" className="modal-img" src={BreadingForChicken}></img>;
            case "Breakfast Casserole":
                return <img alt="Breakfast Casserole recipe" className="modal-img" src={BreakfastCasserole}></img>;
            case "Chicken and Rice":
                return <img alt="Chicken and Rice recipe" className="modal-img" src={ChickenAndRice}></img>;
            case "Chicken Tortilla Soup":
                return <img alt="Chicken Tortilla Soup recipe" className="modal-img" src={ChickenTortillaSoup}></img>;
            case "Company Casserole":
                return <img alt="Company Casserole recipe" className="modal-img" src={CompanyCasserole}></img>;
            case "Cris' Sloppy Joes":
                return <img alt="Cris' Sloppy Joes recipe" className="modal-img" src={CrisSloppyJoes}></img>;
            case "Crockpot Breakfast Casserole":
                return <img alt="Crockpot Breakfast Casserole recipe" className="modal-img" src={CrockpotBreakfastCasserole}></img>;
            case "Dump and Bake Chicken Parmesan":
                return <img alt="Dump and Bake Chicken Parmesan recipe" className="modal-img" src={DumpAndBakeChickenParmesan}></img>;
            case "Gram's Meatloaf":
                return <img alt="Gram's Meatloaf recipe" className="modal-img" src={GramsMeatloaf}></img>;
            case "Grandma Funk's Perfect Waffles":
                return <img alt="Grandma Funk's Perfect Waffles recipe" className="modal-img" src={GrandmaFunksPerfectWaffles}></img>;
            case "Grilled Cheese - Oven":
                return <img alt="Grilled Cheese Oven recipe" className="modal-img" src={GrilledCheeseOven}></img>;
            case "Hashbrown Casserole":
                return <img alt="Hashbrown Casserole recipe" className="modal-img" src={HashbrownCasserole}></img>;
            case "Hearty Breakfast Casserole":
                return <img alt="Hearty Breakfast Casserole recipe" className="modal-img" src={HeartyBreakfastCasserole}></img>;
            case "Italian Casserole with Shells":
                return <img alt="Italian Casserole with Shells recipe" className="modal-img" src={ItalianCasseroleWithShells}></img>;
            case "Jo's Chicken Salad":
                return <img alt="Jo's Chicken Salad recipe" className="modal-img" src={JosChickenSalad}></img>;
            case "Jodi's Adoring Breakfast Casserole":
                return <img alt="Jodi's Adoring Breakfast Casserole recipe" className="modal-img" src={JodisAdoringBreakfastCasserole}></img>;
            case "Laurie's Spaghetti Casserole":
                return <img alt="Laurie's Spaghetti Casserole recipe" className="modal-img" src={LauriesSpaghettiCasserole}></img>;
            case "Lisa's White Chili":
                return <img alt="Lisa's White Chili recipe" className="modal-img" src={LisasWhiteChili}></img>;
            case "Mike's Roast":
                return <img alt="Mike's Roast recipe" className="modal-img" src={MikesRoast}></img>;
            case "Parmesan Chicken Cutlets":
                return <img alt="Parmesan Chicken Cutlets recipe" className="modal-img" src={ParmesanChickenCutlets}></img>;
            case "Philly Cheese Steak Sloppy Joes":
                return <img alt="Philly Cheese Steak Sloppy Joes recipe" className="modal-img" src={PhillyCheeseSteakSloppyJoes}></img>;
            case "Pot Roast":
                return <img alt="Pot Roast recipe" className="modal-img" src={PotRoast}></img>;
            case "Simple Slow Cooker Creamy Chicken Chili":
                return <img alt="Simple Slow Cooker Creamy Chicken Chili recipe" className="modal-img" src={SimpleSlowCookerCreamyChickenChili}></img>;
            case "Simply Lasagna":
                return <img alt="Simply Lasagna recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "Slow Cooker Creamy White Chicken Chili":
                return <img alt="Slow Cooker Creamy White Chicken Chili recipe" className="modal-img" src={SlowCookerCreamyWhiteChickenChili}></img>;
            case "Slow Cooker Zuppa Toscana":
                return <img alt="Slow Cooker Zuppa Toscana recipe" className="modal-img" src={SlowCookerZuppaToscana}></img>;
            case "White Chicken Enchiladas":
                return <img alt="White Chicken Enchiladas recipe" className="modal-img" src={WhiteChickenEnchiladas}></img>;
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