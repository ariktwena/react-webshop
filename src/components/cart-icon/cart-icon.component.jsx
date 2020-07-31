import React from "react";

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//Import redux components
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>

      {/*Shopping icon*/}
      <ShoppingIcon className='shopping-icon' />

      <span className='item-count'>0</span>

  </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// export default CartIcon;
export default connect(null, mapDispatchToProps)(CartIcon);

