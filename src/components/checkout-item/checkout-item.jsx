import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, removeItem, addItem } from "../../redux/cart/cart.actions";

import "./checkout-item.scss";

const CeckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
  const {name, quantity, price, imageUrl} = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl}  alt='item'/>
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>
        <div className='decrease' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <div className='value'>{quantity}</div>
        <div className='increase' onClick={() => addItem(cartItem)}>&#10095;</div>
      </div>
      <div className='price'>${price}</div>
      <div className='remove-button' onClick={() => clearItem(cartItem)} >&#10006;</div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: cartItem => dispatch(clearItemFromCart(cartItem)),
  addItem: cartItem => dispatch(addItem(cartItem)),
  removeItem: cartItem => dispatch(removeItem(cartItem))
})
 
export default connect(null, mapDispatchToProps)(CeckoutItem);