import React from 'react';
import '../stylesheets/SearchBar.css'

const SearchBar = ({ query, setQuery, activePage }) => {
    const handleXClick = () => {
        setQuery("")
    }

    return (
        <div className="search-bar-div">
            <input 
                className="search-bar"
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
                className="x-button"
            >
                X
            </button>
        </div>
    );
}

export default SearchBar;