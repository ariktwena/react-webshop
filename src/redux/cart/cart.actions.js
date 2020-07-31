//Import action types
import CartActionTypes from './cart.types';

//We don't need to pass in a payload, because we are toggling the state value
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

