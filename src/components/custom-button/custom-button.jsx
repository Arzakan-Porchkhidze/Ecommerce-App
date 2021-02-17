import React from "react";
import "./custom-button.scss";


const CustomButton = ({isGoogleSignIn,...otherProps}) => {
  return(
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {otherProps.text}
    </button>
  )
}


export default CustomButton;