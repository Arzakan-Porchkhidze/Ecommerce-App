import React from 'react';
import { connect } from "react-redux";
import { BsBag } from "react-icons/bs";
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.scss";



const CartIcon = ({toggleCartHidden, red, itemCount}) => {
  return ( 
    <div className='cart-icon' onClick = {toggleCartHidden} >
      <BsBag className={`shopping-icon ${red ? 'red' : ''}`} />
      <span className='item-count' >{itemCount}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  red: state.cart.red,
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
 
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);