import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";



const Header = () => {
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
      </div>
    </div>
  );
}

export default Header;