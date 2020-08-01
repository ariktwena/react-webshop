//Function that cart redux is using

export const addItemToCartFunction = (cartItems, cartItemToAdd) => {

    //We loop trough the cart items "cartItems", and check every "cartItem.id" up against our "cartItemToAdd.id" to see if they match.
    //If they do, we set our existingCartItems to the exact cartItem. Else the existingCartItems = undefined
    const existingCartItems = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id);

    //If existingCartItems exists
    if(existingCartItems) {
        //we return a new array
        return cartItems.map(cartItem =>
            //If they mach like before
            cartItem.id === cartItemToAdd.id
                //We return a new item, where we add all the old cartItem props, but set the quantity to +1
                ? { ...cartItem, quantity: cartItem.quantity +1 }
                //We they dont match, we just return the original item
                : cartItem
        )
    }

    //If the cartItemToAdd doesn't exist and existingCartItems = undefined, we return a new array, where we add the
    //cartItemToAdd to the existing cartItems with a BASE quantity = 1.
    //Quantity will automatically be attached to the cartItemToAdd when it's not already in the array
    return [...cartItems, {...cartItemToAdd, quantity: 1}]

}

