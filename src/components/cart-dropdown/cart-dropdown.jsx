import React from "react";

import CustomButton from "../custom-button/custom-button";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  return ( 
    <div className='cart-dropdown' >
      <div className='cart-items' >

      </div>
      <CustomButton text='GO TO CHECKOUT' />
    </div>
  );
}
 
export default CartDropdown;