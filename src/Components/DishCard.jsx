import "../Styles/DishCard.scss";
import { FaCartPlus } from "react-icons/fa";

import React from "react";

function DishCard(props) {
  return (
    <div className="main-dish-card">
      <div className="dish-plate">
        <div className="dish-image">
          <img
            src="https://www.kindpng.com/picc/m/110-1105729_meal-png-download-image-food-top-view-png.png"
            alt=""
          />
        </div>
      </div>
      
      

      <div className="dish-content">
      <div className="cart-button">
        <div className="cart-icon">
          <FaCartPlus />
        </div>
      </div>
        <div className="dish-header">
          <span className="dish-name">{props.dishName}</span>
          <span className="calories">Calories 50</span>
        </div>
        <hr className="dish-line"></hr>
        <div className="dish-details">
          <div className="price-col">
            <span>Price</span>
            <span>190 Rs.</span>
          </div>
          <div className="potion-col">
            <span>Price</span>
            <span>190 Rs.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
