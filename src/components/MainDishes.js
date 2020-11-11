import React, { useState, useEffect } from 'react';
import fakeImage from '../images/blue-terrazzo-seamless.jpg'
import Recipe from '../components/Recipe.js'
import SingleCherry from '../images/single-cherry.png'
import '../stylesheets/MainDishes.css';

export default function MainDishes({ query, setClickedRecipe }) {
    const recipes = [
        {
            name: "Baked Potato Soup",
            ingredients: [
                "32oz bag frozen hash browns",
                "32oz box chicken broth",
                "10oz can condensed cream of chicken",
                "8oz package cream cheese, softened",
                "1½ cup sharp cheddar cheese, shredded",
                "¾ cup crumbled bacon",
                "½ tsp. fresh rosemary, minced",
                "kosher salt & pepper to taste",
            ],
            instructions: [
                "Mix together in crockpot, break up cream cheese, mix in",
                "Cook on high 3 hours, stirring occasionally"
            ],
            image: fakeImage
        },
        {
            name: "Berry Good French Toast",
            ingredients: [
                "½ cup flour",
                "1½ cup milk",
                "1 Tbsp. sugar",
                "½ tsp. vanilla",
                "¾ tsp. salt",
                "6 eggs",
                '10 slices French bread (cut into 1" cubes)',
                "1 cup blueberries",
                '8oz package cream cheese (cut into ½" cubes)',
                "powdered sugar",
                "maple syrup"
            ],
            instructions: [
                "Grease a 2½ quart casserole dish (9 x 13)",
                "Beat flour, milk, sugar, vanilla, salt, and eggs in a large bowl until smooth",
                "Stir in bread cubes until coated",
                "Pour into greased casserole dish",
                "Top evenly with cream cheese and berries",
                "Cover and refrigerate up to 24 hours",
                "Set out 30 min before baking",
                "Heat oven to 400",
                "Uncover and bake 20 min, go over cream cheese and berries to smooth out a little, then bake 5 more minutes",
                "Sprinkle cinnamon sugar and powdered sugar on top",
                "Serve with maple syrup",
            ],
            image: fakeImage
        },
        {
            name: "Breading for Chicken",
            ingredients: [
                "1¼ lbs. chicken strips",
                "1¼ cup panko bread crumbs",
                "1 cup finely grated sharp cheddar",
                "½ tsp. mustard powder",
                "1 tsp. salt",
                "¼ tsp. pepper",
                "2 eggs"
            ],
            instructions: [
                "Mix panko bread crumbs, cheddar, mustard powder, salt and pepper together",
                "Beat eggs in a separate dish",
                "Dip chicken in beaten eggs, then dip in dry mixture",
                "Cook in oil about 3 min each side",
            ],
            image: fakeImage
        },
        {
            name: "Breakfast Casserole",
            ingredients: [
                "12oz package of hash browns with peppers and onions",
                "1 lb. sausage",
                "8 eggs beaten",
                "6oz package cheddar cheese, grated",
                "Salt and pepper to taste",
            ],
            instructions: [
                "Spread hash browns on bottom of greased 9 x 13 inch pan",
                "Saute sausage, onion, green peppers, and mushrooms",
                "Combine eggs, salt, and pepper",
                "Add sausage mixture",
                "Pour over potatoes",
                "Sprinkle cheese over top",
                "Refrigerate overnight",
                "Bake at 350 degrees uncovered for 35 minutes or until done",
            ],
            image: fakeImage
        },
        {
            name: "Chicken and Rice",
            ingredients: [
                "1½ lbs. boneless, skinless chicken thighs (or breasts), cut into 1\" pieces",
                "¼ cup extra virgin olive oil",
                "1 medium yellow onion, diced",
                "2 carrots, peeled and shredded",
                "2 celery stalks, chopped",
                "1 tsp. minced garlic",
                "1½ cup rice, rinsed (I used jasmine)",
                "2 cups low sodium chicken broth",
                "salt and pepper to taste",
                "½ cup shredded or grated Parmesan cheese",
                "⅓ cup fresh chopped parsley",
            ],
            instructions: [
                "In a 3 quart pot heat ¼ cup of extra virgin olive oil over medium high heat",
                "Place chicken thigh pieces into the heated oil. Add plenty of salt and pepper. Saute for 5-7 minutes, or until cooked",
                "Add diced onion and garlic to the chicken and saute for another 3 minutes. Next add the carrots and celery to the chicken",
                "Increase the heat to high and add chicken broth, then stir in the rinsed rice. Bring to a boil, then reduce heat to low. Stir again and then cover and let simmer for 15 to 20 minutes or until the rice is cooked, stirring occasionally",
                "Stir in the parmesan cheese and fresh parsley. Add more salt, pepper or seasonings if desired",
            ],
            image: fakeImage
        },
        {
            name: "Chicken Tortilla Soup",
            ingredients: [
                "2 cans chicken",
                "2 cans chicken broth",
                "2 cans green enchilada sauce",
                "1 can Rotel",
                "1 can mexicorn (drain a little)",
                "1 can black beans (drain and rinse)",
            ],
            instructions: [
                "No instructions provided",
            ],
            image: fakeImage
        },
        {
            name: "Company Casserole",
            ingredients: [
                "1 lb. beef",
                "1 cup sour cream",
                "8oz cream cheese, softened",
                "1 cup cottage cheese",
                "1 jar spaghetti sauce",
                "1 package rigatoni or other noodles",
                "1½ cup mozzarella cheese",
            ],
            instructions: [
                "Brown beef, add spaghetti sauce and cook through",
                "Cook noodles according to package directions",
                "Combine cream cheese, sour cream, cottage cheese & 1 cup of mozzarella",
                "Layer starting with meat sauce, then noodles, then cheese mixture",
                "End with a meat sauce layer & top with the remaining mozzarella",
                "Bake at 350 for 45 min",
            ],
            image: fakeImage
        },
        {
            name: "Cris' Sloppy Joes",
            ingredients: [
                "1 lb hamburger",
                "1 lb ground turkey",
                "1 can tomato soup",
                "½ cup catsup",
                "1 Tbsp. worcestershire sauce",
                "Chili powder",
                "1 Tbsp. vinegar",
                "1 Tbsp. sugar",
            ],
            instructions: [
                "No instructions provided",
            ],
            image: fakeImage
        },
        {
            name: "Crockpot Breakfast Casserole",
            ingredients: [
                "26 oz bag frozen hash browns",
                "12 eggs",
                "1 cup milk",
                "1 Tbsp. ground mustard",
                "16oz sausage",
                "salt and pepper",
                "16oz shredded cheddar",
            ],
            instructions: [
                "Spray crockpot, evenly spread hash browns on bottom",
                "Mix eggs with whisk/add milk and mustard, salt and pepper ",
                "Cook sausage & drain, spread on top of hash browns",
                "Add cheese, mix thoroughly",
                "Add/pour egg mixture, spread evenly",
                "Cook low 6-8 hours",
            ],
            image: fakeImage
        },
        {
            name: "Dump and Bake Chicken Parmesan",
            ingredients: [
                "12oz package whole wheat penne pasta",
                "24oz jar pasta sauce",
                "2-3 cups water",
                "1 lb chicken (cut up)",
                "2 cup shredded mozzarella cheese",
                "½ cup bread crumbs",
                "salt and pepper to taste",
            ],
            instructions: [
                "Preheat oven to 425 degrees",
                "Spray 9 x 13 baking dish with cooking spray",
                "Dump uncooked noodles, pasta sauce, water, chicken and ½ cup mozzarella in baking dish",
                "Add salt and pepper, mix together",
                "Make sure liquid covers pasta and chicken",
                "Cover dish with foil and bake for 20 minutes",
                "Uncover and bake for an additional 10 minutes or until chicken is cooked through",
                "Spread breadcrumbs, mozzarella cheese and parmesan cheese over top",
                "Bake uncovered for 10 minutes or until cheese is melted and bread crumbs are golden brown"
            ],
            image: fakeImage
        },
        {
            name: "Gram's Meatloaf",
            ingredients: [
                "5 lbs hamburger",
                "1 egg",
                "Salt and pepper",
                "1 cup milk",
                "½ cup cracker crumbs",
                "½ cup quick oats",
                "1 Tbsp. ketchup (optional)",
                "½ can tomato soup",
            ],
            instructions: [
                "Make well with meat",
                "Mix egg in well",
                "Alternate milk with dry mixture",
                "When all is mixed, put in a loaf pan",
                "Pour diluted tomato soup over",
                "Bake at 350 degrees for around an hour (cover with foil for first 30 minutes)",
            ],
            image: fakeImage
        },
        {
            name: "Grandma Funk's Perfect Waffles",
            ingredients: [
                "2½ cup flour",
                "¾ tsp. salt",
                "4 tsp. baking powder",
                "2 Tbsp. sugar",
                "2 eggs slightly beaten",
                "2¼ cup milk",
                "¾ cup oil",
            ],
            instructions: [
                "Combine dry ingredients",
                "Add liquid ingredients and blend until smooth",
                "Batter will be thin, use 1 cup to each waffle",
            ],
            image: fakeImage
        },
        {
            name: "Grilled Cheese - Oven",
            ingredients: [
                "Bread",
                "Cheese slices",
                "Butter spread",
            ],
            instructions: [
                "Heat oven to 350 degrees",
                "10 minutes on one side",
                "5 minutes on the other side",
            ],
            image: fakeImage
        },
        {
            name: "Hashbrown Casserole",
            ingredients: [
                "2 lbs sausage",
                "1 can mushroom soup",
                "1 can evaporated milk",
                "1 Tbsp. mustard",
                "1 lb shredded cheese",
                "6 eggs",
                "1 bag hash browns"
            ],
            instructions: [
                "Brown sausage, put in 9 x 13 pan",
                "Mix soup, milk, seasoning, and eggs",
                "Pour over sausage",
                "Put shredded cheese on top",
                "Let set in refrigerator overnight",
                "Next day, add hashbrowns, and bake 50 min at 350 degrees"
            ],
            image: fakeImage
        },
        {
            name: "Hearty Breakfast Casserole",
            ingredients: [
                "24oz frozen hash browns",
                "Salt and pepper",
                "12 eggs",
                "2 cup half and half",
                "1 tsp. season salt",
                "1½ cup shredded cheddar cheese",
                "1½ cup shredded pepper jack cheese",
                "2 cup chopped ham (or sausage)",
            ],
            instructions: [
                "Grease a 9 x 13 pan",
                "Add frozen hash browns, sprinkle with salt and pepper",
                "In a large bowl, whisk the eggs together",
                "Then add half and half, season salt, cheddar and pepper jack cheeses and chopped ham",
                "Pour over top of frozen hash browns",
                "Cover with foil and refrigerate for 2 hours overnight",
                "Bake covered in foil at 350 degrees for 90 minutes",
                "Let rest 10 minutes before serving",
            ],
            image: fakeImage
        },
        {
            name: "Italian Casserole with Shells",
            ingredients: [
                "1 box jumbo shells",
                "1 lb package pork sausage",
                "8oz sour cream",
                "8oz cream cheese",
                "Large can four-cheese spaghetti sauce",
                "1 package shredded mozzarella",
            ],
            instructions: [
                "Preheat to 300",
                "Boil shells according to package",
                "Cook sausage and combine with cream cheese and sour cream",
                "Stuff meat mixture into cooked shells",
                "In a 9 x 13 baking dish pour a thin layer of the spaghetti sauce just to cover the bottom",
                "Place stuffed shells in baking dish",
                "Pour remainder of spaghetti sauce over shells and cover with mozzarella",
                "Bake at 300 degrees until heated and cheese is melted",
            ],
            image: fakeImage
        },
        {
            name: "Jo's Chicken Salad",
            ingredients: [
                "3 large can chicken or 4 - 12.5oz cans Tyson premium white in water (Sam's)",
                "Approximately 2-3 Tbsp. of both Hellman's and Miracle Whip (½ and ½)",
                "Approximately 2-3 Tbsp. sweet pickle relish",
                "Pepper",
                "Quick shake garlic salt",
                "1-2 sliced apples",
                "4oz pecans chopped",
            ],
            instructions: [
                "No instructions provided"
            ],
            image: fakeImage
        },
        {
            name: "Jodi's Adoring Breakfast Casserole",
            ingredients: [
                "1 stick real butter",
                "6-8 slices of thick bread (cubed)",
                "Dill weed and sweet basil (a little)",
                "1 lb pork sausage (cooked and drained)",
                "Shredded cheese (your choice)",
                "6 or 7 eggs",
                "2 cups milk",
            ],
            instructions: [
                "Melt butter in 9x13 baking dish",
                "Put in half the bread cubes and sprinkle a little dill weed and basil, repeat with the other half of the cubes",
                "Layer on the shredded cheese, crumble sausage on top",
                "Whisk together eggs and milk, pour over entire dish",
                "Cover with foil and refrigerate overnight",
                "In the morning, bake at 350 degrees, covered for about 40 min, uncover for 10 min to let it brown",
            ],
            image: fakeImage
        },
        {
            name: "Laurie's Spaghetti Casserole",
            ingredients: [
                "1 lb hamburger",
                "onion (assuming white)",
                "salt and pepper",
                "2 cans tomato soup",
                "2 cans cream of mushroom soup",
                "1 lb package spaghetti",
                "block of sharp cheddar cheese (or extra sharp)"
            ],
            instructions: [
                "brown hamburger with onions and salt and pepper to taste",
                "Simmer together the soups and hamburger for 45 min",
                "Meanwhile, cook spaghetti and drain",
                "Place cooked spaghetti in the bottom of a greased 9x13 baking dish",
                "Pour sauce over top and work into noodles a little bit",
                "Bake at 350 degrees just until bubbling",
                "Remove and sprinkle top with shredded block of cheese",
                "Bake until cheese is melted",
            ],
            image: fakeImage
        },
        {
            name: "Lisa's White Chili",
            ingredients: [
                "2 onions, chopped",
                "2 cloves garlic or 1 tsp. garlic powder",
                "6 cups chicken broth (can use broth from cooking chicken too)",
                "4 Tbsp. fresh cilantro",
                "4 Tbsp. lime juice",
                "2 tsp. cumin",
                "1 tsp. oregano",
                "½ tsp. Tobasco or red pepper sauce",
                "½ tsp. salt",
                "3-4 chicken breasts cooked and diced",
                "2 cans white corn (or 1 package frozen)",
                "2 cans white northern beans",
                "2 cans black-eyed peas",
            ],
            instructions: [
                "No instructions provided",
            ],
            image: fakeImage
        },
        {
            name: "Mike's Roast",
            ingredients: [
                "2 lb angus eye roast",
                "cooking oil",
                "1 package au jus mix",
                "1½ cup water",
                "1 onion (chunked)",
                "1 lb baby carrots",
                "2-2½ lb potatoes peeled and quartered",
            ],
            instructions: [
                "Brown the angus eye roast in oil",
                "Put angus roast, au jus mix, water, and onion in crockpot on high for 1-2 hours",
                "Add baby carrots and potatoes",
                "Cook high another hour, turn to low another 3 hours"
            ],
            image: fakeImage
        },
        {
            name: "Parmesan Chicken Cutlets",
            ingredients: [
                "¼ cup parmesan, grated",
                "2 Tbsp. dried seasoned italian bread crumbs",
                "⅛ tsp. paprika",
                "1 tsp. dried parsley",
                "½ tsp. garlic powder",
                "¼ tsp. black pepper, freshly ground",
                "4 boneless chicken breast, about 1 lb",
            ],
            instructions: [
                "Preheat over to 400 degrees",
                "In resealable bag, combine cheese, crumbs and all seasonings; shake well",
                "Transfer mixture to plate; dip each chicken breast in cheese mixture, turning to coat all sides",
                "Arrange on non-stick baking sheet",
                "Bake until chicken is cooked through, 20-25 minutes"
            ],
            image: fakeImage
        },
        {
            name: "Philly Cheese Steak Sloppy Joes",
            ingredients: [
                "1 lb lean ground beef",
                "2 Tbsp. butter",
                "1 small yellow onion, diced",
                "1 small green bell pepper, diced",
                "8oz brown mushrooms, minced",
                "2 Tbsp. ketchup",
                "1 Tbsp. Worcestershire sauce",
                "½ tsp. Kosher salt",
                "½ tsp. fresh ground black pepper",
                "1 Tbsp. corn starch",
                "1 cup beef broth",
                "8oz Provolone cheese slices chopped (use 6oz if you don't want it very cheesy)",
                "6 brioche hamburger buns"
            ],
            instructions: [
                "Add the ground beef to a large cast iron skillet (this browns very well) and brown until a deep brown crust appears before breaking the beef apart",
                "Stir the ground beef and brown until a deep brown crust appears on about 50 or so percent of the beef",
                "Remove the beef (you can leave the fat) and add the butter and the onions and bell peppers and mushrooms",
                "Let brown for 1-2 minutes before stirring, then let brown for another 1-2 minutes before stirring again",
                "Add the beef back into the pan",
                "In a small cup mix the beef broth and cornstarch together",
                "Add the ketchup, Worcestershire sauce, salt, black pepper, beef broth/cornstarch mixture into the pan",
                "Cook until the mixture is only slightly liquidy (about 75% of the mixture is above liquid), 3-5 minutes",
                "Turn off the heat, add in the provolone cheese",
                "Served on toasted brioche buns"
            ],
            image: fakeImage
        },
        {
            name: "Pot Roast",
            ingredients: [
                "Chuck roast",
                "Hidden Valley Ranch dressing mix",
                "McCormick Au Jus mix",
                "Stick of butter",
                "5 pepperoncini peppers",
            ],
            instructions: [
                "Put roast in crock pot",
                "Sprinkle ranch mix",
                "Sprinkle au jus mix",
                "Place butter on top",
                "Place peppers on top",
                "Do not add water",
                "Cook on low for about 8 hours"
            ],
            image: fakeImage
        },
        {
            name: "Simple Slow Cooker Creamy Chicken Chili",
            ingredients: [
                "Chicken breasts",
                "Packet of ranch dressing",
                "1 can black beans",
                "1 can Rotel",
                "1 can corn",
                "1 block cream cheese"
            ],
            instructions: [
                "Slow cooker on high for 4 hours or low for 6 hours",
                "Serve over rice with tortillas"
            ],
            image: fakeImage
        },
        {
            name: "Simply Lasagna",
            ingredients: [
                "1 lb ground beef",
                "2½ cups shredded low-moisture part skim mozzarella - divided",
                "1 container (15oz) Polly-O natural part skim ricotta cheese",
                "½ cup 100% grated parmesan cheese divided",
                "¼ cup chopped fresh parsley",
                "1 egg lightly beaten",
                "1 jar (26 oz) spaghetti sauce",
                "1 cup water",
                "12 lasagna noodles, uncooked"
            ],
            instructions: [
                "Preheat oven to 350 degrees",
                "Brown meat, drain",
                "Mix mozzarella, ricotta, parmesan, parsley and egg until well blended",
                "Stir spaghetti sauce into drained meat, add water to jar, replace lid, and shake then add to sauce",
                "Spread 1 cup of meat sauce onto bottom of 13x9 baking dish, top with a layer of 3 uncooked noodles",
                "Spread ⅓  of the cheese mixture and 1 cup meat sauce over noodles; Repeat 2 more times - top with remaining 3 noodles and remaining meat sauce",
                "Sprinkle with remaining ¼ cup mozzarella and ¼ cup parmesan",
                "Cover tightly with greased foil, bake 45 min",
                "Remove foil, continue baking for 15 min, or until heated through",
                "Let stand 15 min before cutting to serve"
            ],
            image: fakeImage
        },
        {
            name: "Slow Cooker Creamy White Chicken Chili",
            ingredients: [
                "1 lb boneless skinless chicken breast trimmed of excess fat",
                "1 yellow onion diced",
                "2 cloves garlic minced",
                "24oz chicken broth (low sodium)",
                "2 15oz cans great northern beans drained and rinsed",
                "2 4oz cans diced green chiles (I do one hot, one mild)",
                "1 15oz can whole kernel corn drained",
                "1 tsp. salt",
                "½ tsp. black pepper",
                "1 tsp. cumin",
                "¾ tsp oregano",
                "½ tsp. chili powder",
                "¼ tsp. cayenne pepper",
                "Small handful fresh cilantro chopped",
                "4oz reduced fat cream cheese softened",
                "¼ cup half and half",
                "(All items below are toppings)",
                "Sliced jalapenos",
                "Sliced avocados",
                "Dollop of sour cream",
                "Minced fresh cilantro",
                "Tortilla strips",
                "Shredded Monterey jack or Mexican Cheese"
            ],
            instructions: [
                "Add chicken breasts to bottom of slow cooker, top with salt, pepper, cumin, oregano, chili powder, and cayenne pepper",
                "Top with diced onion, minced garlic, great Northern beans, green chiles, corn, chicken broth and cilantro, stir",
                "Cover and cook on LOW for 8 hours or on HIGH for 3-4 hours",
                "Remove chicken to large mixing bowl, shred, then return to slow cooker",
                "Add cream cheese and half and half, stir, then cover and cook on HIGH for 15 minutes, or until chili is creamy and slightly thickened",
                "Stir well and serve with desired toppings",
            ],
            image: fakeImage
        },
        {
            name: "Slow Cooker Zuppa Toscana",
            ingredients: [
                "1 lb sausage (note says: use less sausage, more potato)",
                "2 large russet baking potatoes, sliced in half, and then in ¼ inch slices",
                "1 large onion, chopped",
                "¼ cup bacon bits (optional)",
                "2 garlic cloves, minced",
                "2 cup kale or swiss chard, chopped",
                "16oz can chicken broth",
                "1 quart water",
                "1 cup heavy whipping cream",
            ],
            instructions: [
                "Brown the sausage in a skillet over medium-high heat until no longer pink",
                "Place cooked sausage, chicken broth, water, garlic, potatoes and onion in the slow cooker",
                "Cover and crock on high for 3-4 hours until potatoes are cooked and soft",
                "Turn the slow cooker off and add the kale",
                "Return the lid and let set for 5 min",
                "Stir in whipping cream and serve"
            ],
            image: fakeImage
        },
        {
            name: "White Chicken Enchiladas",
            ingredients: [
                "10 soft taco shells",
                "2 cups cooked, shredded chicken",
                "2 cups shredded Monterrey Jack cheese",
                "3 Tbsp. butter",
                "3 Tbsp. flour",
                "2 cups chicken broth",
                "1 cup sour cream",
                "1 4oz can diced green chilies"
            ],
            instructions: [
                "Preheat oven to 350 degrees, grease a 9x13 pan",
                "Mix chicken and 1 cup of cheese, roll up in tortillas and place in pan",
                "Melt butter, stir in flour and cook 1 minute, heat over medium heat until thick and bubbly",
                "Stir in sour cream and chilies, do NOT bring to a boil",
                "Pour over enchiladas and top with remaining cheese",
                "Bake 22 min, then high broil 3 min",
                "(Note: sauce doesn't freeze well)"
            ],
            image: fakeImage
        },
    ]

    const [mainRecipesShown, setMainRecipesShown] = useState([...recipes])

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
        return <Recipe recipe={recipe} 
            ingredients={ingredients}
            instructions={instructions}
            mainRecipesShown={mainRecipesShown}
            handleRecipeClick={handleRecipeClick}
        />
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