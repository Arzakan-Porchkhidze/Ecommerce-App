import React from "react";

import "./with-spinner.scss";

const withSpinner = (WrappedComponent) => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <div className='spinner-overlay'>
      <div className='spinner-container'/>
    </div>
  ) : 
  (
    <WrappedComponent {...otherProps} />
  )
}
 
export default withSpinner;