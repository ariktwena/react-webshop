import React from "react";

import './cart-item.styles.scss';

//Import redux components
import {connect} from "react-redux";
import { addItemToCart } from '../../redux/cart/cart.actions'

const CartItem = ({ item, addItemToCart }) => {

    //We destructure item object
    const { name, imageUrl, price, quantity } = item;

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item'/>

            <div className='item-details'>
                <span className='name'>{name}</span>
                {/*we add "$" because the price is in dollars :)*/}
                <span className='price'>{quantity} x ${price}</span>
            </div>

        </div>
    )
}

//HERE WE SET THE GLOBAL STATE
//We add the state from the global state, that is used to render
const mapDispatchToProps = dispatch => ({
    //We are dispatching the user object into the addItemCart function
    addItemToCart: cartItems => dispatch(addItemToCart(cartItems))
});

//We dont pass in a value for cartItem to begin with. Therefor its null
export default connect(null, mapDispatchToProps)(CartItem);
// export default CartItem;