import React from "react";

import './cart-dropdown.styles.scss';

import CustomButton from "../custom-button/cutom-button.component";
import CartItem from "../cart-item/cart-item.component";


const CartDropdown = () => (
    <div className='cart-dropdown'>

        <CartItem className='cart_items' />

        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)

export default CartDropdown;