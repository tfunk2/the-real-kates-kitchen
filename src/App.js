import React, { useState, useEffect} from 'react';
import './App.css';
import MainDishes from './components/MainDishes.js'
import SideDishes from './components/SideDishes.js'
import Desserts from './components/Desserts.js'
import NavBar from './components/NavBar.js'
import SearchBar from './components/SearchBar.js'
import RecipeModal from './components/RecipeModal.js'

function App() {
  const [activePage, setActivePage] = useState("main");
  const [query, setQuery] = useState("");
  const [clickedRecipe, setClickedRecipe] = useState("");

  const currentPage = () => {
    switch(activePage) {
      case "main": 
        return <MainDishes 
          query={query}
          setClickedRecipe={setClickedRecipe}
        />;
      case "side":
        return <SideDishes 
          query={query}
          setClickedRecipe={setClickedRecipe}
        />;
      case "dessert":
        return <Desserts 
          query={query}
          setClickedRecipe={setClickedRecipe}
        />;
      default:
        return <></>;
    }
  }

  return (
    <div className={clickedRecipe === "" ? "App" : "App darkened"}>
      {
        clickedRecipe === "" ? <></> : 
        <RecipeModal clickedRecipe={clickedRecipe} 
          setClickedRecipe={setClickedRecipe}
        />
      }
      <header className="app-header">
        <div className="header-div">
          <h1 className={clickedRecipe === "" ? "title-container" : "title-container-darker"}>
            <span className="the-real-text">The Real </span>
            <span className="kates-text">KATE'S </span>
            <span className="kitchen-text">KITCHEN</span>
          </h1>
          <SearchBar 
            query={query}
            setQuery={setQuery}
            activePage={activePage}
            clickedRecipe={clickedRecipe}
          />
        </div>
        <NavBar 
          setActivePage={setActivePage}
          activePage={activePage}
          clickedRecipe={clickedRecipe}
        />
      </header>
      <div className="current-page-space">
        {currentPage()}
      </div>
    </div>
  );
}

export default App;
