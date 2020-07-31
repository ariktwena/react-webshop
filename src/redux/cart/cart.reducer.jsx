//The state'e that have anything to do with the users

//Import action types
import CartActionTypes from './cart.types';

//We define the initial state/current state
const INITIAL_STATE = {
    cartHidden: true,
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
            }
        default:
            //If no match with action.type, we just return the currentState with no changes
            return currentState;
    }
}

export default cartReducer;