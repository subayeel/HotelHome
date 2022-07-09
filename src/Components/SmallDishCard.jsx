
import React, { useState } from "react";
import { DishCardContainer, FillArea } from "./styled/DishCard.styled";
import {
  Center,
  FlexItem,
  FlexContainer,
  LinkButton,
  RatingBox,
  
} from "./styled/VegPage.styled";

function SmallDishCard(props) {
  var setModal = props.handleState;

  function openModal() {
    setModal(true);
  }
  return (
    <DishCardContainer
      height="290px"
      width="220px"
      onClick={() => {
        openModal();
      }}
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/shwarma.PNG?alt=media&token=164b2793-0b8f-4cda-95a7-950868165a98"
        alt=""
      />

      <h3>{props.dishName}</h3>
      <small>Turkish Cusine</small>
      <FlexContainer>
        <FlexItem margin="10px" flex="33%">
          <RatingBox>4.6</RatingBox>
        </FlexItem>
        <FlexItem margin="10px" flex="33%">
          <small>12pm-3pm</small>
        </FlexItem>
        <FlexItem margin="10px" flex="33%">Rs. 120</FlexItem>
      </FlexContainer>
      <hr></hr>
      <Center>
        <LinkButton>Subscribe</LinkButton>
      </Center>
    </DishCardContainer>
  );
}

export default SmallDishCard;
