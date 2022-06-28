import "../Styles/CircularAvatar.scss";

import React from "react";

function CircularAvatar(props) {
  return (
    <div className="circular-bg">
      <img src={props.image} alt="" />
    </div>
  );
}

export default CircularAvatar; 
