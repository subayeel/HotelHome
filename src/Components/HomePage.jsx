import React, { useState } from "react";
import DishModal from "./DishModal";
import ProfileCard from "./ProfileCard";
import "../Styles/HomePage.scss";
import DishCard from "./DishCard";
import dishes from "../data/dishes.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import VegPage from "./VegPage";
import CircularAvatar from "./CircularAvatar";
import chefs from "../data/cheflist";

function HomePage() {
  const [modalState, setModal] = useState(false);
  var openModal = () => {
    setModal(true);
  };

  // window.addEventListener("click",function(){
  //   setProfileCard(false);
  // })
  function createDishCard(details) {
    return <DishCard dishName={details.dishName}></DishCard>;
  }
  function createChefAvatar(details) {
    return <CircularAvatar image={details.image}></CircularAvatar>;
  }
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<DishModal></DishModal>}></Route>
          <Route path="/vegpage" element={<VegPage />}></Route>
        </Routes>
      </Router>
      <section className="veg-page">
        <div className="first-half-veg-page">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/veg-removebg-preview.png?alt=media&token=d16c09a3-627e-426f-a075-ddf8b93ce73d"
            alt=""
          />
        </div>
        <div className="second-half-veg-page">
          <span className="veg-title">Vegeterian Chef nearby</span>
          <div className="map-window">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36830.14552207696!2d74.51758169331063!3d14.000682446210506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc431e28dabfab%3A0x7060a42cfeac9a4!2sBhatkal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1656352633733!5m2!1sen!2sin"
              width="600"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="scroll-chef">
            <div className="chef-list">{chefs.map(createChefAvatar)}</div>
          </div>
        </div>
      </section>
      <button
        onClick={() => {
          openModal();
        }}
      >
        Select Dish
      </button>

      <DishModal show={modalState} handleState={setModal}></DishModal>

      <div className="scroll-parent">
        <div className="dish-list">{dishes.map(createDishCard)}</div>
      </div>
    </div>
  );
}

export default HomePage;
