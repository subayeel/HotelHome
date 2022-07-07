import React, { useState } from "react";
import DishModal from "./DishModal";
import "../Styles/HomePage.scss";
import DishCard from "./DishCard";
import dishes from "../data/dishes.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import VegPage from "./VegPage";
import chefs from "../data/cheflist";
import SmallDishCard from "./SmallDishCard";
import { StyledNavbar } from "./styled/Navbar.styled";
import Avatar from "./Avatar";
import { ThemeProvider } from "styled-components";

function HomePage() {
  const [modalState, setModal] = useState(false);
  var openModal = () => {
    setModal(true);
  };

  // window.addEventListener("click",function(){
  //   setProfileCard(false);
  // })

  const theme = {
    colors: {
      primarybg: "#F4F0E8",
      secondarybg: "#F7F7F7",
      primaryColor: "#21665A",
      brownBtnColor: "#743201",
      orangeBtnColor: "#FF6801",
    },
  };

  function createDishCard(details) {
    return <DishCard dishName={details.dishName}></DishCard>;
  }

  function createSmallDishCard(details) {
    return (
      <SmallDishCard
        dishName={details.dishName}
        handleState={setModal}
      ></SmallDishCard>
    );
  }
  function createChefAvatar(details) {
    return <Avatar large imageUrl={details.imageUrl}></Avatar>;
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <StyledNavbar>
          <Navbar></Navbar>
        </StyledNavbar>
        <Routes>
          <Route path="/" element={<DishModal></DishModal>}></Route>
          <Route path="/vegpage" element={<VegPage />}></Route>
        </Routes>
      </Router>
      <section className="veg-page-main">
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
      <section className="nearby-dishes">
        <h3>Veg Dishes within range 2Km</h3>
        <div className="scroll-parent">
          <div className="dish-list">{dishes.map(createSmallDishCard)}</div>
        </div>

        <h3>Veg Dishes within range 5Km</h3>
        <div className="scroll-parent">
          <div className="dish-list">{dishes.map(createSmallDishCard)}</div>
        </div>
      </section>

      <DishModal show={modalState} handleState={setModal}></DishModal>

      {/* <div className="scroll-parent">
        <div className="dish-list">{dishes.map(createDishCard)}</div>
      </div> */}
    </ThemeProvider>
  );
}

export default HomePage;
