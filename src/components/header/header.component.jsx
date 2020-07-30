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

const Header = ({ currentUser }) => (
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
        </div>
    </div>
)

//We check our global state in our rootReducer, and look for the state of our currentUser in our userReducer
//We take the state in the global state, at pass them trough as props
const mapStateToProps = globalState => ({
    currentUser: globalState.userReducer.currentUser
});

//We export the Header component using the currentUser from the global state
export default connect(mapStateToProps)(Header);