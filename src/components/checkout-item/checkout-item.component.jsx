import React from "react";

import './checkout-item.styles.scss';

//Import redux components
import {connect} from "react-redux";

//Import redux actions
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../redux/cart/cart.actions';

//Destructure cartItem this way, because we also need to whole cartItem to remove items from the cartItems array
const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {

    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>

            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>

        </div>
    )
}

//SET STATE
//We add the state from the global state, that is used to render
const mapDispatchToProps = dispatch => ({
    //We are dispatching the user object into the addItemCart function
    clearItem: cartItem => dispatch(clearItemFromCart(cartItem)),
    addItem: cartItem => dispatch(addItemToCart(cartItem)),
    removeItem: cartItem => dispatch(removeItemFromCart(cartItem)),
});

//We dont pass in a value for cartItem to begin with. Therefor its null
export default connect(null, mapDispatchToProps)(CheckoutItem);
// export default CheckoutItem;


