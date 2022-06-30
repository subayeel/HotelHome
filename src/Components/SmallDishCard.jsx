import "../Styles/SmallDishCard.scss";
import React, { useState, } from "react";

function SmallDishCard(props) {
  var setModal = props.handleState;

  function openModal(){
    setModal(true);
  }
  return (
    <div className="main-card" onClick={()=>{openModal()}}>
      <div className="card-content">
        <div className="dish-image">
          <img  
            src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/shwarma.PNG?alt=media&token=164b2793-0b8f-4cda-95a7-950868165a98"
            alt=""
          />
        </div>
        <div className="dish-details">
          <h3>{props.dishName}</h3>
          <small>Turkish Cusine</small>
          <div className="dish-price">
            <div className="dish-rating">
              <span className="rating-text">4.6</span>
            </div>
            <div className="dish-timing">12pm-3pm</div>
            <div className="dish-cost">
              <span className="price-text">Rs. 120</span>
            </div>
          </div>
          <hr></hr>
          <div className="subscribe-link">
            <span className="subscribe-text">Subscribe</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallDishCard;
