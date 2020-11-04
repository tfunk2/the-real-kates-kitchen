import React from 'react';
import '../stylesheets/NavBar.css';

export default function NavBar({ activePage, setActivePage, clickedRecipe }) {

    return (
        <nav className="navbar-nav">
            <ul className="navbar-ul">
                <li className={activePage === "main" && clickedRecipe !== "" ? "active-tab-dark navbar-li" : activePage === "main"  ? "active-tab navbar-li" : "navbar-li"} onClick={() => setActivePage("main")}>
                    <h1 className="navbar-h1">Main Dishes</h1>
                </li>
                <li className={activePage === "side" && clickedRecipe !== "" ? "active-tab-dark navbar-li" : activePage === "side" ? "active-tab navbar-li" : "navbar-li"} onClick={() => setActivePage("side")}>
                    <h1 className="navbar-h1">Side Dishes</h1>
                </li>
                <li className={activePage === "dessert" && clickedRecipe !== "" ? "active-tab-dark navbar-li" : activePage === "dessert" ? "active-tab navbar-li" : "navbar-li"} onClick={() => setActivePage("dessert")}>
                    <h1 className="navbar-h1">Desserts</h1>
                </li>
            </ul>
        </nav>
    )
}