//The root-reducer is the base reducer, that holds all our reducers with individual state's

//The combine reducer we use to combine all the reducers with
import { combineReducers } from "redux";

//All the children reducers we import
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//We combine all the reducers in to ONE rootReducer, and give every reducer a key. userReducer(key): userReducer(object)
const rootReducer = combineReducers({
    userReducer: userReducer,
    cartReducer: cartReducer
});

export default rootReducer;