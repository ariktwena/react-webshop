import React from "react";

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//Import redux components
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>

      {/*Shopping icon*/}
      <ShoppingIcon className='shopping-icon' />

      <span className='item-count'>{itemCount}</span>

  </div>
);

//We get the global state
//ADVANCED WAY of destructuring the globalState
const mapStateToProps = ({ cartReducer: { cartItems } }) => ({
    cartItems,
    //We make a new object, that is not in the global state, and add a function calculation to it
    itemCount: cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity, 0)
});

//WE set the global state
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// export default CartIcon;
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

