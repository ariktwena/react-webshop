//We use the selectors to calculate values, that are coming from the global state, but will trigger a global render
//if we add the function to the state. See cart-icon => itemCount in the cartReducer. Here a calculation will trigger
//a global event, that renders all the elements/objects again. So we use "selectors" to calculate selected values,
//that wont necessarily trigger a global render.
//Install: npm install reselect
//Link: https://www.npmjs.com/package/reselect

import { createSelector } from 'reselect';


//Input selector: A selector that takes the whole state, but only gives us part of it.
const selectUser = state => state.userReducer;

//Output selector where we output the value we selected
export const selectCurrentUser = createSelector(
    [selectUser],
    userReducer => userReducer.currentUser
)


/**
 *
 * Example of combined selectors that is stacked
 *
 */
// const selectCart = state => state.cartReducer;
// const selectUser = state => state.userReducer;
//
// export const selectSomething = createSelector(
//     [selectCart, selectUser],
//     (cartReducer, userReducer) => cartReducer.cartItems + userReducer.id
// )

