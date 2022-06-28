import React from 'react';
import "../Styles/DishModal.css";

function PrimaryButton(props) {
  return (
    <div className='primary-btn'>{props.text}</div>
  )
}

export default PrimaryButton