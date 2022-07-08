import React, { useState } from "react";
import DishModal from "./DishModal";
import DishCard from "./DishCard";
import dishes from "../data/dishes.js";
import chefs from "../data/cheflist";
import SmallDishCard from "./SmallDishCard";
import Avatar from "./Avatar";
import {
  HorizontalScrollable,
  StyledContainer,
  StyledTitle,
  StyledVegPage,
} from "./styled/VegPage.styled";
import { StyledAvatar } from "./styled/Avatar.styled";

function HomePage() {
  const [modalState, setModal] = useState(false);

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
    return (
      <StyledAvatar size="100px">
        <Avatar imageUrl={details.imageUrl}></Avatar>
      </StyledAvatar>
    );
  }
  return (
    <div>
      <StyledVegPage>
        <StyledContainer>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/veg-removebg-preview.png?alt=media&token=d16c09a3-627e-426f-a075-ddf8b93ce73d"
            alt=""
          />
        </StyledContainer>
        <StyledContainer>
          <StyledTitle>Vegeterian Chef nearby</StyledTitle>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36830.14552207696!2d74.51758169331063!3d14.000682446210506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc431e28dabfab%3A0x7060a42cfeac9a4!2sBhatkal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1656352633733!5m2!1sen!2sin"
            width="600"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <HorizontalScrollable width="48vw">
            {chefs.map(createChefAvatar)}
          </HorizontalScrollable>
        </StyledContainer>
      </StyledVegPage>

      <StyledTitle>
        <h3>Veg Dishes within range 2Km</h3>
      </StyledTitle>

      <HorizontalScrollable>
        <div>{dishes.map(createSmallDishCard)}</div>
      </HorizontalScrollable>

      <StyledTitle>
        <h3>Veg Dishes within range 5Km</h3>
      </StyledTitle>
      <HorizontalScrollable>
        <div>{dishes.map(createSmallDishCard)}</div>
      </HorizontalScrollable>

      <DishModal show={modalState} handleState={setModal}></DishModal>

      <HorizontalScrollable>
        <div>{dishes.map(createDishCard)}</div>
      </HorizontalScrollable>
    </div>
  );
}

export default HomePage;
