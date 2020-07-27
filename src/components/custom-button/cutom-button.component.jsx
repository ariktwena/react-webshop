import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    // We make a custom button with an IF statement to give the button an extra class name of 'google-sign-in'
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
        {/*Children is the text we put between the  component <CustomButton>This is the children</CustomButton>*/}
        {children}
    </button>
)

export default CustomButton;