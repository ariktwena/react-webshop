import React from "react";

import './collection-item.styles.scss';

import CustomButton from "../custom-button/custom-button.component";

//Import higher component for redux
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItemToCart }) => {

    //We destructure item, because we need the whole "item" for the global state
    const { name, imageUrl, price } = item;

    return (
        <div className='collection-item'>

            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>
                {/*<img src={imageUrl} alt=''/>*/}
            </div>

            <div className='collection-footer'>

                <span className='name'>{name}</span>
                <span className='price'>{price}</span>

            </div>

            {/*Custom button*/}
            <CustomButton inverted onClick={() => addItemToCart(item)}>Add to cart</CustomButton>

        </div>
    )
}

// //ADVANCED WAY of destructuring the globalState
// const mapStateToProps = ({ cartReducer: { cartItems } }) => ({
//     cartItems
// });

//We add the state from the global state, that is used to render
const mapDispatchToProps = dispatch => ({
    //We are dispatching the user object into the addItemCart function
    addItemToCart: cartItems => dispatch(addItemToCart(cartItems))
});

//We dont pass in a value for cartItem to begin with. Therefor its null
export default connect(null, mapDispatchToProps)(CollectionItem);
// export default CollectionItem;