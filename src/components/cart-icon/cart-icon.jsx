import React from 'react';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { BsBag } from "react-icons/bs";
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount, selectRedCart } from "../../redux/cart/cart.selectors";

import "./cart-icon.scss";



const CartIcon = ({toggleCartHidden, red, itemCount}) => {
  return ( 
    <div className='cart-icon' onClick = {toggleCartHidden} >
      <BsBag className={`shopping-icon ${red ? 'red' : ''}`} />
      <span className='item-count' >{itemCount}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  red: selectRedCart,
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
 
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);