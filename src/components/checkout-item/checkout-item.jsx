import React from "react";

import "./checkout-item.scss";

const CeckoutItem = ({cartItem:{name, quantity, price, imageUrl}}) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl}  alt='item'/>
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>{quantity}</div>
      <div className='price'>${price}</div>
      <div className='remove-button'>&#10006;</div>
    </div>
  );
}
 
export default CeckoutItem;