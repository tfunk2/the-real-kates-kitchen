import React from 'react';
import '../stylesheets/SearchBar.css'

const SearchBar = ({ query, setQuery, activePage, clickedRecipe }) => {
    const handleXClick = () => {
        setQuery("")
    }

    return (
        <div className="search-bar-div">
            <input 
                className={clickedRecipe === "" ? "search-bar" : "search-bar-darker"}
                key="random1"
                maxLength={60}
                value={query}
                placeholder={
                    activePage === "main" ? "Search Main Dishes" : 
                    activePage === "side" ? "Search Side Dishes" : 
                    activePage === "dessert" ? "Search Desserts" : 
                    "Search Kate's Kitchen"
                }
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleXClick}
                className={clickedRecipe === "" ? "x-button" : "x-button-darker"}
            >
                X
            </button>
        </div>
    );
}

export default SearchBar;