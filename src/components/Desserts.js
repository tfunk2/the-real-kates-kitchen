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
                "(First Group)",
                "1 cup butter flavor Crisco",
                "1¼ cup packed brown sugar",
                "½ cup malted milk powder",
                "2 Tbsp. chocolate syrup",
                "1 Tbsp. vanilla",
                "(Second Group)",
                "2 cups flour",
                "1 tsp. baking soda",
                "½ tsp. salt",
                "(Other Items)",
                "1 egg",
                "1½ cup semi-sweet chocolate chunks",
                "1 cup milk chocolate chips",
            ],
            instructions: [
                "Combine first group and beat 2 minutes.",
                "Add egg",
                "Combine second group and add to creamed mixture gradually, mixing well after each addition.",
                "Stir in chocolate chips and chunks.",
                "Shape into 2 inch balls, place 3 inches apart on ungreased baking sheet.",
                "Bake at 375° for 12-14 minutes",
                "Cool 2 minutes before removing, makes about 1½ dozen",
            ],
            image: fakeImage
        },
        {
            name: "Chocolate Sheet Cake",
            ingredients: [
                "2 cups sugar",
                "2 cups flour",
                "1 stick oleo (margarine)",
                "4 Tbsp. cocoa",
                "1 cup water",
                "½ cup oil",
                "2 eggs, slightly beaten",
                "1 tsp. vanilla",
                "1 tsp. baking soda",
                "1 tsp. butter flavoring",
                "½ tsp. burned sugar flavoring",
            ],
            instructions: [
                "Melt the oleo (margarine), cocoa, water, and oil to a boil",
                "Pour over flour and sugar mixture - Add ½ cup buttermilk (or milk with tea and vinegar)",
                "Add eggs, vanilla, baking soda, butter flavoring and burned sugar flavoring",
                "Bake 350° on a thin greased pan for 30 minutes",
                "(Icing - Melt these: 1 stick butter, 4 Tbsp. cocoa, 6 Tbsp. milk. Then beat in 1 lb powdered sugar)",
            ],
            image: fakeImage
        },
        {
            name: "Coconut Pecan Cake",
            ingredients: [
                "1 box yellow cake mix",
                "4 eggs",
                "¾ cup oil",
                "1 cup water"
            ],
            instructions: [
                "Mix and add 1 can creamy deluxe coconut pecan frosting in can",
                "Bake 60 minutes at 350°"
            ],
            image: fakeImage
        },
        {
            name: "Crisp Sugar Cookies",
            ingredients: [
                "(Group 1)",
                "1½ cup sugar",
                "1 cup shortening (½ oleo)",
                "2 eggs",
                "(Group 2)",
                "3 Tbsp. sweet or sour cream",
                "1 tsp. vanilla",
                "½ tsp. lemon extract",
                "(Group 3)",
                "3 cups sifted all purpose flour",
                "½ tsp. baking soda",
                "½ tsp. salt",
            ],
            instructions: [
                "No instructions about groupings, but I'm assuming these are the things you mix together in groups before mixing together as a whole",
                "Bake at 400 degrees for 6-9 minutes",
            ],
            image: fakeImage
        },
        {
            name: "Crunchy Crispy Cookies",
            ingredients: [
                "1 cup white sugar",
                "1 cup brown sugar",
                "1 cup oil",
                "1 cup margarine or Crisco",
                "1 egg",
                "1 Tbsp. sour milk",
                "3½ cups flour",
                "1 tsp. salt",
                "1 tsp. soda",
                "1 tsp cream of tartar",
                "1 tsp. vanilla",
                "½ cup coconut",
                "1 cup corn flakes",
                "1 cup chopped nuts",
            ],
            instructions: [
                "Cream together white sugar, brown sugar, oil, margarine or Crisco, egg and sour milk",
                "Mix in flour, soda, cream of tartar, vanilla, coconut, corn flakes, chopped nuts",
                "Bake at 350° 10-12 minutes",
            ],
            image: fakeImage
        },
        {
            name: "Crunchy Nut Cookies",
            ingredients: [
                "1 cup white sugar",
                "1 cup brown sugar",
                "½ cup soft shortening",
                "2 eggs",
                "1 tsp. vanilla",
                "2 cups flour",
                "1 tsp. baking soda",
                "½ tsp. salt",
                "1 cup chopped nuts",
            ],
            instructions: [
                "Mix together sugar, brown sugar, shortening, eggs, and vanila",
                "Sift together flour, baking soda and salt, then add to the above mixture",
                "When well mixed add chopped nuts, mix well",
                "Shape into ¾ inch balls and place on greased cookie sheet. Flatten the balls with the bottom of a water glass which has been greased and dipped in sugar. Bake in oven at 375 degrees F for 8 to 10 minutes. Makes approximately 4 dozen",
            ],
            image: fakeImage
        },
        {
            name: "Fluffy Pumpkin Dip",
            ingredients: [
                "1 big box of instant vanilla pudding",
                "1 carton of Cool Whip",
                "1 can of pumpkin",
                "1 tsp. pumpkin pie spice",
            ],
            instructions: [
                "No instructions provided",
            ],
            image: fakeImage
        },
        {
            name: "Frosted Banana Bars",
            ingredients: [
                "½ cup butter or margarine",
                "2 cups sugar",
                "3 eggs",
                "1½ cups mashed ripe bananas",
                "1 tsp. vanilla",
                "2 cups all-purpose flour",
                "1 tsp. baking soda",
                "Pinch of salt",
                "(Frosting: ½ cup butter or margarine, 1 package 8 oz cream cheese, 4 cups powdered sugar, 2 tsp. vanilla)",
            ],
            instructions: [
                "Cream butter and sugar",
                "Bat in eggs, bananas and vanilla",
                "Combine flour, baking soda and salt, add to creamed mixture and mix well",
                "Pour into a greased 15x10x1 inch baking pan",
                "Bake at 350° for 25 minutes, then cool and frost",
            ],
            image: fakeImage
        },
        {
            name: "Fruit Cake",
            ingredients: [
                "1 large can cherry pie filling",
                "1 large can crushed pineapple (mostly drained)",
                "1 yellow cake mix",
                "1 stick of margarine",
                "pecan pieces",
            ],
            instructions: [
                "Mix cherry pie filling and crushed pineapple in a 9x13 pan (spray with Pam)",
                "Sprinkle yellow cake mix over top of fruit",
                "Melt and pour margarine over cake mix",
                "Sprinkle pecan pieces over top",
                "Bake at 325° 45-60 minutes",
            ],
            image: fakeImage
        },
        {
            name: "Fruit Pizza",
            ingredients: [
                "1 package Pillsbury sugar cookie dough (room temperature)",
                "1 package flavored cream cheese (pineapple or strawberry)",
                "fruit of your choice, sliced (kiwis, bananas, strawberries, mandarin oranges, blueberries)",
                "⅔ cup white juice",
                "3 tsp. corn starch"
            ],
            instructions: [
                "Press cookie dough onto greased pizza pan and bake.",
                "Cool",
                "Spread cream cheese over cookie dough",
                "Arrange sliced fruit on top of cream cheese",
                "Combine white grape juice and corn starch in sauce and boil until thickened. ",
                "Cool a bit, then drizzle on top of fruit",
                "This will keep fruit in place and keep it from turning brown",
            ],
            image: fakeImage
        },
        {
            name: "Ginger Cookies",
            ingredients: [
                "1 cup sugar",
                "¾ cup shortening",
                "1 egg",
                "¼ cup molasses",
                "2 cup flour",
                "2 tsp. baking soda",
                "1 tsp. ginger",
                "1 tsp. cinnamon",
                "1 tsp. salt",
            ],
            instructions: [
                "Cream sugar and shortening",
                "Beat egg and molasses then add and beat",
                "Beat remaining ingredients into mixture",
                "Chill one hour, roll into balls and into sugar",
                "Bake 350° approximately 10 minutes, but watch",
            ],
            image: fakeImage
        },
        {
            name: "Gooey Butter Cake",
            ingredients: [
                "1 yellow cake mix",
                "½ cup butter, melted",
                "2 eggs",
                "8 oz cream cheese",
                "1 box (16 oz) powdered sugar",
                "2 eggs, beaten",
            ],
            instructions: [
                "Mix yellow cake mix, melted butter, and 2 eggs together, then put into 9x13 baking dish",
                "Mix together cream cheese, box of powdered sugar, and the 2 beaten eggs, then spread over bottom layer in dish",
                "Sprinkle with powdered sugar",
                "Bake until golden brown at 325° for 45 minutes",
            ],
            image: fakeImage
        },
        {
            name: "Gooey Butter Cookies",
            ingredients: [
                "1 stick butter",
                "8 oz block cream cheese",
                "1 box yellow cake mix",
                "1 egg",
                "¼ tsp. vanilla",
                "powdered sugar",
            ],
            instructions: [
                "Cream together butter and cream cheese",
                "Add egg and vanilla",
                "Mix in cake",
                "Dough will be thick",
                "Roll into 1 inch balls, roll in powdered sugar",
                "Bake 10 minutes at 350",
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
            name: "Gram's Applesauce Cookies",
            ingredients: [
                "½ cup shortening",
                "1 cup sugar",
                "1½ cups unsweetened applesauce",
                "2 tsp. soda",
                "2¼ cups flour",
                "1 tsp. cinnamon",
                "½ tsp. cloves",
                "½ tsp. salt",
                "1 cup raisins",
                "½ cup nuts",
            ],
            instructions: [
                "No instructions provided",
            ],
            image: fakeImage
        },
        {
            name: "Gram's Cherry Pie",
            ingredients: [
                "(Pie Crust)",
                "2 cups flour",
                "1 tsp. salt",
                "1 cup Crisco",
                "2-3 Tbsp. milk",
                "(Remaining Ingredients)",
                "2 cups cherries",
                "1 cup sugar",
                "2 Tbsp. corn starch",
                "1 Tbsp. flour",
                "Little butter",
                "Almond flavoring",
            ],
            instructions: [
                "No instructions provided",
            ],
            image: fakeImage
        },
        {
            name: "Gram's Vanilla Fudge",
            ingredients: [
                "(1st Group)",
                "2 cups sugar",
                "1 Tbsp. white karo syrup",
                "½ cup milk",
                "½ cup evaporated milk",
                "Dash of salt",
                "(2nd Group)",
                "½ tsp. vanilla",
                "1 Tbsp. butter",
            ],
            instructions: [
                "Heat 1st group on ingredients together slowly to dissolve sugar",
                "Then continue heating to 238° F on candy thermometer",
                "Remove from heat, cool too 115° (or when forms a firm, soft ball in cold water)",
                "Add 2nd group of ingredients then beat until it begins to set (don't let it set too much while beating)",
                "Spread on a buttered plate",
            ],
            image: fakeImage
        },
        {
            name: "Jonene's Kona Bread",
            ingredients: [
                "½ cup butter or Crisco",
                "1 cup sugar",
                "2 eggs",
                "¾ cup mashed bananas",
                "1¼ cup flour",
                "¾ tsp. soda",
                "½ tsp. salt",
            ],
            instructions: [
                "Preheat to 350°",
                "Cream butter and sugar, add eggs, then banana, then flour, soda, salt",
                "Pour in greased 9x9 pan",
                "Bake 30 minutes",
            ],
            image: fakeImage
        },
        {
            name: "Joy's German Chocolate Upside Down Cake",
            ingredients: [
                "1 cup flaked sweetened coconut",
                "1 cup chopped pecans",
                "1 package (18.25 oz) german chocolate cake mix",
                "Eggs, water and oil as directed on package",
                "8 oz cream cheese, room temperature",
                "½ cup butter or margarine, room temperature",
                "1 lb confectioner's sugar, about 3¾ cups, sifted",
            ],
            instructions: [
                "Grease and flour a 9 x 13 x 2 inch baking pan",
                "Heat oven to 350°",
                "Sprinkle coconut and pecans evenly over the bottom of the prepared pan",
                "Prepare cake mix with the appropriate measurements of water, oil and eggs, following the package directions",
                "Pour the cake batter over the coconut and pecans",
                "Beat together the cream cheese, butter and confectioner's sugar; drop by spoonful over the top of cake batter",
                "Bake for about 45-50 minutes",
                "A toothpick should come out clean when inserted into the center of the cake portion",
                "Cool before serving",
                "Serve upside down on dessert plates",
            ],
            image: fakeImage
        },
        {
            name: "Lemon Cookies",
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
            <div className="grid-div" id={recipesShown.length > 0 ? "nothing" : "no-results-div"}>
                {recipesShown.length > 0 ? dishes : <h1 className="sorry-no-results">Sorry, no results matching "{query}"</h1>}
            </div>
        </div>
    )
}