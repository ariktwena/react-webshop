//Function that cart redux is using

export const addItemToCartFunction = (cartItems, cartItemToAdd) => {

    //We loop trough the cart items "cartItems", and check every "cartItem.id" up against our "cartItemToAdd.id" to see if they match.
    //If they do, we set our existingCartItems to true. Else the existingCartItems = undefined
    //The find() loops trough an array, and returns true, on the FIRST value that matches
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id);

    //If existingCartItems exists/true
    if(existingCartItem) {
        //we return a new array
        return cartItems.map(cartItem =>
            //If they mach like before
            cartItem.id === cartItemToAdd.id
                //We return a new item, where we add all the old cartItem props, but set the quantity to +1
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                //We they dont match, we just return the original item
                : cartItem
        )
    }

    //If the cartItemToAdd doesn't exist and existingCartItems = undefined, we return a new array, where we add the
    //cartItemToAdd to the existing cartItems with a BASE quantity = 1.
    //Quantity will automatically be attached to the cartItemToAdd when it's not already in the array
    return [...cartItems, {...cartItemToAdd, quantity: 1}]

}

//Subtract 1 from quantity
export const subtractItemFromCartFunction = (cartItems, cartItemToRemove) => {

    //We loop trough the cart items "cartItems", and check every "cartItem.id" up against our "cartItemToRemove.id" to see if they match.
    //If they do, we set our existingCartItems to true. Else the existingCartItems = undefined
    //The find() loops trough an array, and returns true, on the FIRST value that matches
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1) {
        //We check if the to id's DON'T match, and return true if they DON't match (we keep the item in the array)
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    //If the quantity is not 1, then we know its more the 1.
    return cartItems.map(cartItem =>
        //If they mach like before
        cartItem.id === cartItemToRemove.id
            //We check if the quantity is 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            //We they dont match, we just return the original item
            : cartItem
    )
}

//Remove item from cart
export const removeItemFromCartFunction = (cartItems, cartItemToClear) => {

    //We check if the to id's DON'T match, and return true if they DON't match (we keep the item in the array)
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}


