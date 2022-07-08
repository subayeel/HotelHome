import React from "react";
import { StyledAvatar } from "./styled/Avatar.styled";

function Avatar(props) {
  return (
    <>
      
        <div>
          <img src={props.imageUrl} alt="" />
        </div>
      
    </>
  );
}

export default Avatar;
