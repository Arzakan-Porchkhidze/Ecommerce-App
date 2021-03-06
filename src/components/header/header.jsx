import React from "react";
import { createStructuredSelector } from "reselect";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import "./header.scss";



const Header = ({currentUser, hidden}) => {
  return(
    <div className='header'>
      <NavLink to="/" className='logo-container'>
        <Logo className='logo'/>
      </NavLink>
      <div className='options'>
        <NavLink to='/shop' className='option'>
          SHOP
        </NavLink>
        <NavLink to='/shop' className='option'>
          CONTACT
        </NavLink>
        {
          currentUser ? 
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <NavLink to='/signin' className='option'>SIGN IN</NavLink>
        }
        <CartIcon />
      </div>
      {
        hidden ? null
        :
        <CartDropdown />
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);