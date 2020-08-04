//Import action types
import CartActionTypes from './cart.types';

//We don't need to pass in a payload, because we are toggling the state value
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_TO_CART,
    //Payload is what we want to change og compare to. The "load" we give to the reducer
    payload: item
})

export const removeItemFromCart = (item) => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})