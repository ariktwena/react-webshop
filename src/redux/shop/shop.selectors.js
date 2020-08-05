import { createSelector } from 'reselect';

//Input selector: A selector that takes the whole state, but only gives us part of it.
const selectShop = state => state.shopReducer;

//Output selector where we output the value we selected
export const selectShopCollections = createSelector(
    [selectShop],
    shopReducer => shopReducer.collections
)