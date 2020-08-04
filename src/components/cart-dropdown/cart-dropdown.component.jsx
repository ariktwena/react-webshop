import React from "react";

import './cart-dropdown.styles.scss';

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

//Router component
import { withRouter } from 'react-router';

//Import redux components
import {connect} from "react-redux";

//Import redux selector
import { createStructuredSelector } from "reselect";
import { selectCartItems } from '../../redux/cart/cart.selectors';

//Import actions
//When we do not incl. a dispatch in the connect, "connect" will automatically incl. all known dispatches. So now we can use it "dispatch in our code"
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => ( //IMPORTANT: we destructure the props when it comes from global state ({cartItems})
    <div className='cart-dropdown'>

        <div className='cart-items'>

            {
                cartItems.length === 0
                    //We loop trough the global cartItems, and render a item for every index in the array
                    // console.log(cartItems)
                    ? <span className='empty-message'>Cart is empty</span>
                    : cartItems.map(item => (<CartItem key={item.id} item={item}/>))

            }

        </div>

        {/*withRouter pushes the history (props) to the checkout page*/}
        <CustomButton onClick={() => {
            history.push('/checkout');
            //We insert the toggleCartHidden() because of the ability to use dispatch
            dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>

    </div>
)

//HERE WE GET THE GLOBAL STATE
//ADVANCED WAY of destructuring the globalState
// const mapStateToProps = ({ cartReducer: { cartItems } }) => ({
//     cartItems
// });
//IMPORTANT: We build a selector because the whole page is being renders when we add a item to the cart
//We change ({ cartReducer: { cartItems } }) to "state", så we now look at a memorized state
// const mapStateToProps = state => ({
//     //We call the selector in the "state", and pass in the state, so in goes through all the selectors
//     cartItems: selectCartItems(state) //NOW we only render the cartItems
// });
//WE CAN STRUCTURE OUR STATEMENT WITH "createStructuredSelector" SO THE STATE AUTOMATICALLY IS PASSED IN
//We can use createStructuredSelector when we have multiple states to change
const mapStateToProps = createStructuredSelector({
    //We call the selector in the "state", and pass in the state, so in goes through all the selectors
    cartItems: selectCartItems, //NOW we only render the cartItems
});

//We wrap our connect with the withRouter so react knows there is a router connected to CartDropdown
//This way we pass the props to the route via "history"
export default withRouter(connect(mapStateToProps)(CartDropdown));
// export default CartDropdown;