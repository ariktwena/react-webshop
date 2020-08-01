import React from "react";

import './header.styles.scss'

//We import Link, so we can make a link to our home page
import { Link } from 'react-router-dom';

//Import our svg image
import { ReactComponent as Logo } from '../../assets/crown.svg'

//Import firebase auth
import { auth } from '../../firebase/firebase.util';

//Import higher component for redux
import { connect } from 'react-redux';

//Shopping/cart icon
import CartIcon from "../cart-icon/cart-icon.component";

//Cart dropdown component
import CartDropdown from "../cart-dropdown/cart-dropdown.component";


const Header = ({ currentUser, cartHidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>

            <Link className='option' to='/contact'>
                CONTACT
            </Link>

            {/*If statement to show sign out link if user is logged in*/}
            {
                currentUser
                    ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className='option' to='/signin'>SIGN IN</Link>
            }

            {/*Shopping/cart icon*/}
            <CartIcon />
        </div>

        {/*We place the cart dropdown outside the options div, so it looks like it's under the cart*/}
        {
            // We place the cart dropdown outside the options div, so it looks like it's under the cart
            cartHidden
                //If the cartHidden is true we do nothing, otherwise we show the cartDropdown
                ? null
                : <CartDropdown />
        }



    </div>
)

//We check our global state in our rootReducer, and look for the state of our currentUser in our userReducer
//We take the state in the global state, at pass them trough as props
const mapStateToProps = globalState => ({
    currentUser: globalState.userReducer.currentUser,
    cartHidden: globalState.cartReducer.cartHidden
});
//ADVANCED WAY of destructuring the globalState
// const mapStateToProps = ({ userReducer: { currentUser }, cartReducer: { cartHidden } }) => ({
//     currentUser,
//     cartHidden
// });

//We export the Header component using the currentUser and cartHidden from the global state
export default connect(mapStateToProps)(Header);