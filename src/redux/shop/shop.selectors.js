import { createSelector } from 'reselect';

//IMPORTANT!!!!
//The selectCollection function is not memoized due to collectionUrlParam being passed in from our
// collection component's mapStateToProps running whenever our state changes and calling a new instance
// of our selectCollection function. In this case collectionUrlParam is a dynamic argument meaning it
// can change, so to memoize selectCollection we actually have to memoize the whole function
// using a memoize helper function.
//Install: npm install lodash.memoize
import memoize from 'lodash.memoize';

//Input selector: A selector that takes the whole state, but only gives us part of it.
const selectShop = state => state.shopReducer;

//Output selector where we output the value we selected
export const selectShopCollections = createSelector(
    [selectShop],
    shopReducer => shopReducer.collections
)




//We hardcode our string url value to an ID... Must find a better way :(
//We do this so we can compare a string value to a int id
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5,
// }
//We build a selector for our hardcoded url string -> ID
//collectionUrlParam is a string like "hats" or "jackets" that we find() in the COLLECTION_ID_MAP
//Memoize does the same idea of memoization as reselect does for our selectors, except this
// time we're memoizing the return of our function which returns our selector:
export const selectCollection =  memoize(collectionUrlParam => createSelector(
    [selectShopCollections], //We use the selectShopCollections that point to the collections
    //We search for the collection.id that matches COLLECTION_ID_MAP[collectionUrlParam]
    //COLLECTION_ID_MAP[collectionUrlParam] can for example be COLLECTION_ID_MAP[sneakers] => 2
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    //We have "Normalized" our SHOP_DATA to be an object, so we can now use instead of hardcode the COLLECTION_ID_MAP
    collections => collections[collectionUrlParam])
);
//By wrapping this function is memoize, we're saying that whenever this function gets called and receives collectionUrlParam,
// I want to memoize the return of this function (in this case we return a selector). If this function gets called again
// with the same collectionUrlParam, don't rerun this function because we'll return the same value as last time, which we've
// memoized so just return the selector that's been stored.

//We convert selectShopCollections (return object with list of objects) to selectCollectionsForPreview (returns an array)
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    //We convert the object to an array
    //object: {a: 5} => key = a, value = 5
    //We first get all the keys, then we map over the keys, to get the key's value
    collections => Object.keys(collections).map(key => collections[key])

)

