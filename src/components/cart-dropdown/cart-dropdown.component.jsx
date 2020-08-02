import React from "react";

import './cart-dropdown.styles.scss';

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

//Import redux components
import {connect} from "react-redux";

//Import redux selector
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems}) => ( //IMPORTANT: we destructure the props when it comes from global state ({cartItems})
    <div className='cart-dropdown'>

        <div className='cart-items'>

            {
                //We loop trough the global cartItems, and render a item for every index in the array
                // console.log(cartItems)
                cartItems.map(item => (<CartItem key={item.id} item={item}/>))

            }

        </div>

        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)

//HERE WE GET THE GLOBAL STATE
//ADVANCED WAY of destructuring the globalState
// const mapStateToProps = ({ cartReducer: { cartItems } }) => ({
//     cartItems
// });
//IMPORTANT: We build a selector because the whole page is being renders when we add a item to the cart
//We change ({ cartReducer: { cartItems } }) to "state", så we now look at a memorized state
const mapStateToProps = state => ({
    //We call the selector in the "state", and pass in the state, so in goes through all the selectors
    cartItems: selectCartItems(state) //NOW we only render the cartItems
});

export default connect(mapStateToProps)(CartDropdown);
// export default CartDropdown;