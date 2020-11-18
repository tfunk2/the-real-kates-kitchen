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
import BroccoliCheeseRice from '../images/side-recipes/broccoli-cheese-rice.jpg'
import CharlottesWildfireChiliCheeseDip from '../images/side-recipes/charlotte\'s-wildfire-chili-cheese-dip.jpg'
import CheddarAndRoastedGarlicBiscuits from '../images/side-recipes/cheddar-and-roasted-garlic-biscuits.jpg'
import GeneralRoastingTimesForVegetables from '../images/side-recipes/general-roasting-times-for-vegetables.jpg'
import Guacamole from '../images/side-recipes/guacamole.jpg'
import JoysCornDip from '../images/side-recipes/joy\'s-corn-dip.jpg'
import KahluaDip from '../images/side-recipes/kahlua-dip.jpg'
import NoBakeEnergyBites from '../images/side-recipes/no-bake-energy-bites.jpg'
import ParmesanCrustedAsparagus from '../images/side-recipes/parmesan-crusted-asparagus.jpg'
import PicnicPotatoes from '../images/side-recipes/picnic-potatoes.jpg'
import PretzelCrack from '../images/side-recipes/pretzel-crack.jpg'
import PumpkinPieChexMix from '../images/side-recipes/pumpkin-pie-chex-mix-amy-o\'guin\'s.jpg'
import RachelsHummus from '../images/side-recipes/rachel\'s-hummus.jpg'
import RoastedBrusselsSprouts from '../images/side-recipes/roasted-brussels-sprouts.jpg'
import RoastedCornOnTheCob from '../images/side-recipes/roasted-corn-on-the-cob.jpg'
import SaltedCaramelPopcorn from '../images/side-recipes/salted-caramel-popcorn.jpg'
import SmotheredGreenBeans from '../images/side-recipes/smothered-green-beans.jpg'
import SnackCrackerMix from '../images/side-recipes/snack-cracker-mix.jpg'
import SnackCrackers from '../images/side-recipes/snack-crackers.jpg'
import SugarCoatedPecans from '../images/side-recipes/sugar-coated-pecans.jpg'
import TheBestRoastedVegetablesEver from '../images/side-recipes/the-best-roasted-vegetables-ever.jpg'
import TinasOrientalColeSlaw from '../images/side-recipes/tina\'s-oriental-cole-slaw.jpg'
import WhitePartyMix from '../images/side-recipes/white-party-mix.jpg'
// Dessert Recipes

import AmishFriendshipBread from '../images/dessert-recipes/amish-friendship-bread.jpg'
import AwardWinningGingerbreadCookies from '../images/dessert-recipes/award-winning-gingerbread-cookies.jpg'
import BananaOrangeSoftees from '../images/dessert-recipes/banana-orange-softees.jpg'
import BananaSquares from '../images/dessert-recipes/banana-squares.png'
import ButtercreamFrosting from '../images/dessert-recipes/buttercream-frosting.jpg'
import CaramelCornPuffTreats from '../images/dessert-recipes/caramel-corn-puff-treats.jpg'
import CherryCoffeeCake from '../images/dessert-recipes/cherry-coffee-cake.jpg'
import ChocolateChipCookies from '../images/dessert-recipes/chocolate-chip-cookies.jpg'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
import GramsApplePieFilling from '../images/dessert-recipes/gram\'s-apple-pie-filling.jpg'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'
// import  from '../images/dessert-recipes/'


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
            case "Broccoli Cheese Rice":
                return <img alt="Broccoli Cheese Rice recipe" className="modal-img" src={BroccoliCheeseRice}></img>;
            case "Charlotte's Wildfire Chili Cheese Dip":
                return <img alt="Charlotte's Wildfire Chili Cheese Dip recipe" className="modal-img" src={CharlottesWildfireChiliCheeseDip}></img>;
            case "Cheddar and Roasted Garlic Biscuits":
                return <img alt="Cheddar and Roasted Garlic Biscuits recipe" className="modal-img" src={CheddarAndRoastedGarlicBiscuits}></img>;
            case "General Roasting Times for Vegetables":
                return <img alt="General Roasting Times for Vegetables recipe" className="modal-img" src={GeneralRoastingTimesForVegetables}></img>;
            case "Guacamole":
                return <img alt="Guacamole recipe" className="modal-img" src={Guacamole}></img>;
            case "Joy's Corn Dip":
                return <img alt="Joy's Corn Dip recipe" className="modal-img" src={JoysCornDip}></img>;
            case "Kahlua Dip":
                return <img alt="Kahlua Dip recipe" className="modal-img" src={KahluaDip}></img>;
            case "No Bake Energy Bites":
                return <img alt="No Bake Energy Bites recipe" className="modal-img" src={NoBakeEnergyBites}></img>;
            case "Parmesan Crusted Asparagus":
                return <img alt="Parmesan Crusted Asparagus recipe" className="modal-img" src={ParmesanCrustedAsparagus}></img>;
            case "Laura's Picnic Potatoes":
                return <img alt="Picnic Potatoes recipe" className="modal-img" src={PicnicPotatoes}></img>;
            case "Pretzel Crack":
                return <img alt="Pretzel Crack recipe" className="modal-img" src={PretzelCrack}></img>;
            case "Pumpkin Pie Chex Mix (Amy O'Guin's)":
                return <img alt="Pumpkin Pie Chex Mix (Amy O'Guin's) recipe" className="modal-img" src={PumpkinPieChexMix}></img>;
            case "Rachel's Hummus":
                return <img alt="Rachel's Hummus recipe" className="modal-img" src={RachelsHummus}></img>;
            case "Roasted Brussels Sprouts":
                return <img alt="Roasted Brussels Sprouts recipe" className="modal-img" src={RoastedBrusselsSprouts}></img>;
            case "Roasted Corn on the Cob":
                return <img alt="Roasted Corn on the Cob recipe" className="modal-img" src={RoastedCornOnTheCob}></img>;
            case "Salted Caramel Popcorn":
                return <img alt="Salted Caramel Popcorn recipe" className="modal-img" src={SaltedCaramelPopcorn}></img>;
            case "Smothered Green Beans":
                return <img alt="Smothered Green Beans recipe" className="modal-img" src={SmotheredGreenBeans}></img>;
            case "Snack Cracker Mix":
                return <img alt="Snack Cracker Mix recipe" className="modal-img" src={SnackCrackerMix}></img>;
            case "Snack Crackers":
                return <img alt="Snack Crackers recipe" className="modal-img" src={SnackCrackers}></img>;
            case "Sugar Coated Pecans":
                return <img alt="Sugar Coated Pecans recipe" className="modal-img" src={SugarCoatedPecans}></img>;
            case "The Best Roasted Vegetables Ever":
                return <img alt="The Best Roasted Vegetables Ever recipe" className="modal-img" src={TheBestRoastedVegetablesEver}></img>;
            case "Tina's Oriental Cole Slaw":
                return <img alt="Tina's Oriental Cole Slaw recipe" className="modal-img" src={TinasOrientalColeSlaw}></img>;
            case "White Party Mix":
                return <img alt="White Party Mix recipe" className="modal-img" src={WhitePartyMix}></img>;
            case "Amish Friendship Bread":
                return <img alt="Amish Friendship Bread recipe" className="modal-img" src={AmishFriendshipBread}></img>;
            case "Award Winning Gingerbread Cookies":
                return <img alt="Award Winning Gingerbread Cookies recipe" className="modal-img" src={AwardWinningGingerbreadCookies}></img>;
            case "Banana Orange Softees":
                return <img alt="Banana Orange Softees recipe" className="modal-img" src={BananaOrangeSoftees}></img>;
            case "Banana Squares":
                return <img alt="Banana Squares recipe" className="modal-img" src={BananaSquares}></img>;
            case "Buttercream Frosting":
                return <img alt="Buttercream Frosting recipe" className="modal-img" src={ButtercreamFrosting}></img>;
            case "Caramel Corn Puff Treats":
                return <img alt="Caramel Corn Puff Treats recipe" className="modal-img" src={CaramelCornPuffTreats}></img>;
            case "Cherry Coffee Cake":
                return <img alt="Cherry Coffee Cake recipe" className="modal-img" src={CherryCoffeeCake}></img>;
            case "Chocolate Chip Cookies":
                return <img alt="Chocolate Chip Cookies recipe" className="modal-img" src={ChocolateChipCookies}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "Gram's Apple Pie Filling":
                return <img alt="Gram's Apple Pie Filling recipe" className="modal-img" src={GramsApplePieFilling}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
            case "":
                return <img alt=" recipe" className="modal-img" src={SimplyLasagna}></img>;
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