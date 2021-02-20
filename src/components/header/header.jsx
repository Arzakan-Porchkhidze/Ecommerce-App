import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.scss";



const Header = ({currentUser}) => {
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
        
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);