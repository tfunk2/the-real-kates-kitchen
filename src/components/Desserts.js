import React, { useState, useEffect } from 'react';
import fakeImage from '../images/blue-terrazzo-seamless.jpg'
import Recipe from '../components/Recipe.js'
import SingleCherry from '../images/single-cherry.png'
// Food Images:
import AmishBread from '../images/desserts/homemade-amish-bread-horiz.png'
import GingerbreadCookies from '../images/desserts/gingerbread-cookies.jpg'
import BananaOrangeSoftees from '../images/desserts/banana-orange-softees.jpeg'
import BananaSquares from '../images/desserts/banana-squares.jpg'
import ButtercreamFrosting from '../images/desserts/buttercream-frosting.jpg'
import CaramelCornPuffTreats from '../images/desserts/CaramelCornPuffTreats.jpg'
import CherryCoffeeCake from '../images/desserts/cherry-coffee-cake.jpg'
import ChocolateChipCookies from '../images/desserts/Chocolate-Chip-Cookies.jpg'
import ChocolateMaltedCookies from '../images/desserts/chocolate-malted-cookies.jpg'
import ChocolateSheetCake from '../images/desserts/chocolate-sheet-cake.jpg'
import CoconutPecanCake from '../images/desserts/Coconut-Cake-Thumb.jpg'
import CrispSugarCookies from '../images/desserts/crisp-sugar-cookies.jpg'
import CrunchyCrispyCookies from '../images/desserts/crispy-crunchy-cookies.jpg'
import CrunchyNutCookies from '../images/desserts/crunchy-nut-cookies.jpg'
import FluffyPumpkinDip from '../images/desserts/fluffy-pumpkin-dip.jpg'
import FrostedBananaBars from '../images/desserts/frosted-banana-bars.jpg'
import FruitCake from '../images/desserts/Fruitcake.jpg'
import FruitPizza from '../images/desserts/fruit-pizza.jpg'
import GingerCookies from '../images/desserts/ginger-cookies.jpg'
import GooeyButterCake from '../images/desserts/gooey-butter-cake.jpeg'
import GooeyButterCookies from '../images/desserts/gooey-butter-cookies.jpg'
import ApplePieFilling from '../images/desserts/Apple-Pie-Filling.jpg'
import ApplesauceCookies from '../images/desserts/applesauce-cookies.jpg'
import CherryPie from '../images/desserts/cherry-pie.jpg'
import VanillaFudge from '../images/desserts/vanilla_fudge.jpg'
import KonaBread from '../images/desserts/kona-banana-bread.jpg'
import GermanChocolateUpsideDownCake from '../images/desserts/upside-down-german-chocolate-cake.jpg'
import LemonCookies from '../images/desserts/Lemon-Cookies.jpg'
import LemonCrinkleCakeMixCookies from '../images/desserts/Lemon-cake-mix-cookies.jpg'
import LemonPoppyBread from '../images/desserts/Lemon-Poppyseed-Bread.jpg'
import MonkeyBread from '../images/desserts/Monkey-Bread.jpg'
import Divinity from '../images/desserts/Old-Fashioned-Divinity.jpg'
import OreoBalls from '../images/desserts/oreo-balls.jpg'
import BananaPudding from '../images/desserts/Homemade-Banana-Pudding.jpg'
import PistachioAmbrosia from '../images/desserts/pistachio-ambrosia.jpg'
import PretzelTurtles from '../images/desserts/turtles.jpeg'
import PumpkinBread from '../images/desserts/pumpkin-bread.jpg'
import RussianTeaCakes from '../images/desserts/Russian-Tea-Cakes.jpg'
import RussianTeaCakesDouble from '../images/desserts/tea-cakes.jpg'
import SaltineToffee from '../images/desserts/saltine-toffee.jpg'
import Snickerdoodles from '../images/desserts/snickerdoodles.jpg'
import SpiceCookiesWithPumpkinDip from '../images/desserts/Easy-Pumpkin-Dip.jpg'
import SwedishGlogg from '../images/desserts/glogg.jpg'
import TexasSheetCakeCookies from '../images/desserts/sheet-cake-cookies.png'
import ThumbprintCookies from '../images/desserts/thumbprint-cookies.jpg'
import TollHouseCookies from '../images/desserts/choco-cooks.jpeg'
import ZebraCake from '../images/desserts/zebra-cake.jpg'
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
            image: AmishBread
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
            image: GingerbreadCookies
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
            image: BananaOrangeSoftees
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
            image: BananaSquares
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
            image: ButtercreamFrosting
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
            image: CaramelCornPuffTreats
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
            image: CherryCoffeeCake
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
            image: ChocolateChipCookies
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
            image: ChocolateMaltedCookies
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
            image: ChocolateSheetCake
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
            image: CoconutPecanCake
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
            image: CrispSugarCookies
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
            image: CrunchyCrispyCookies
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
            image: CrunchyNutCookies
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
            image: FluffyPumpkinDip
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
            image: FrostedBananaBars
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
            image: FruitCake
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
            image: FruitPizza
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
            image: GingerCookies
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
            image: GooeyButterCake
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
            image: GooeyButterCookies
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
            image: ApplePieFilling
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
            image: ApplesauceCookies
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
            image: CherryPie
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
            image: VanillaFudge
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
            image: KonaBread
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
            image: GermanChocolateUpsideDownCake
        },
        {
            name: "Lemon Cookies",
            ingredients: [
                "(Cookies)",
                "1 box lemon cake mix",
                "2 eggs",
                "⅓ cup oil",
                "(Icing - cut in half)",
                "2 cups confectioners sugar",
                "1½ Tbsp. vegetable oil",
                "1 Tbsp. + 2¼ tsp. lemon juice",
                "1½ Tbsp. water",
                "½ lemon zested",
            ],
            instructions: [
                "(Cookies)",
                "Mix, roll into 1 inch balls (when baked they will be about 2½\") and place on a lightly greased cookie sheet. Use the bottom of a drinking glass to flatten slightly. Bake at 375° until the top starts to crack, 6-7 minutes. Cool, and frost with lemon icing. (Note: 30 cookies per sheet x 2 sheets)",
                "(Icing)",
                "Mix until smooth. Drizzle over cookies when the cookies have cooled. Store the leftover icing in the refrigerator.",
                "Recipe Notes: I placed my cookies on a baking rack to spoon (drizzle) on the icing. The icing will drip off so you might want to place a piece of parchment paper under to catch the drops. (Note: I don't use a baking rack, just waxed paper)"
            ],
            image: LemonCookies
        },
        {
            name: "Lemon Crinkle Cake Mix Cookies",
            ingredients: [
                "(For 12 cookies)",
                "1 package lemon cake mix",
                "⅓ cup oil",
                "2 eggs",
                "Powdered sugar",
            ],
            instructions: [
                "Combine cake mix, oil, and eggs in a mixing bowl",
                "Using an ice cream scoop or your hand, form golf ball-sized balls of cookie dough and transfer to a bowl of powdered sugar",
                "Cover dough ball in powdered sugar and transfer to a parchment paper-lined baking sheet",
                "Bake at 350° F (180° C) for 10-12 minutes",
                "Enjoy!",
            ],
            image: LemonCrinkleCakeMixCookies
        },
        {
            name: "Lemon Poppy Bread",
            ingredients: [
                "(Bread)",
                "1 lemon cake mix",
                "1 lemon instant pudding mix",
                "½ cup oil",
                "1 cup real hot water",
                "4 eggs stirred and mixed well then add",
                "2 Tbsp. poppy seeds mixed in",
                "(Glaze)",
                "½ tsp. almond extract",
                "½ tsp. vanilla extract",
                "¼ cup orange juice",
                "¾ cup sugar",
            ],
            instructions: [
                "(Bread)",
                "Makes 2 regular loaves baked at 30 degrees-40 minutes, or 6 little loaves baked 30 minutes",
                "(Glaze)",
                "Mix on stove until dissolved and spread by spoonful on loaves while they are partly cooled you will have some liquid left and the bread freezes well",
            ],
            image: LemonPoppyBread
        },
        {
            name: "Monkey Bread",
            ingredients: [
                "1½ cans refrigerated biscuits",
                "1½ Tbsp. cinnamon",
                "½ cup sugar",
                "¾ cup pecans, chopped",
                "⅓ cup butter",
                "⅓ cup brown sugar",
            ],
            instructions: [
                "Preheat 375°",
                "Cut biscuits into 4 pieces",
                "Place pecans on bottom of pan (9\")",
                "Mix cinnamon andn sugar in small bowl",
                "Roll each biscuit piece in cinnamon sugar mixture",
                "Put biscuit pieces in pan, pour the extra cinnamon sugar on top",
                "Melt butter and brown sugar in microwave for 15-20 seconds",
                "Stir with whisk",
                "Pour mixture over biscuits",
                "Bake at 375° for 15-17 minutes",
            ],
            image: MonkeyBread
        },
        {
            name: "Mrs. Brewster's Divinity",
            ingredients: [
                "(Group 1)",
                "1¼ cups sugar",
                "½ cup water",
                "(Group 2)",
                "2½ cups sugar",
                "1 cup white karo syrup",
                "1 cup water",
                "(Other Ingredients)",
                "3 eggs",
                "(Optional)",
                "1 tsp vanilla",
                "1 cup nuts",
            ],
            instructions: [
                "Mix group 1 ingredients together and heat in a pan to 116 degrees centigrade (241 F softball)",
                "Mix group 2 ingredients together and heat in a pan to 128 degrees centigrade (262 F hardball)",
                "Beat whites of 3 eggs in a very large bowl",
                "Vanilla and nuts (optional) also food coloring if desired",
                "First add group 1 to the egg whites and mix well",
                "Next add group 2 and mix well",
                "Then add your optional ingredients and mix well until the shine on the surface begins to dull",
                "Using two spoons dip out on wax paper; The globs should stand up firm, if not keep stirring until cool enough to stand up firm",
            ],
            image: Divinity
        },
        {
            name: "Oreo Balls",
            ingredients: [
                "(Makes about 3½ dozen)",
                "1 (14.3 oz) package Oreos",
                "1 (8 oz) package cream cheese, cubed and softened",
                "16 oz semisweet chocolate, chopped",
                "1 Tbsp. shortening",
                "(Check original recipe for double batch)"
            ],
            instructions: [
                "Pulse cookies in a food processor until fine crumbs",
                "Set aside ½ cup crumbs",
                "Line a baking sheet with wax paper",
                "Add cream cheese to remaining crumbs in processor and pulse until well combined",
                "With dampered hands, shape cream cheese mixture into walnut sized balls",
                "Melt chocolate and shortening in a glass bowl in microwave or in metal bowl over pan of simmering water, stirring untl smooth",
                "Remove from heat",
                "Dip balls in chocolate mixture and turn with a fork to coat",
                "Lift out with 2 forks, leting excess chocolate drip off",
                "Transfer to prepared baking sheet and sprinkle reserved crumbs over tops while still warm",
                "Chill until firm, about 1 hour",
                "Store in mini muffin liners",
            ],
            image: OreoBalls
        },
        {
            name: "Paula Dean's Not Your Mama's Banana Pudding",
            ingredients: [
                "2 bags Pepperidge Farm Chessman Cookies OR 2 bags Vanilla Wafers",
                "6 to 8 bananas, sliced",
                "2 cups whole milk",
                "1 (5 oz) box french vanilla pudding",
                "1 (8 oz) package cream cheese",
                "1 (14 oz) can sweetened condensed milk",
                "1 (12 oz) container frozen whipped topping thawed, or equal amount sweetened whipped cream",
            ],
            instructions: [
                "Line the bottom of a 13x9 inch dish with 1 bag of cookies and layer bananas on top",
                "In a bowl, combine the milk and pudding mix and blend well using a handheld electric mixer",
                "Using another bowl, combine the cream cheese and condensed milk together and mix until smooth",
                "Fold the whipped topping into the cream cheese mixture",
                "Add the cream cheese mixture to the pudding mixture and stir until well blended",
                "Pour the mixture over the cookies and bananas and cover with the remaining cookies",
                "Refrigerate until ready to serve!",
            ],
            image: BananaPudding
        },
        {
            name: "Pistachio Ambrosia",
            ingredients: [
                "2 (17 oz) cans fruit cocktail",
                "2 (20 oz) cans pineapple chunks",
                "2 (11 oz) cans mandarin oranges",
                "4 packages (3.4 oz) instant pistachio pudding mix",
                "2 cups sour cream",
                "1 (12 oz) carton Cool Whip",
                "Chopped pecans",
            ],
            instructions: [
                "(16-20 servings)",
                "Drain fruit reserving 3 cups juice",
                "Pour juice into 4 quart bowl",
                "Add pudding mix and mix until smooth",
                "Stir in sour cream",
                "Add cool whip, mix until smooth",
                "Fold in fruit, chill for several hours",
                "Top with pecans just before serving",
            ],
            image: PistachioAmbrosia
        },
        {
            name: "Pretzel Turtles",
            ingredients: [
                "20 mini pretzels",
                "20 Rolos",
                "20 pecan halves",
            ],
            instructions: [
                "Preheat oven to 350 degrees",
                "Line a baking sheet with parchment paper",
                "Spread pretzels in a single layer on prepared sheet",
                "Top each pretzel with 1 Rolo",
                "Bake until candies melt, about 4 minutes",
                "While still warm press a pecan half onto each candy-covered pretzel",
                "Cool completely",
                "Layer between waxed paper in airtight container for storing",
            ],
            image: PretzelTurtles
        },
        {
            name: "Pumpkin Bread",
            ingredients: [
                "4 eggs",
                "2 cups sugar",
                "1 cup canola oil",
                "2 cups pumpkin",
                "2 cups flour",
                "2 tsp. baking powder",
                "1 tsp. baking soda",
                "1 tsp. cinnamon",
                "1 tsp. allspice",
                "Cinnamon sugar",
            ],
            instructions: [
                "Preheat to 350 degrees",
                "Stir eggs and sugar until smooth, add oil and stir until smooth, then add pumpkin",
                "Combine all dry ingredients together and stir in until blended (okay to be a little lumpy)",
                "Spray loaf pans with Pam and fill about ⅔ full",
                "Sprinkle top with cinnamon sugar before baking",
                "One batch makes about 3 regular sized loaves or 7 mini loaves",
                "You could also use a sheet cake pan and make bars without changing the recipe",
                "Bake time is tricky depending on the size of the pan you're using",
                "For the regular loaf pans, I set my timer for about 20 minutes to check, but it usually takes at least 30",
                "You want your toothpick to be just barely clean so it's not over baked",
                "Let it cool enough to handle, wrap in plastic wrap and freeze to seal in moisture",
                "20-22 minutes for bars",
            ],
            image: PumpkinBread
        },
        {
            name: "Russian Tea Cakes",
            ingredients: [
                "1 cup butter/shortening",
                "½ cup powdered sugar",
                "1 tsp. vanilla",
                "2 cups unsifted flour (just under 2 cups)",
                "¼ tsp. salt",
                "¾ cup finely chopped nuts",
            ],
            instructions: [
                "Preheat to 400°",
                "Mix first three ingredients, then add last three ingredients",
                "Roll into 1 inch balls",
                "Place on ungreased cookie sheet",
                "Bake 8 minutes until set, not brown",
                "Cool and roll in powdered sugar",
            ],
            image: RussianTeaCakes
        },
        {
            name: "Russian Tea Cakes Double Batch",
            ingredients: [
                "1 cup margarine",
                "1 cup Crisco (butter flavor)",
                "1 cup powdered sugar",
                "2 tsp. vanilla",
                "3½ cups unsifted flour",
                "½ tsp. salt",
                "1 cup finely chopped pecans",
            ],
            instructions: [
                "Mix ingredients in the order listed above",
                "Place on ungreased cookie sheet in 1 inch balls (I use a cookie dropper)",
                "Bake at 400° for about 13 minutes or until starting to brown",
                "Cool completely, roll in powdered sugar"
            ],
            image: RussianTeaCakesDouble
        },
        {
            name: "Saltine Toffee",
            ingredients: [
                "1 sleeve saltine crackers",
                "1 cup butter (do not substitute margarine)",
                "1 cup brown sugar",
                "1 cup chocolate chips",
                "Chopped nuts",
            ],
            instructions: [
                "Line a jelly roll pan with foil and lightly grease (I use PAM)",
                "Place single layer of saltines; cover the entire pan. Break if necessary",
                "Boil together butter and brown sugar",
                "Boil 3 minutes. Pour over saltines",
                "Bake at 350 for 5 minutes",
                "Remove from the oven and scatter chocolate chips. When melted spread chocolate. Top with chopped nuts",
            ],
            image: SaltineToffee
        },
        {
            name: "Soft and Thick Snickerdoodles",
            ingredients: [
                "3 cups all-purpose flour",
                "2 tsp. cream of tartar",
                "1 tsp. baking soda",
                "1½ tsp. ground cinnamon",
                "½ tsp. salt",
                "1 cup (2 sticks) unsalted butter, softened to room temperature",
                "1⅓ cup granulated sugar",
                "1 large egg + 1 large egg yolk, at room temperature",
                "2 tsp. pure vanilla extract",
                "(Topping)",
                "⅓ cup granulated sugar",
                "1 tsp. ground cinnamon",
            ],
            instructions: [
                "Preheat oven to 375°F (190°C). Line two large cookie sheets with parchment paper or silicone baking mats (always recommended for cookies) Set aside.",
                "Make the topping: Combine the granulated sugar and cinnamon together in a small bowl.",
                "Make the cookies: Whisk together the flour, cream of tartar, baking soda, cinnamon, and salt together in a medium bowl.",
                "In a large bowl using a hand mixer or stand mixer fitted with a paddle attachment, beat the butter and granulated sugar together on high speed until smooth and creamy, about 2 minutes. Add the egg, egg yolk, and vanilla extract. Beat on medium-high speed until combined. Scrape down the sides and up the bottom of the bwol with a rubber spatula as needed. With the mixer running on low speed, slowly add the dry ingredients to the wet ingredients in 3 different parts. The dough will be thick.",
                "Roll cookie dough into balls, about 1½ Tbsp. of cookie dough each. I recommend this cookie scoop. Roll the dough balls in cinnamon-sugar topping. Sprinkle extra cinnamon-sugar on top if desired. Arrange 3 inches apart on the baking sheets.",
                "Bake cookies for 10 minutes. The cookies will be very puffy and soft. When they are still very warm, lightly press down on them with the back of a spoon or fork to help flatten them out. Allow cookies to cool on the baking sheet for 10 minutes and transfer to a wire rack to cool completely.",
                "Cookies remain soft and fresh for 7 days in an airtight container at room temperature.",
            ],
            image: Snickerdoodles
        },
        {
            name: "Spice Cookies With Pumpkin Dip",
            ingredients: [
                "(Spice Cookies)",
                "1½ cup butter or margarine, thawed",
                "2 cups sugar",
                "2 eggs",
                "½ cup molasses",
                "4 cups flour",
                "4 tsp. baking soda",
                "2 tsp. ground cinnamon",
                "1 tsp. ground ginger",
                "1 tsp. cloves",
                "1 tsp. salt",
                "Additional sugar",
                "(Pumpkin Dip)",
                "1 (8oz) package cream cheese, softened",
                "1 can (18oz) pumpkin pie mix",
                "2 cups powdered sugar",
                "½ to 1 tsp. ground cinnamon",
                "¼ to ½ tsp. ground ginger",
            ],
            instructions: [
                "(Spice Cookies)",
                "Cream butter and sugar",
                "Add eggs one at a time",
                "Add molasses; mix well",
                "Combine dry ingredients, add to creamed mixture, mix well",
                "Chill overnight",
                "Shape into ½ inch balls, roll in sugar",
                "Place 2 inches apart on ungreased baking sheet",
                "Bake at 375° for 6 minutes or until edges begin to brown",
                "Cool 2 minutes before removing",
                "(Pumpkin Dip)",
                "Beat cream cheese until smooth",
                "Add pumpkin pie mix, beat well",
                "Add sugar, cinnamon, and ginger, beat until smooth",
                "Serve with spice cookies",
                "Store in refrigerator",
            ],
            image: SpiceCookiesWithPumpkinDip
        },
        {
            name: "Swedish Glogg",
            ingredients: [
                "3 cups water",
                "12 cloves (contained in a bag)",
                "4 cardamom pods (also in bag)",
                "1 orange peel",
                "1 cup raisins",
                "20 almonds",
                "1 stick cinnamon",
                "1 cup sugar",
                "½ gallon Morgan David Concord OR a port wine",
                "1½ cup grain alcohol OR brandy"

            ],
            instructions: [
                "Simmer gently",
                "Remove spice bag, cinnamon and orange peel after 20 minutes",
                "Continue simmering another 20 minutes",
                "Then add liquor",
                "Bring mix to a simmering temperature",
                "When fumes appear heavy, lift and light",
                "When flames wane, light again",
                "Ladle into glasses--SKOL!",
                "(Note: Try not adding sugar)"
            ],
            image: SwedishGlogg
        },
        {
            name: "Texas Sheet Cake Cookies",
            ingredients: [
                "(Chocolate Cake Mix Cookies)",
                "1 box milk chocolate cake mix",
                "2 eggs",
                "⅓ cup canola oil",
                "½ cup chopped pecans (optional)",
                "(Icing)",
                "2 Tbsp. cocoa powder",
                "½ cup unsalted sweet cream butter",
                "3 Tbsp. whole milk",
                "2 cups powdered sugar",
            ],
            instructions: [
                "(Chocolate Cake Mix Cookies)",
                "Preheat the oven to 350° and line two cookie sheets with parchment paper or silicone baking mats",
                "In a large bowl, mix together the cake mix, eggs and oil until combined and smooth. If using pecans, stir into batter by hand",
                "Scoop out dough balls and place them onto the cookie sheet about 2 inches apart from each other",
                "Bake for 8-10 minutes",
                "Remove from the oven and allow to cool for a few minutes before transferring cookies to a wire cooling rack",
                "(Icing)",
                "Using a medium saucepan, combine the butter, cocoa powder and whole milk over medium heat",
                "Whisk together until combined and smooth",
                "Remove from the heat and slowly whisk in the powdered sugar until smooth",
                "Place a cookie sheet under the wire rack to catch excess chocolate",
                "Scoop out a spoonful of icing and pour over the cookies",
                "Allow the icing to harden before enjoying",
            ],
            image: TexasSheetCakeCookies
        },
        {
            name: "Thumbprint Cookies",
            ingredients: [
                "1 cup real butter, salted",
                "¼ cup sugar",
                "1 tsp. almond extract",
                "2 cups flour",
                "½ tsp. salt",
                "1 cup finely chopped pecans (optional)",
                "Fruit preserves or jam",
                "(Check original recipe for double batch)",
            ],
            instructions: [
                "Preheat to 400°",
                "Combine butter and sugar, beat until light and fluffy",
                "Blend in almond extract",
                "Add flour and salt",
                "Mix well",
                "Shape teaspoonfulls into balls",
                "Roll in chopped pecans (optional)",
                "Place on ungreased cookie sheet, flatten slightly",
                "Indent centers with your thumb",
                "Spoon jam into centers",
                "Bake 10-12 minutes or until lightly brown",
                "Makes 2½ dozen",
                "Helpful tips: I use a small cookie dropper so they are all the same size. To flatten them, I put butter on the flat bottom of a drinking glass, then dip it in sugar so it doesnt stick to the cookie. I used a baby spoon to make the indentions and then to spoon in the jam. Caution-If you use too much jam, it will bubble over during baking. Also, I use the air bake insulated cookie sheets, it prevents them from burning on the bottom.",
            ],
            image: ThumbprintCookies
        },
        {
            name: "Toll House Cookies",
            ingredients: [
                "This recipe get's it's measurements from the recipe it's stuck to. Best to read the original recipe for this one.",
            ],
            instructions: [
                "Read original recipe",
            ],
            image: TollHouseCookies
        },
        {
            name: "Zebra Cake III",
            ingredients: [
                "1½ cups heavy whipping cream",
                "2 Tbsp. confectioners sugar",
                "2 tsp. vanilla extract",
                "1 (9 oz) package chocolate wafer cookies",
                "¼ cup grated chocolated",
            ],
            instructions: [
                "Beat cream in a large glass or metal mixing bwol with an electric mixer. Gradually add confectioners sugar and vanilla extract, continuing to beat until the cream holds stiff peaks. Lift your beater or whisk straight up: the whipped ream should form a sharp peak that holds it's shape.",
                "Spread a generous teaspoon of whipped cream on each cookie. Press cookies together to make 3-inch stacks.",
                "Spread a 1-inch wide line of whipped cream down the center of a serving platter. Assemble cookie stacks into a log on platter following the line of whipped cream.",
                "Frost cookie log with remaining whipped cream and sprinkle with grated chocolate.",
                "Cover tightly and refrigerate overnight.",
                "To serve, slice diagonally to create striped pieces.",
            ],
            image: ZebraCake
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
            <div className="grid-div" id={recipesShown.length > 0 ? "nothing" : "no-results-div"}>
                {recipesShown.length > 0 ? dishes : <h1 className="sorry-no-results">Sorry, no results matching "{query}"</h1>}
            </div>
        </div>
    )
}