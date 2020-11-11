import React from 'react';
import '../stylesheets/RecipeModal.css';
import BakedPotatoSoup from '../images/baked-potato-soup.jpg'
import BerryGoodFrenchToast from '../images/berry-good-french-toast.jpg'
import BreadingForChicken from '../images/breading-for-chicken.jpg'
import BreakfastCasserole from '../images/breakfast-casserole.jpg'
import ChickenAndRice from '../images/chicken-and-rice-recipe.jpg'
import ChickenTortillaSoup from '../images/chicken-tortilla-soup.jpg'
import CompanyCasserole from '../images/company-casserole-combined.png'
import CrisSloppyJoes from '../images/cris-sloppy-joes.jpg'
import CrockpotBreakfastCasserole from '../images/crockpot-breakfast-casserole.png'
import DumpAndBakeChickenParmesan from '../images/dump-and-bake-chicken-parmesan.jpg'
import GramsMeatloaf from '../images/gram\'s-meatloaf.jpg'
import GrandmaFunksPerfectWaffles from '../images/grandma-funk\'s-perfect-waffles.jpg'
import GrilledCheeseOven from '../images/grilled-cheese-oven.jpg'
import HashbrownCasserole from '../images/hashbrown-casserole.jpg'
import HeartyBreakfastCasserole from '../images/hearty-breakfast-casserole.jpg'
import ItalianCasseroleWithShells from '../images/italian-casserole-with-shells.jpg'
import JosChickenSalad from '../images/jo\'s-chicken-salad.jpg'
import JodisAdoringBreakfastCasserole from '../images/jodi\'s-adoring-breakfast-casserole.jpg'
import LauriesSpaghettiCasserole from '../images/laurie\'s-spaghetti-casserole.jpg'
import LisasWhiteChili from '../images/lisa\'s-white-chili.jpg'
import MikesRoast from '../images/mike\'s-roast.jpg'
import ParmesanChickenCutlets from '../images/parmesan-chicken-cutlets.jpg'
import PhillyCheeseSteakSloppyJoes from '../images/philly-cheese-steak-sloppy-joes.jpg'
import PotRoast from '../images/pot-roast.jpg'
import SimpleSlowCookerCreamyChickenChili from '../images/simple-slow-cooker-creamy-chicken-chili.jpg'
import SimplyLasagna from '../images/simply-lasagna.jpg'
import SlowCookerCreamyWhiteChickenChili from '../images/slow-cooker-creamy-white-chicken-chili.jpg'
import SlowCookerZuppaToscana from '../images/slow-cooker-zuppa-toscana.jpg'
import WhiteChickenEnchiladas from '../images/white-chicken-enchiladas.jpg'

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