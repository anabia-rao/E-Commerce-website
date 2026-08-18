import React from "react";
import burger from "../assets/burger.png";
import pizza from "../assets/pizza.png";

function products() {
    return (
        <div className="products">
            <div className="burger">
            <img  className="burger" src={burger} alt="Burger" />
            </div>
            <div className="pizza">
            <img className="pizza" src={pizza} alt="Pizza" />
            </div>
        </div>
    )
}
export default products;