import React from "react";

import './header.styles.scss'

//We import Link, so we can make a link to our home page
import { Link } from 'react-router-dom';

//Import our svg image
import { ReactComponent as Logo } from '../../assets/crown.svg'

//Import firebase auth
import { auth } from '../../firebase/firebase.util';

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

export default Header;