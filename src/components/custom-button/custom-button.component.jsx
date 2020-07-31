import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    // We make a custom button with an IF statement to give the button an extra class name of for example 'google-sign-in' and 'inverted'
    <button className={
        `${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps} >
        {/*Children is the text we put between the  component <CustomButton>This is the children</CustomButton>*/}
        {children}
    </button>
)

export default CustomButton;