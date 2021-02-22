import React from 'react';
import { connect } from "react-redux";
import { BsBag } from "react-icons/bs";
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import "./cart-icon.scss";



const CartIcon = ({toggleCartHidden, red}) => {
  return ( 
    <div className='cart-icon' onClick = {toggleCartHidden} >
      <BsBag className={`shopping-icon ${red ? 'red' : ''}`} />
      <span className='item-count' >0</span>
    </div>
  );
}

const mapStateToProps = ({cart: {red}}) => ({
  red
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
 
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);