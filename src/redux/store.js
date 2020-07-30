import { createStore, applyMiddleware } from "redux";

//We want to se our action in our redux developer tool
import logger from 'redux-logger';

//Import our rooReducer
import rootReducer from "./rootReducer";

//We store an array of log's
const middlewares = [logger];

//We create a store with a callback function "applyMiddleware" with our log array
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;