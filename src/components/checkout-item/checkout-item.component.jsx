import React from "react";

import './checkout-item.styles.scss';

//Import redux components
import {connect} from "react-redux";

//Import redux selector
import { createStructuredSelector } from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";

//Destructure cartItem this way, because we also need to whole cartItem to remove items from the cartItems array
const CheckoutItem = ({ item: {name, imageUrl, price, quantity, id} }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>

        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>

        <div className='remove-button'>
            &#10005;
        </div>

    </div>
)

// //Set state functions fom selector
// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems,
// });
//
// export default connect(mapStateToProps)(CheckoutItem);
export default CheckoutItem;


