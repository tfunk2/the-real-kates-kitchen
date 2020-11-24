import React from 'react';
import '../stylesheets/NavBar.css';
import HandwrittenMainDishes from '../images/handwritten-main-dishes-antiquewhite.png'
import HandwrittenSideDishes from '../images/handwritten-side-dishes-antiquewhite.png'
import HandwrittenDesserts from '../images/handwritten-desserts-antiquewhite.png'

export default function NavBar({ activePage, setActivePage, clickedRecipe }) {

    return (
        <nav className="navbar-nav">
            <ul className="navbar-ul">
                <li className={
                        activePage === "main" &&
                        clickedRecipe !== "" ? 
                        "active-tab-dark navbar-li" : 
                        activePage === "main"  ? 
                        "active-tab navbar-li" : 
                        "navbar-li"
                    } onClick={() => setActivePage("main")}>
                    <img src={HandwrittenMainDishes} className="handwritten-img"></img>
                </li>
                <li className={
                        activePage === "side" &&
                        clickedRecipe !== "" ? 
                        "active-tab-dark navbar-li" : 
                        activePage === "side" ? 
                        "active-tab navbar-li" : 
                        "navbar-li"
                    } onClick={() => setActivePage("side")}>
                    <img src={HandwrittenSideDishes} className="handwritten-img"></img>
                </li>
                <li className={
                        activePage === "dessert" &&
                        clickedRecipe !== "" ? 
                        "active-tab-dark navbar-li" : 
                        activePage === "dessert" ? 
                        "active-tab navbar-li" : 
                        "navbar-li"
                    } onClick={() => setActivePage("dessert")}>
                    <img src={HandwrittenDesserts} className="handwritten-img"></img>
                </li>
            </ul>
        </nav>
    )
}