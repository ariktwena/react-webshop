import { createStore, applyMiddleware } from "redux";

//We want to se our action in our redux developer tool
import logger from 'redux-logger';

//Import our rootReducer
import rootReducer from "./rootReducer";

//we import redux-persist som we can save/cache the cartItems in our local/session storage depending on configurations
//Install: npm install redux-persist
import { persistStore } from "redux-persist";

//We store an array of log's
const middlewares = [logger];

//We create a store with a callback function "applyMiddleware" with our log array
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//This is a "persistor" of our store (a copy)
export const persistor = persistStore(store)

//We return a object as default
export default { store, persistor };