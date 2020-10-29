import React from 'react';
import '../stylesheets/NavBar.css';

export default function NavBar(props) {

    return (
        <nav className="navbar-nav">
            <ul className="navbar-ul">
                <li className={props.activePage === "main" ? "active-tab navbar-li" : "navbar-li"} onClick={() => props.setActivePage("main")}>
                    <h1 className="navbar-h1">Main Dishes</h1>
                </li>
                <li className={props.activePage === "side" ? "active-tab navbar-li" : "navbar-li"} onClick={() => props.setActivePage("side")}>
                    <h1 className="navbar-h1">Side Dishes</h1>
                </li>
                <li className={props.activePage === "dessert" ? "active-tab navbar-li" : "navbar-li"} onClick={() => props.setActivePage("dessert")}>
                    <h1 className="navbar-h1">Desserts</h1>
                </li>
            </ul>
        </nav>
    )
}