import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps} >
        {/*Children is the text we put between the  component <CustomButton>This is the children</CustomButton>*/}
        {children}
    </button>
)

export default CustomButton;