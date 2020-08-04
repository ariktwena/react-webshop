import React from "react";

import './checkout-item.styles.scss';

//Import redux components
import {connect} from "react-redux";

//Import redux actions
import { clearItemFromCart } from '../../redux/cart/cart.actions';

//Import redux selector
import { createStructuredSelector } from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {addItemToCart} from "../../redux/cart/cart.actions";

//Destructure cartItem this way, because we also need to whole cartItem to remove items from the cartItems array
const CheckoutItem = ({cartItem, clearItem}) => {

    const {name, imageUrl, price, quantity, id} = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
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
    clearItem: cartItem => dispatch(clearItemFromCart(cartItem))
});

//We dont pass in a value for cartItem to begin with. Therefor its null
export default connect(null, mapDispatchToProps)(CheckoutItem);
// export default CheckoutItem;


