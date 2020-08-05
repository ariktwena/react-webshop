//The root-reducer is the base reducer, that holds all our reducers with individual state's

//The combine reducer we use to combine all the reducers with
import { combineReducers } from "redux";

//All the children reducers we import
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

//Import persistReducer from redux-persist
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; //Uses local storage
import storageSession from 'redux-persist/lib/storage/session' //Uses session storage

//We configure a redux-persist object to hold our storage
const persistConfig = {
    //We want to start storing from the 'root'
    key: 'root',
    //Where and what storage we want to use
    storage,
    //Whitelist is any of the reducers we want to store
    //We dont need to store 'userReducer', because firebase takes care of that part via the Auth
    //REMEMBER '' around the reducer
    whitelist: [
        'cartReducer',
    ],

}

//We combine all the reducers in to ONE rootReducer, and give every reducer a key. userReducer(key): userReducer(object)
//Always call it rootReducer!!!
const rootReducer = combineReducers({
    userReducer: userReducer,
    cartReducer: cartReducer,
    directoryReducer: directoryReducer,
    shopReducer: shopReducer,
});

//We export the rootReducer via the persistReducer with the persistConfig
export default persistReducer(persistConfig, rootReducer);