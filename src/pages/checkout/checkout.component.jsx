import React from "react";

import './checkout.styles.scss';

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

//Import higher component for redux
import { connect } from 'react-redux';

//Import selector Redux
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";

const CheckOut = ({ cartItems, cartTotal }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        {
            cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
        }

        <div className='total'>
            <span className='total'>TOTAL: ${cartTotal}</span>
        </div>

    </div>
)

const mapStateToProps = createStructuredSelector({
    //We call the selector in the "state", and pass in the state, so in goes through all the selectors
    cartItems: selectCartItems, //NOW we only render the cartItems
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);

// export default CheckOut;