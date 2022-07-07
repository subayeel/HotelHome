import React from "react";
import { StyledAvatar } from "./styled/Avatar.styled";

function Avatar(props) {
  return (
    <>
    <StyledAvatar>
      <img
        src={props.imageUrl}
        alt=""
      />
      </StyledAvatar>
    </>
  );
}

export default Avatar;
