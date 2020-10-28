import React, { useState, useEffect} from 'react';
import './App.css';
import MainDishes from './components/MainDishes.js'
import SideDishes from './components/SideDishes.js'
import Desserts from './components/Desserts.js'
import NavBar from './components/NavBar.js'

function App() {
  const [activePage, setActivePage] = useState("main");

  const currentPage = () => {
    switch(activePage) {
      case "main": 
        return <MainDishes />;
      case "side":
        return <SideDishes />;
      case "dessert":
        return <Desserts />;
      default:
        return <></>;
    }
  }

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-div">
          <h1 className="kates-text">
            <span className="the-real-text">The Real </span>KATE'S <span className="kitchen-text">KITCHEN</span>
          </h1>
        </div>
        <NavBar 
          setActivePage={setActivePage}
          activePage={activePage}
        />
      </header>
      <div className="current-page-space">
        {currentPage()}
      </div>
    </div>
  );
}

export default App;
