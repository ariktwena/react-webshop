//We use the selectors to calculate values, that are coming from the global state, but will trigger a global render
//if we add the function to the state. See cart-icon => itemCount in the cartReducer. Here a calculation will trigger
//a global event, that renders all the elements/objects again. So we use "selectors" to calculate selected values,
//that wont necessarily trigger a global render.
//Install: npm install reselect
//Link: https://www.npmjs.com/package/reselect

import { createSelector } from 'reselect';


//Input selector: A selector that takes the whole state, but only gives us part of it.
const selectCart = state => state.cartReducer;

//Output selector where we output the value we selected
export const selectCartItems = createSelector(
    [selectCart],
    cartReducer => cartReducer.cartItems
)

//We can also pass in smaller components as a selector. In this case we use "selectCartItems" instead of "selectCart"
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity, 0)
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

