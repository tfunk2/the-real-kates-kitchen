import React, { useState, useEffect } from 'react';
import fakeImage from '../images/blue-terrazzo-seamless.jpg'
import Recipe from '../components/Recipe.js'
import SingleCherry from '../images/single-cherry.png'
// import '../stylesheets/SideDishes.css';

export default function SideDishes({ query, setClickedRecipe}) {
    const recipes = [
        {
            name: "Broccoli Cheese Rice",
            ingredients: [
                "2 cups minute rice",
                "2 cups hot water",
                "Big bag or 2 boxes (Best Choice) chopped frozen broccoli",
                "Large cheese whiz",
                "2 cans cream of chicken"
            ],
            instructions: [
                "(Check original recipe to be sure)",
                "Cook rice, set aside",
                "Cook broccoli as directed on box",
                "Put broccoli, cheese whiz, cream of chicken cans, and rice in big pan",
                "Bake 30-45 minutes",
            ],
            image: fakeImage
        },
        {
            name: "Charlotte's Wildfire Chili Cheese Dip",
            ingredients: [
                "1 cup mayo",
                "1 3oz package grated parmesan cheese",
                "2 4½oz cans chopped green chilies, drained",
                "2 11oz cans Mexicorn, drained",
                "1 4oz  jar chopped pimiento, drained",
                "1 12 oz package shredded monterey jack"
            ],
            instructions: [
                "Mix all ingredients and put in a greased 2 quart casserole dish",
                "Bake 350 degrees for 30-40 minutes until hot and bubbly",
                "Serve with large corn chips",
            ],
            image: fakeImage
        },
        {
            name: "Cheddar and Roasted Garlic Biscuits",
            ingredients: [
                "5 cups baking or buttermilk biscuit mix",
                "1 cup shredded cheddar cheese",
                "1 can (14.5 oz) seasoned chicken broth with roasted garlic"
            ],
            instructions: [
                "Mix all ingredients together",
                "Drop by spoonufls onto ungreased baking sheets",
                "Bake at 375 for 10-12 minutes"
            ],
            image: fakeImage
        },
        {
            name: "Easy Fried Rice",
            ingredients: [
                "Cooking spray",
                "2 Large eggs, lightly beaten",
                "1 cup uncooked carrots, sliced, divided",
                "1 cup uncooked scallions, sliced, divided",
                "3 cups cooked white rice",
                "½ cup frozen green peas, thawed",
                "¼ cup low sodium soy sauce (or to taste)",
            ],
            instructions: [
                "Coat a large nonstick skillet with cooking spray, warm pan over medium-high heat. Add eggs; tilt pan so that eggs cover bottom.",
                "When eggs start to set, break them up into pieces with a heat-proof spatula or wooden spoon. Cook until eggs are cooked through, about 1 minute more; remove eggs from skillet and set aside.",
                "Off heat, recoat same skiller with cooking spray; set over medium-high heat. Add carrots and all but 2 tablespoons scallions; saute until carrots are crisp-tender, about 2 to 3 minutes.",
                "Stir in cooked rice, peas and soy sauce; cook until heated through, stirring once or twice, about 1 minute. Gently stir in cooked egg and remaining scallions; heat through. Yields about ¾ cup per serving."
            ],
            image: fakeImage
        },
        {
            name: "General Roasting Times for Vegetables",
            ingredients: [
                "(Cooking times are for roasting vegetables at 425° F)",
                "Root vegetables (beets, potatoes, carrots): 30 to 45 minutes, depending on how small you cut them",
                "Winter squash (butternut squash, acorn squash): 20 to 60 minutes, depending on how small you cut them",
                "Crucifers (broccoli, cauliflower, Brussels sprouts): 15 to 25 minutes",
                "Soft vegetables (zucchini, summer squash, bell peppers): 10 to 20 minutes",
                "Thin vegetables (asparagus, green beans): 10 to 20 minutes",
                "Onions: 30 to 45 minutes, depending on how crispy you like them",
                "Tomatoes: 15 to 20 minutes"
            ],
            instructions: [
                "(3 Ways to Roast Mixed Vegetables)",
                "1. Roast vegetables individually: First, and easiest, you can roast the individual vegetables on separate trays and combine them after roasting. This lets you monitor how quickly each vegetable is cooking and pull each vegetable from the oven as it's done.",
                "2. Pair \"vegetable friends\": Second, you can pair together \"vegetable friends\"--ones that roast at roughly the same rate. For instance, you could roast cauliflower and broccoli together, or butternut squash with potatoes. Combine these on the same baking sheet and roast them together. If the baking sheet is getting crowded, split them between two sheets.",
                "3. Roast in stages: Third, you can add different vegetables to the baking sheet in stages--start roasting the hardest, longest-cooking vegetables first, and then add softer, quicker-cooking vegetables later on. If the baking sheet starts to get full, split the vegetables between two pans so you don't crowd them. Aim to have all the vegetables finish roasting around the same time, and remember: A little extra roasting time is unlikely to hurt."
            ],
            image: fakeImage
        },
        {
            name: "Guacamole",
            ingredients: [
                "3-4 avocados",
                "1 can Ro-tel, drained",
                "2 Tbsp. finely chopped onion",
                "1/2 tsp. salt (or to taste)",
                "Garlic salt or powder to taste (2 shakes)"
            ],
            instructions: [
                "Yummy! - only instruction provided",
            ],
            image: fakeImage
        },
        {
            name: "Joy's Corn Dip",
            ingredients: [
                "8 oz cream cheese",
                "8 oz sour cream",
                "1 can Ro-tel, drained",
                "1 can corn, drained",
                "1 packet Fiesta Ranch Hidden Valley Mix"
            ],
            instructions: [
                "No instructions provided",
            ],
            image: fakeImage
        },
        {
            name: "Kahlua Dip",
            ingredients: [
                "8 oz package cream cheese, softened",
                "¾ cup brown sugar",
                "1 cup whipped topping (Cool Whip)",
                "1 cup sour cream",
                "⅓ cup Kahlua",
                "⅓ cup chopped pecans"
            ],
            instructions: [
                "In a medium bowl combine cream cheese, brown sugar, and topping.",
                " Stir in sour cream, Kahlua and nuts.",
                "Cover and Chill 1-2 days.",
                "Serve as a dip for fruit"
            ],
            image: fakeImage
        },
        {
            name: "No Bake Energy Bites",
            ingredients: [
                "1 cup (dry) oatmeal (I used old-fashioned oats)",
                "⅔ cup toasted coconut flakes",
                "½ cup peanut butter",
                "½ cup ground flax seed",
                "½ cup chocolate chips or cacao nibs (optional)",
                "⅓ cup honey or agave nectar",
                "1 Tbsp. chia seeds",
                "1 tsp. vanilla extract"
            ],
            instructions: [
                "Stir all ingredients together in a medium bowl until thoroughly mixed. Cover and let chill in the refrigerator for half an hour",
                "Once chilled, roll into balls of whatever size you would like. (Mine were about 1\" in diameter.) Store in an airtight container and keep refrigerated for up to 1 week.",
                "Makes about 20-25 balls"
            ],
            image: fakeImage
        },
        {
            name: "Parmesan Crusted Asparagus",
            ingredients: [
                "Asparagus",
                "Olive oil",
                "Sea salt",
                "Parmesan"
            ],
            instructions: [
                "Preheat to 425°",
                "Snap ends off asparagus",
                "Rinse off",
                "Place on foiled pan",
                "Drizzle with olive oil, toss a little",
                "Sprinkle with sea salt",
                "Bake 5 minutes",
                "Take out and sprinkle with parmesan",
                "Bake just until melted"
            ],
            image: fakeImage
        },
        {
            name: "Laura's Picnic Potatoes",
            ingredients: [
                "2 lbs frozen potatoes O'Brien",
                "1 can corn chicken soup",
                "12 oz sour cream",
                "¼ cup melted butter",
                "½ cup milk",
                "1 tsp. salt",
                "¼ tsp. pepper",
                "1 Tbsp. dried minced onion",
                "2 cups shredded cheddar"
            ],
            instructions: [
                "In a large bowl mix all ingredients except cheese and potatoes",
                "Add these last - first cheese, finally potatoes",
                "Place in 9x13 pan - uncovered",
                "Bake at 350 for 1 hour 15 minutes",
                "Can do in crockpot - is a little soupy but good"
            ],
            image: fakeImage
        },
        {
            name: "Pretzel Crack",
            ingredients: [
                "1 lb small pretzels",
                "1 c. vegetable oil",
                "1 Tbsp. garlic salt",
                "1 Tbsp. dill weed",
                "1 Tbsp. onion powder",
            ],
            instructions: [
                "No instructions provided",
            ],
            image: fakeImage
        },
        {
            name: "Pumpkin Pie Chex Mix (Amy O'Guin's)",
            ingredients: [
                "½ cup butter (do NOT use margarine)",
                "½ cup brown sugar",
                "4 Tbsp. pumpkin pie spice",
                "2 cups Cinnamon Toast Crunch (Walmart brand is fined)",
                "2 cups Wheat Chex cereal (Walmart brand is fined)",
                "2 cups Corn Chex cereal (Walmart brand is fined)",
                "2 cups Honey Nut Cheerios (Walmart brand is fined)",
                "1 (26 oz bag) Tropical Trail Mix (from Walmart)",
            ],
            instructions: [
                "Mix cereal and trail mix together in a very large roasting pan.",
                "Melt butter, add brown sugar and pumpkin pie spice.",
                "Stir until dissolved.",
                "Pour butter mixture over cereal mixture.",
                "Toss gently until evenly coated.",
                "Bake at 300 degrees for about 20 minutes. stirring every 5 minutes.",
                "Spread out on wax paper to cool",
            ],
            image: fakeImage
        },
        {
            name: "Rachel's Hummus",
            ingredients: [
                "2 cans garbanzo beans drained",
                "¼ to ½ cup tahini paste",
                "Juice of 1-2 lemons (small to medium size)",
                "3-4 cloves of garlic",
                "Salt and pepper to taste",
            ],
            instructions: [
                "Place all ingredients in food processor or blender. Mix/chop until a smooth paste",
                "Serve with toasted pita bread, veggies, feta cheese",
                "Drizzle olive oil on top as an appetizer",
                "If you feel like hummus is too thick add 1-2 Tbsp. of water and stir",
            ],
            image: fakeImage
        },
        {
            name: "Roasted Brussels Sprouts",
            ingredients: [
                "1½ lbs Brussels sprouts, ends trimmed and yellow leaves removed",
                "3 Tbsp. olive oil",
                "1 Tsp. kosher salt",
                "½ tsp. freshly ground pepper",
            ],
            instructions: [
                "Preheat oven to 400 degrees F (205 degrees C)",
                "Place trimmed Brussels sprouts, olive oil, kosher salt, and pepper in a large resealable bag. Seal tightly, and shake to coat. Pour onto a baking sheet, and place on center oven rack.",
                "Roast in the preheated oven for 30 to 45 minutes, shaking pan every 5 to 7 minutes for even browning. Reduce heat when necessary to prevent burning. Brussels sprouts should be darkest brown, almost black, when done. Adjust seasoning with kosher salt, if necessary. Serve immediately.",
                "Suggestions: Cut in half. Make sure \"choke\" is removed - to avoid bitterness. Add garlic. Parboil 2 minutes - cuts down roasting time. Try 375 degrees."
            ],
            image: fakeImage
        },
        {
            name: "Roasted Corn on the Cob",
            ingredients: [
                "Corn",
                "Butter",
                "Seasoning"
            ],
            instructions: [
                "Remove husks, butter and season, wrap in foil.",
                "Place on cookie sheet.",
                "450 degrees for 30 minutes.",
            ],
            image: fakeImage
        },
        {
            name: "Salted Caramel Popcorn",
            ingredients: [
                "½ cup popcorn kernels",
                "⅓ cup corn syrup",
                "1 cup light brown sugar",
                "1 cup butter",
                "1½ tsp. sea salt",
            ],
            instructions: [
                "Pop corn.",
                "Bring corn syrup, brown sugar and salt to a boil for 4 minutes (Don't stir).",
                "Pour over popcorn, stir to coat, spread onto lined baking pan, sprinkle with salt.",
                "Bake at 300 degrees for 30 minutes - stir every 10 minutes.",
                "Optional: Add 2 cups pecans - makes approximately 16 cups popped.",
            ],
            image: fakeImage
        },
        {
            name: "Smothered Green Beans",
            ingredients: [
                "6 thick slices of bacon, chopped",
                "½ cup onions minced",
                "1 tsp. minced garlic",
                "1 lb green beans, drained",
                "1 cup water/beef broth (use less broth)",
                "⅛ tsp. salt",
                "1 pinch black pepper",
            ],
            instructions: [
                "Cook bacon until fat renders, add onion and garlic - cook 1 minute",
                "Stir in beans/broth, cook until heated through",
                "Season with salt and pepper",
            ],
            image: fakeImage
        },
        {
            name: "Snack Cracker Mix",
            ingredients: [
                "2 brown paper grocery sacks doubled up with 2 plastic grocery sacks on the outside to avoid leakage.",
                "3 cups vegetable oil",
                "3 packages dry Hidden Valley Ranch salad dressing",
                "2 packages dry Chex Party Mix seasoning",
                "1 tsp. cayenne pepper",
                "2 tsp. seasoning salt (Lowry's, Seasonall, etc.)",
                "2 tsp. cavendar spice",
                "2 tsp. garlic powder",
                "2 tsp. Mrs. Dash",
                "1 tsp. black pepper",
                "10-12 packages/boxes crackers of your choice. I use Chicken in a Biscuit, crunchy Cheetos family size bag, Bugles, mini Club Crackers (regular and wheat if they have them), Cheez-Its (regular and sharp white cheddar), flavored Wheat Thins (I do 2 boxes of sun dried tomatoes and basil, BBQ, and spicy buffalo wings), you can also use Fritos, Triscuits just whatever kind of crackers you like, even Melba toast chips",
            ],
            instructions: [
                "Dump crackers in sack",
                "Mix seasonings and oil thoroughly",
                "Drizzle on crackers and toss until all mixture is gone",
                "Shake every 15 minutes for 1 hour",
                "Once the hour of shaking is done, spread the mixture out on the counter to \"dry\" out a bit before storing.",
                "Put in plastic ice cream buckets or storage containers"
            ],
            image: fakeImage
        },
        {
            name: "Snack Crackers",
            ingredients: [
                "1 oz package ranch dressing mix",
                "1 tsp. garlic powder",
                "½ tsp. dried dill",
                "½ cup vegetable oi",
                "12 oz package oyster crackers"
            ],
            instructions: [
                "Mix together ranch dressing mix, garlic powder, dill and vegetable oil. ",
                "Add crackers and mix gently until the crackers are coated with the mixture.",
                "Stir every 10 minutes for 1 hour.",
                "Store in an airtight jar.",
            ],
            image: fakeImage
        },
        {
            name: "Sugar Coated Pecans",
            ingredients: [
                "1 egg white",
                "1 Tbsp. water",
                "1 lb pecan halves",
                "1 cup white sugar",
                "¾ tsp. salt",
                "½ tsp. ground cinnamon"
            ],
            instructions: [
                "Preheat oven to 250 degrees F (120 degrees C). Grease one baking sheet.",
                "In a mixing bowl, whip together the egg white and water until frothy. In a separate bowl, mix together sugar, salt, and cinnamon.",
                "Add pecans to eggs whites, stir to coat the nuts evenly. Remove the nuts, and toss them in the sugar mixture until coated. Spread the nuts out on the prepared baking sheet.",
                "Bake at 250 degrees F (120 degrees C) for 1 hour. Stir every 15 minutes.",
            ],
            image: fakeImage
        },
        {
            name: "The Best Roasted Vegetables Ever",
            ingredients: [
                "1 medium onion",
                "1 medium or 2 small carrots",
                "1 zucchini",
                "1 eggplant",
                "2 small potatoes",
                "5 small tomatoes",
                "1 red or yellow pepper",
                "2 cloves garlic",
                "Salt and pepper to taste",
                "Dried herbs (sage, thyme, rosemary, wild fennel are all good choices - either individually or combined in some form)",
                "4 to 5 Tbsp. of olive oil, plus more to taste",
            ],
            instructions: [
                "1. Preheat the oven to 375° F (180° C). Quarter and slice the onion thinly. Dice all the vegetables into pieces that are approximately the same size (no larger than ½ inch). Pile the vegetables into a baking dish so that the vegetables lie a few inches thick. Season with salt, pepper and herbs to taste and then pour the olive oil over the vegetables to make sure they are well-coated and glistening with oil. If need be, add more oil.",
                "2. Put the dish in the oven and cook for 45 minutes to an hour. Halfway through the cooking process, remove the dish from the oven and very gently stir the vegetables so that the ones at the bottom come to the top. Towards the end of the cooking process, stir a second time. Remove from the oven and let cool slightly. Check for seasoning and serve.",
            ],
            image: fakeImage
        },
        {
            name: "Tina's Oriental Cole Slaw",
            ingredients: [
                "1 bag of cole slaw mix or plain cabbage",
                "1 bunch of green onions, chopped",
                "1 cup of sliced almonds",
                "1 cup of sunflower seeds",
                "The original recipe calls for 2 packages of Beef Ramen noodles but I stopped using that because if there were leftovers, they were inedible because of the squishy noodles. You don't really miss them in the recipe and you can eat the leftovers without gagging."
            ],
            instructions: [
                "Mix cabbage and onions",
                "In a jar or bowl, mix ½ cup salad oil, ½ cup vinegar, ¾ cup cugar (and seasoning packet from Ramen if you decide to use it). Mix or shake until sigar is melted. Set aside.",
                "An hour or so before serving, add almonds and sunflower seeds, crushed up Ramen noodles if you use them, then add dressing and toss.",
            ],
            image: fakeImage
        },
        {
            name: "White Party Mix",
            ingredients: [
                "3 cups Rice Chex",
                "3 cups Corn Chex",
                "3 cups Frosted Cheerios",
                "1 package white chocolate",
                "2 cups pretzels",
                "2 cups dry roasted peanuts",
            ],
            instructions: [
                "No instructions provided",
            ],
            image: fakeImage
        }
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