import React from "react";

import './form-input.styles.scss';

//We destructure the input that the function is getting
const FormInput = ({ handleChange, label, ...otherProps }) => (
    // We group the components together
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            // We will render a label component IF we want to render one
            label
                //IF we have a "label" the length > 1 => it gets added class name of "shrink". Else its just "form-input-label"
                ? (<label className={`${ otherProps.value.length ? 'shrink' : '' } form-input-label`}>{label}</label>)
                : null
        }
    </div>
)

export default FormInput;