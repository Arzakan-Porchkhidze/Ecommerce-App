import React from "react";
import "./custom-button.scss";


const CustomButton = ({...otherProps}) => {
  return(
    <button className='custom-button' {...otherProps}>
      SIGN IN
    </button>
  )
}


export default CustomButton;