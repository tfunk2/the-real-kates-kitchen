import React, { useState, useEffect } from 'react';
import fakeImage from '../images/blue-terrazzo-seamless.jpg'
import Recipe from '../components/Recipe.js'
import SingleCherry from '../images/single-cherry.png'
// import '../stylesheets/SideDishes.css';

export default function Desserts({ query, setClickedRecipe}) {
    const recipes = [
        {
            name: "Amish Friendship Bread",
            ingredients: [
                "(Ingredients included in instructions, do not use anything metal, do not refrigerate)",
            ],
            instructions: [
                "Day 1 - Do nothing (bag should be dated)",
                "Day 2 - mash the bag (squeeze several times)",
                "Day 3 - Mash the bag",
                "Day 4 - Mash the bag",
                "Day 5 - Mash the bag",
                "Day 6 - Add to the bag: 1 cup flour, 1 cup sugar, 1 cup milk. Mash the bag.",
                "Day 7 - Mash the bag",
                "Day 8 - Mash the bag",
                "Day 9 - Mash the bag",
                "Day 10 - Do the following:",
                "1. Pour entire contents of bag into a non-metal bowl, add 1½ cups flour. 1½ cups sugar and 1½ cups milk. Mix with non-metal spoon.",
                "2. Measure out 4 separate batters of 1 cup each into 4 Ziploc 1-gallon bags. Give a bag along with this recipe to 3 friends and keep one bag for yourself. (Note: If you keep a starter you'll be baking bread every 10 days.) Only the Amish know how to create a starter, so if you give them all away, you'll have to wait until someone gives you a starter back. Be certain to tell your friends which day the batter is on when you give it to them.",
                "3. To the remanining batter in the bowl, add: 3 eggs, 1 cup canola oil, 1 cup sugar, ½ cup milk, 1 tsp. cinnamon, 1½ tsp. baking powder, 1½ tsp. baking soda, ½ tsp. salt, 1 tsp. vanilla, 2 cups flour, 1 large box (or 2 small boxes) instant vanilla pudding",
                "In a separate bowl, mix 1 tsp. cinnamon and 2 Tbsp. sugar. Sprinkle ½ of it into the bottoms of 2 well-greased bread pans. Pour the batter in equal amounts into the pans then sprinkle with remaining sugar mixture.",
                "Bake at 325 degrees for about 1 hour or until toothpick comes out clean.",
            ],
            image: fakeImage
        },
        {
            name: "Award Winning Gingerbread Cookies",
            ingredients: [
                "2¼ cups flour",
                "2 tsp. ground ginger",
                "1 tsp. baking soda",
                "1 tsp. cinnamon",
                "½ ground cloves",
                "¼ tsp. salt",
                "¾ cup butter, softened",
                "1 cup white sugar",
                "1 egg",
                "1 Tbsp. orange juice",
                "¼ cup molasses",
                "¼ cup sugar",
            ],
            instructions: [
                "Sift together the dry ingredients (flour, ginger, baking soda, cinnamon, cloves and salt)",
                "Cream the butter and 1 cup sugar",
                "Add the egg and beat until fully incorporated",
                "Add the orange juice and molasses (I use light molasses) until combined",
                "Add in the dry ingredients in small batches until just combined",
                "Refrigerate for 2-3 hours, if you can't at least put it in the freezer for half an hour",
                "Preheat the oven to 350 degrees",
                "In about 2 Tbsp. balls, roll into the ¼ cup sugar and flatten so it looks like the thickness of a double stuff Oreo, really thick but clearly flattened",
                "Bake for 9-11 minutes",
                "(Note: Dip half in melted white chocolate and sprinkle with decorations)",
            ],
            image: fakeImage
        },
        {
            name: "Banana Orange Softees",
            ingredients: [
                "½ cup sugar",
                "1 tsp. cinnamon",
                "1 cup brown sugar",
                "1⅔ cup mashed bananas",
                "¾ cup margarine",
                "½ cup orange juice",
                "2 eggs",
                "1 tsp. grated orange peels",
                "2 cups quick oats",
                "2 cups flour",
                "¾ tsp. baking soda",
                "½ tsp. salt",
                "½ tsp. nutmeg",
                "¾ cups raisins",
                "2 tsp. vanilla",
                "Use orange icing",
            ],
            instructions: [
                "(Refer to original recipe image for interpretation)",
            ],
            image: fakeImage
        },
        {
            name: "Banana Squares",
            ingredients: [
                "2 eggs, separated",
                "⅔ cup shortening",
                "1½ cup sugar",
                "1 cup mashed ripe bananas (2-3 medium)",
                "1½ cup all-purpose flour",
                "1 tsp. baking soda",
                "¼ cup sour milk (to sour milk add 1 tsp. white vinegar to measuring cup - then add milk)",
                "½ tsp. vanilla",
                "½ cup chopped walnuts (optional)",
                "(Optional garnish: Whipped cream and sliced bananas)"
            ],
            instructions: [
                "Beat eggs whites until soft peaks form, set aside.",
                "Cream shortening and sugar",
                "Beat in egg yolks; mix well.",
                "Add bananas",
                "Combine flour and baking soda, add to creamed mix, alternate with milk beating well after each addition.",
                "Add vanilla.",
                "Fold in egg whites and nuts if desired",
                "Use 13x9x2 pan, bake 45-50 minutes (temp?)",
                "Let cool"
            ],
            image: fakeImage
        },
        {
            name: "Buttercream Frosting",
            ingredients: [
                "1 stick real butter",
                "2½ cup powdered sugar",
                "1 or 2 Tbsp. milk",
                "1 tsp. mint extract (optional)",
                "For 2 batches: 2 sticks (1 cup) real butter, 5 cups powdered sugar, 2-4 Tbsp. milk"
            ],
            instructions: [
                "Cut butter into powdered sugar.",
                "Add 1 Tbsp. of milk, beat with electric mixer at least five minutes adding milk one Tbsp. at a time if needed for desired consistency.",
            ],
            image: fakeImage
        },
        {
            name: "Caramel Corn Puff Treats",
            ingredients: [
                "1 cup brown sugar",
                "1 stick butter (or equivalent...I've used margarine)",
                "¼ tsp. baking soda",
                "¼ cup light karo syrup",
                "1 bag buttered corn puffs",
                "(For 3 batches: 3 cups brown sugar, 1½ cups margarine, ¾ tsp. baking soda, ¾ cup karo light syrup, 3 bags buttered corn puffs)"
            ],
            instructions: [
                "In a small bowl microwave the mixture for 2 minutes. Stir. Microwave one more minute.",
                "In a paper bag, dump the popcorn in, then the mixture. Roll top of bag and shake. Put the bag in the microwave for 1 minute. Take out and shake. Do this two more times (should be three 1 minute rounds). Put in a large bowl until cool or eat warm!",
                "This literally takes ten minutes to make. I have never doubled it because one paper bag takes up my whole microwave. I have made batch after batch and used the same bowl though and it works out just fine!",
            ],
            image: fakeImage
        },
        {
            name: "Cherry Coffee Cake",
            ingredients: [
                "1 package yellow cake mix",
                "½ cup butter, softened",
                "⅔ cup milk",
                "2 eggs",
                "1 can cherry pie filling",
                "(Optional: powdered sugar glaze)",
                "(Variations: lemon cake mix with blueberry pie filling, chocolate cake mix with cherry pie filling)"
            ],
            instructions: [
                "Combine cake with butter until crumbly, reserve ½ cup.",
                "Add eggs and milk to cake mixture, beat 2 minutes",
                "Pour into greased and floured 9x13 pan",
                "Arrange pie filling, add reserved crumbly cake and butter mixture",
                "Bake at 350° 35-45 minutes",
                "Frost with powdered sugar glaze",
                "(Check original recipe for Susan Borer's personal touches!)",
            ],
            image: fakeImage
        },
        {
            name: "Chocolate Chip Cookies",
            ingredients: [
                "1 stick margarine",
                "½ stick Crisco",
                "¾ cup sugar",
                "¾ cup brown sugar",
                "2 eggs",
                "1 tsp. vanilla",
                "2¼ cup flour",
                "½ tsp. salt",
                "½ tsp. baking soda",
            ],
            instructions: [
                "No instructions provided",
            ],
            image: fakeImage
        },
        {
            name: "Chocolate Malted Cookies",
            ingredients: [
                "",
            ],
            instructions: [
                "",
            ],
            image: fakeImage
        },
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
        {
            name: "Gram's Apple Pie Filling",
            ingredients: [
                "Approx. 4 apples, sliced and peeled",
                "¼ cup sugar",
                "1 Tbsp. flour",
                "¼ tsp. cinnamon",
                "¼ tsp. nutmeg",
                "butter"
            ],
            instructions: [
                "Mix together sugar, flour, cinnamon, and nutmeg",
                "Sprinkle mixture over apple slices in unbaked pie shell",
                "Dot butter on top",
                "Bake at 425° for about 25 minutes",
            ],
            image: fakeImage
        },
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