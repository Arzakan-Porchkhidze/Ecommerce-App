import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.scss";

const CartDropdown = ({cartItems, history, dispatch}) => {
  return ( 
    <div className='cart-dropdown' >
      <div className='cart-items' >

        {cartItems.length > 0 ?
          cartItems.map( item => <CartItem key={item.id} item={item} />)
          : 
          <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <CustomButton 
      onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden())}} 
      text='GO TO CHECKOUT' 
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
 
export default withRouter(connect(mapStateToProps)(CartDropdown));