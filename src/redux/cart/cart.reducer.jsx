//The state'e that have anything to do with the users

//Import action types
import CartActionTypes from './cart.types';

//Import cart reducer functions
import { addItemToCartFunction, subtractItemFromCartFunction, removeItemFromCartFunction } from './cart.utils';

//We define the initial state/current state
const INITIAL_STATE = {
    cartHidden: true,
    cartItems: []
}


//The current state is what the state is now. The action is the custom action that we write like "ADD_USER_ON_CLICK".
//currentState = INITIAL_STATE means that if ever currentState is undefined, it will fall beach to INITIAL_STATE
const cartReducer = (currentState = INITIAL_STATE, action) => {

    //We lop trough the actions to find the action the equals the action.type (string) that we pass trough
    switch (action.type) {
        //When the action.type = TOGGLE_CART_HIDDEN
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                //First we import everything in the state
                ...currentState,
                //We toggle the currentState. "!" means we switch to the opposite value of what the currentState is now. If true => false. If false => true.
                cartHidden: !currentState.cartHidden
            };
        //When the action.type = ADD_TO_CART
        case CartActionTypes.ADD_TO_CART:
            return {
                //First we import everything in the state
                ...currentState,
                //We want to add an item to our array, so first we pass in the existing array og cartItems (...currentState.cartItems)
                //Then we pass in a new item in the END of that array from the payload (, action.payload)
                //cartItems: [...currentState.cartItems, action.payload]
                //Our new function where we add cartItems to an Array, where we check for matching cartItems and increase quantity
                cartItems: addItemToCartFunction(currentState.cartItems, action.payload)
            };
        //When the action.type = REMOVE_FROM_CART
        case CartActionTypes.REMOVE_FROM_CART:
            return {
                //First we import everything in the state
                ...currentState,
                //We want to add an item to our array, so first we pass in the existing array og cartItems (...currentState.cartItems)
                //Then we pass in a new item in the END of that array from the payload (, action.payload)
                //cartItems: [...currentState.cartItems, action.payload]
                //Our new function where we add cartItems to an Array, where we check for matching cartItems and decrease quantity
                cartItems: subtractItemFromCartFunction(currentState.cartItems, action.payload)
            };
        //When the action.type = CLEAR_ITEM_FROM_CART
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                //First we import everything in the state
                ...currentState,
                //We want to add an item to our array, so first we pass in the existing array og cartItems (...currentState.cartItems)
                //Then we pass in a new item in the END of that array from the payload (, action.payload)
                //cartItems: [...currentState.cartItems, action.payload]
                //We check if the to id's DON'T match, and return true if they DON't match (we keep the item in the array)
                // cartItems: currentState.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                cartItems: removeItemFromCartFunction(currentState.cartItems, action.payload)
            };
        default:
            //If no match with action.type, we just return the currentState with no changes
            return currentState;
    }
}

export default cartReducer;