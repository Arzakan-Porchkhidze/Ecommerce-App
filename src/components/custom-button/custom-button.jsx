import React from "react";
import "./custom-button.scss";


const CustomButton = ({isGoogleSignIn, inverted,...otherProps}) => {
  return(
    <button className={`${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''} 
    custom-button`} {...otherProps}>
      {otherProps.text}
    </button>
  )
}


export default CustomButton;