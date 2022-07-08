import React from 'react';
import "../Styles/DishModal.css";
import { StyledButton } from './styled/Button.styled';

function Button(props) {
  return (
    <StyledButton>
    {props.text}
    {/* <button className='primary-btn'>{props.text}</button> */}
    </StyledButton>
  )
}

export default Button